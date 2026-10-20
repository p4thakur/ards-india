// Publishes one post to X and records it in posted.json.
// Usage: node x-post.mjs "<text>" "<topic>" [--dry]
// Env: X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const HISTORY_FILE = path.join(here, "posted.json");
const [text, topic = "", flag] = process.argv.slice(2);
if (!text) {
  console.error('Usage: node x-post.mjs "<text>" "<topic>" [--dry]');
  process.exit(1);
}

const len = [...text.replace(/https?:\/\/\S+/g, "x".repeat(23))].length;
if (len > 280) {
  console.error(`Post is ${len} chars (limit 280). Shorten it.`);
  process.exit(1);
}

const history = fs.existsSync(HISTORY_FILE) ? JSON.parse(fs.readFileSync(HISTORY_FILE, "utf8")) : [];
if (flag === "--dry") {
  console.log(`DRY RUN (${len} chars):\n${text}`);
  process.exit(0);
}

const enc = (s) => encodeURIComponent(s).replace(/[!*'()]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
function oauthHeader(method, url) {
  const { X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET } = process.env;
  if (!X_API_KEY || !X_API_SECRET || !X_ACCESS_TOKEN || !X_ACCESS_TOKEN_SECRET) {
    throw new Error("Missing X_API_KEY / X_API_SECRET / X_ACCESS_TOKEN / X_ACCESS_TOKEN_SECRET");
  }
  const params = {
    oauth_consumer_key: X_API_KEY,
    oauth_nonce: crypto.randomBytes(16).toString("hex"),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_token: X_ACCESS_TOKEN,
    oauth_version: "1.0",
  };
  const keys = Object.keys(params).sort();
  const base = [method, enc(url), enc(keys.map((k) => `${enc(k)}=${enc(params[k])}`).join("&"))].join("&");
  params.oauth_signature = crypto
    .createHmac("sha1", `${enc(X_API_SECRET)}&${enc(X_ACCESS_TOKEN_SECRET)}`)
    .update(base)
    .digest("base64");
  return "OAuth " + Object.keys(params).sort().map((k) => `${enc(k)}="${enc(params[k])}"`).join(", ");
}

const url = "https://api.x.com/2/tweets";
const res = await fetch(url, {
  method: "POST",
  headers: { Authorization: oauthHeader("POST", url), "Content-Type": "application/json" },
  body: JSON.stringify({ text }),
});
const body = await res.json().catch(() => ({}));
if (!res.ok) {
  console.error(`X API ${res.status}: ${JSON.stringify(body)}`);
  process.exit(1);
}
console.log(`Posted: https://x.com/i/web/status/${body.data.id}`);
history.push({ date: new Date().toISOString(), topic, post: text, id: body.data.id });
fs.writeFileSync(HISTORY_FILE, JSON.stringify(history.slice(-200), null, 2) + "\n");
