# x-bot

Posts twice a day to X about vibe coding and AI dev tools. Each run Claude (with web search) researches what's trending, writes one post, and publishes it via the X API. `posted.json` keeps history so topics don't repeat.

- **Morning slot (09:00 IST):** news take on what's trending in the last 48h
- **Evening slot (20:00 IST):** practical tip / workflow / tool comparison

Change times in `.github/workflows/x-post.yml` (cron is UTC; if you edit a cron line, update the matching `'evening'` check too).

## Setup

1. X developer portal: create a Project/App, set permissions to **Read and Write**, then generate API Key/Secret and Access Token/Secret (for your account, *after* enabling write).
2. Add repo secrets: `ANTHROPIC_API_KEY`, `X_API_KEY`, `X_API_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_TOKEN_SECRET`.
3. Actions > "X post" > Run workflow with `dry_run=1` to preview, then `dry_run=0` to post for real.

## Local

```
cd x-bot && npm install
ANTHROPIC_API_KEY=... SLOT=morning npm run dry
```

Note: GitHub only runs scheduled workflows from the default branch.
