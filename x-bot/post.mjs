// Researches what's trending in vibe coding / AI dev tools, writes one post, publishes it to X.
// Usage: SLOT=morning|evening node post.mjs   (DRY_RUN=1 prints instead of posting)
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";

const here = path.dirname(fileURLToPath(import.meta.url));
const HISTORY_FILE = path.join(here, "posted.json");
const MODEL = process.env.CLAUDE_MODEL || "claude-opus-5-5";
const DRY_RUN = process.env.DRY_RUN === "1";
const SLOT = process.env.SLOT === "evening" ? "evening" : "morning";
const MAX_LEN = 280;

const SLOT_BRIEF = {
  morning:
    "NEWS TAKE. Find the single most talked-about vibe coding / AI coding tool story from the last 48 hours " +
    "(new releases, launches, viral threads, benchmarks, drama). Post a sharp take: what happened and why a builder should care.",
  evening:
    "PRACTICAL VALUE. Pick a trending tool, workflow or technique in vibe coding (Cursor, Claude Code, Lovable, Bolt, v0, " +
    "Replit, Windsurf, Codex, MCP, prompting patterns, etc.) and give a concrete tip, mini-workflow or comparison people can use today.",
};

const SYSTEM = `You run the X (Twitter) account of a builder who posts about vibe coding and the AI tools around it, for new and intermediate builders.
Today is ${new Date().toISOString().slice(0, 10)}.

Process: use web search to find what is actually trending right now (recent days). Prefer primary sources and things many people are discussing. Never invent facts, numbers, versions or quotes; if you are not sure, leave it out.

Write exactly ONE post:
- Max ${MAX_LEN} characters including any link. Plain text, no markdown.
- Strong first line (the hook). Concrete and specific, no hype words like "game-changer" or "revolutionary".
- Conversational, first-person builder voice. At most 1 emoji, at most 1 hashtag (optional).
- Only include a URL if it is a real source you found; it counts as 23 characters.
- Must not repeat the topics in the recent-posts list.

Reply with ONLY a JSON object: {"topic": "<short topic label>", "post": "<tweet text>", "why": "<one line on why it is trending>"}`;

function tweetLength(text) {
  return [...text.replace(/https?:\/\/\S+/g, "x".repeat(23))].length;
}

function loadHistory() {
  try {
    return JSON.parse(fs.readFileSync(HISTORY_FILE, "utf8"));
  } catch {
    return [];
  }
}

function extractJson(message) {
  const text = message.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n");
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error(`No JSON in model reply: ${text.slice(0, 300)}`);
  return JSON.parse(text.slice(start, end + 1));
}

async function generatePost(history) {
  const client = new Anthropic();
  const recent = history.slice(-30).map((h) => `- ${h.topic}: ${h.post.slice(0, 80)}`).join("\n") || "(none yet)";
  let feedback = "";

  for (let attempt = 0; attempt < 3; attempt++) {
    const messages = [
      {
        role: "user",
        content: `${SLOT_BRIEF[SLOT]}\n\nRecent posts (do not repeat):\n${recent}\n${feedback}`,
      },
    ];
    let response;
    // Server-side web search may pause the turn; resume until the model finishes.
    for (let i = 0; i < 5; i++) {
      response = await client
        .messages.stream({
          model: MODEL,
          max_tokens: 16000,
          system: SYSTEM,
          thinking: { type: "adaptive" },
          output_config: { effort: "medium" },
          tools: [{ type: "web_search_20260209", name: "web_search", max_uses: 6 }],
          messages,
        })
        .finalMessage();
      if (response.stop_reason !== "pause_turn") break;
      messages.push({ role: "assistant", content: response.content });
    }
    if (response.stop_reason === "refusal") throw new Error("Model refused the request");

    const draft = extractJson(response);
    const len = tweetLength(draft.post);
    if (len <= MAX_LEN) return draft;
    feedback = `\nYour previous draft was ${len} characters (limit ${MAX_LEN}). Rewrite it shorter.`;
  }
  throw new Error("Could not produce a post within the length limit");
}

// X API v2 with OAuth 1.0a user context (no extra dependencies).
function oauthHeader(method, url) {
  const { X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET } = process.env;
  const params = {
    oauth_consumer_key: X_API_KEY,
    oauth_nonce: crypto.randomBytes(16).toString("hex"),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_token: X_ACCESS_TOKEN,
    oauth_version: "1.0",
  };
  const enc = (s) => encodeURIComponent(s).replace(/[!*'()]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
  const paramString = Object.keys(params)
    .sort()
    .map((k) => `${enc(k)}=${enc(params[k])}`)
    .join("&");
  const base = [method, enc(url), enc(paramString)].join("&");
  const key = `${enc(X_API_SECRET)}&${enc(X_ACCESS_TOKEN_SECRET)}`;
  params.oauth_signature = crypto.createHmac("sha1", key).update(base).digest("base64");
  return (
    "OAuth " +
    Object.keys(params)
      .sort()
      .map((k) => `${enc(k)}="${enc(params[k])}"`)
      .join(", ")
  );
}

async function postToX(text) {
  const url = "https://api.x.com/2/tweets";
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: oauthHeader("POST", url), "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`X API ${res.status}: ${JSON.stringify(body)}`);
  return body.data.id;
}

const history = loadHistory();
const draft = await generatePost(history);
console.log(`[${SLOT}] topic: ${draft.topic}\nwhy: ${draft.why}\n\n${draft.post}\n(${tweetLength(draft.post)} chars)`);

if (DRY_RUN) process.exit(0);

const id = await postToX(draft.post);
console.log(`Posted: https://x.com/i/web/status/${id}`);
history.push({ date: new Date().toISOString(), slot: SLOT, topic: draft.topic, post: draft.post, id });
fs.writeFileSync(HISTORY_FILE, JSON.stringify(history.slice(-200), null, 2) + "\n");
