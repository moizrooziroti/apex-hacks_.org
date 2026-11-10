# Search Console workflow (apex-hacks.org)

You verify the domain at your DNS provider—no HTML meta tags in the repo.

## Setup (once)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `apex-hacks.org` if it is not already there.
2. Under **Sitemaps**, submit: `https://apex-hacks.org/sitemap.xml`
3. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) if you use Bing.

## Monthly tune (15 minutes)

1. Search Console → **Performance** → **Search results**.
2. Sort by **Impressions** (last 28 days).
3. For each query that already maps to a page on your site, open the matching path in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts).
4. Update titles or descriptions only when the query intent is clear—avoid stuffing.

## Quick URL map

| Query theme | Primary path |
|-------------|----------------|
| apex legends hacks (broad) | `/` |
| product comparison | `/products/` |
| hwid / skin / dma | matching `/products/.../` |
| how-to / settings | `/articles/` |
