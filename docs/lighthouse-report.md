# Lighthouse — apex-hacks.org (local `dist/`)

Run after `npm run build`:

```bash
npx lighthouse http://127.0.0.1:4321/ --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=docs/lighthouse-home.json
```

Serve with `npm run preview`, then audit home, `/products/apex-legends-hacks/`, and one article.

**Post-build spot check (Nov 2026):** Static build completes; hero poster preloaded; local `/media/*` assets; no prices on-site; Buy uses sponsored same-tab links. Re-run Lighthouse on your machine before launch for authoritative scores.
