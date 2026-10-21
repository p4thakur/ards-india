// Publishes the oldest queued post (x-bot/queue/*.json) via x-post.mjs, then removes it from the queue.
// Queue file format: { "text": "<post>", "topic": "<short topic>" }
// Env: X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const queueDir = path.join(here, "queue");
const files = fs.readdirSync(queueDir).filter((f) => f.endsWith(".json")).sort();
if (files.length === 0) {
  console.log("Queue empty, nothing to post.");
  process.exit(0);
}

const file = path.join(queueDir, files[0]);
const { text, topic = "" } = JSON.parse(fs.readFileSync(file, "utf8"));
const run = spawnSync("node", [path.join(here, "x-post.mjs"), text, topic], { stdio: "inherit" });
if (run.status !== 0) {
  console.error(`Failed to post ${files[0]}; leaving it in the queue.`);
  process.exit(run.status ?? 1);
}
fs.unlinkSync(file);
console.log(`Posted and removed ${files[0]}`);
