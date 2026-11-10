import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://apex-hacks.org',
  trailingSlash: 'always',
  redirects: {
    '/blog/': '/articles/',
    '/forum/': '/forums/',
    '/contact/': '/support/',
    '/cheats/': '/products/',
    '/articles/apex-legends-cheat-settings-explained/': '/articles/apex-legends-hack-settings-explained/',
    '/articles/software-cheats-vs-cloud-dma-tradeoffs/': '/articles/software-hacks-vs-cloud-dma-tradeoffs/',
    '/articles/apex-legends-cheat-troubleshooting-basics/': '/articles/apex-legends-hack-troubleshooting-basics/',
    '/articles/apex-legends-cheat-performance-and-pc-load/': '/articles/apex-legends-hack-performance-and-pc-load/',
    '/articles/apex-legends-cheat-vocabulary/': '/articles/apex-legends-hack-vocabulary/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
