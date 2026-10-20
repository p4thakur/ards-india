# x-bot

Used by two Claude scheduled tasks (morning news take, evening practical tip). Each run, Claude researches what's trending in vibe coding / AI dev tools, writes one post, then calls:

    node x-bot/x-post.mjs "<post text>" "<topic>"      # add --dry to preview

The script signs the request (OAuth 1.0a) and appends to `posted.json` so topics don't repeat.

Env vars required in the Claude cloud environment: `X_API_KEY`, `X_API_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_TOKEN_SECRET` (app must have Read and Write permission; generate the access token after enabling write). The environment must allow outbound access to `api.x.com`.
Posts must never contain links (they cost more on X); the script rejects them.
