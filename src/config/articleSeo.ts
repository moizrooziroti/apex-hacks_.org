/**
 * One primary keyword + meta description per article URL (≤155 chars; no overlap with product H1 targets).
 */

export interface ArticleSeoEntry {
  keyword: string;
  description: string;
}

export const ARTICLE_SEO: Record<string, ArticleSeoEntry> = {
  'how-apex-legends-hacks-work': {
    keyword: 'How Apex Legends Hacks Work on PC | Loader & ESP Guide 2026',
    description:
      'How Apex Legends hacks work: ESP, Apex Legends aimbot, wallhack loaders, and patches. Open our hacks product and buy on checkout.',
  },
  'apex-esp-vs-aimbot-vs-wallhack': {
    keyword: 'Apex Legends ESP vs Aimbot vs wallhack | Compare Feature Guide',
    description:
      'Apex Legends ESP vs aimbot vs wallhack before you pay on Apex Legends. Compare listings and toggles, then buy from the Apex Legends hacks card.',
  },
  'how-to-choose-apex-legends-hacks': {
    keyword: 'Apex Legends Buy Guide 2026 | How to Choose ESP, Aimbot, DMA',
    description:
      'Choose Apex Legends hacks: software ESP and aimbot vs Cloud DMA. Pick one card on apex-hacks.org, then open partner checkout.',
  },
  'apex-legends-hack-settings-explained': {
    keyword: 'Apex Legends Hack Settings Guide',
    description:
      'Apex Legends hack settings: aimbot FOV, smoothing, bones, ESP distance. Confirm toggles on the Apex Legends hacks listing.',
  },
  'what-is-an-hwid-spoofer-for-apex-legends': {
    keyword: 'Apex Legends HWID Spoofer Meaning',
    description:
      'Apex Legends HWID spoofer meaning for Apex Legends PCs — not ESP. Open the spoofer product when that is the buy you need.',
  },
  'apex-legends-skin-changer-explained': {
    keyword: 'Apex Legends Skin Changer Guide',
    description:
      'Apex Legends skin changer: camos and cosmetics only on Apex Legends. Use the skin changer product, not the combat hacks card.',
  },
  'what-is-cloud-dma-for-apex-legends': {
    keyword: 'Apex Legends Cloud DMA Explained',
    description:
      'Cloud DMA for Apex Legends: hardware path vs ESP loaders. Read tradeoffs, then open Cloud DMA checkout when it fits.',
  },
  'buying-apex-legends-hacks-checklist': {
    keyword: 'Hacks Checklist 2026 | Buy Apex Legends Safely on Partner Checkout',
    description:
      'Buy Apex Legends hacks safely with this hacks checklist: price, key delivery, refund wording, and account risk. Start on /products/, finish on partner checkout.',
  },
  'apex-esp-customization-tips': {
    keyword: 'Apex Legends ESP Setup & Customization',
    description:
      'Apex Legends ESP setup: colors and distance caps for cleaner Apex Legends overlays. Buy ESP features from the Apex Legends hacks listing.',
  },
  'apex-aimbot-settings-and-overaim': {
    keyword: 'Aimbot Settings for Apex Legends 2026 | FOV, Smoothing & Ping',
    description:
      'Aimbot settings for missed shots on Apex Legends: tighten FOV, smoothing, and ping habits before checkout. Match hacks listing vocabulary, then buy on partner site.',
  },
  'apex-wallhack-config-readability': {
    keyword: 'Apex Legends wallhack Settings',
    description:
      'Apex Legends wallhack config for readable lines on Apex Legends maps. Profile outlines, then confirm wallhack on checkout.',
  },
  'software-hacks-vs-cloud-dma-tradeoffs': {
    keyword: 'Apex Legends Software Hacks vs DMA',
    description:
      'Apex Legends software hacks vs Cloud DMA — cost and FPS. Pick Apex Legends hacks or Cloud DMA on apex-hacks.org.',
  },
  'apex-legends-hack-troubleshooting-basics': {
    keyword: 'Apex Legends Hack Not Working Fix',
    description:
      'Apex Legends hack not working after a patch? Display mode, admin rights, new builds. Re-check the hacks listing first.',
  },
  'apex-legends-hack-performance-and-pc-load': {
    keyword: 'Apex Legends Hack FPS & Performance',
    description:
      'Apex Legends hack FPS: baseline, ESP load, capture apps. Choose software hacks or DMA, then buy the matching card.',
  },
  'apex-legends-hack-vocabulary': {
    keyword: 'Apex Legends Hack Glossary',
    description:
      'Apex Legends hack glossary: ESP, aimbot, wallhack, HWID spoofer, Cloud DMA. Shop all four products on apex-hacks.org.',
  },
};

export function getArticleSeo(
  slug: string,
  fallback: { title: string; desc: string },
): { title: string; description: string } {
  const entry = ARTICLE_SEO[slug];
  if (!entry) {
    return { title: fallback.title, description: fallback.desc };
  }
  return { title: entry.keyword, description: entry.description };
}
