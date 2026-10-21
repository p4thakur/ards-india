# x-bot

Three Claude routines (11:00, 15:00, 20:00 IST) each research one news item about vibe coding / AI dev tools, write one post and add it to `x-bot/queue/` as `<timestamp>.json`:

    { "text": "<post text>", "topic": "<short topic>" }

They do not publish. The `x-post` GitHub Action runs at 11:15, 15:15 and 20:15 IST, calls `x-bot/publish-queue.mjs` to post the oldest queued file via `x-post.mjs`, then commits `posted.json` and the emptied queue.

Preview or check a post without publishing:

    node x-bot/x-post.mjs "<post text>" "<topic>" --dry

The Action needs these repository secrets (Settings > Secrets and variables > Actions): `X_API_KEY`, `X_API_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_TOKEN_SECRET`. The X app must have Read and Write permission; generate the access token after enabling write.
Scheduled workflows only run from the default branch, so `.github/workflows/x-post.yml` must be merged there; the job itself checks out and pushes to the queue branch set in `QUEUE_BRANCH`.
Posts must never contain links (they cost more on X); `x-post.mjs` rejects them.
