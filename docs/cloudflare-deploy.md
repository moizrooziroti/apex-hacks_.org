# Cloudflare deploy (apex-hacks.org)

This repo is a **static** Astro site. Output goes to `dist/` after `npm run build`.

## Recommended dashboard settings

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Build output / assets directory | `dist` |
| Deploy command | `npx wrangler deploy` (optional if the platform deploys assets automatically) |

Commit `wrangler.toml` in the repo root. It points Wrangler at `./dist` only and avoids interactive **astro add cloudflare**, which moves files to `dist/client/` and used to break `finalize-sitemap.mjs`.

## Do not

- Do not add `@astrojs/cloudflare` unless you intentionally want Workers SSR.
- Do not use a deploy command that runs **only** `wrangler deploy` **without** a prior build step (the build step must still run `npm run build`).

## Optional env

- `INDEXNOW_KEY` — enables IndexNow ping after build; skipped when unset.
