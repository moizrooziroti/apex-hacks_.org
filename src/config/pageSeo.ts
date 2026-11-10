/**
 * Central titles/descriptions for high-traffic routes.
 * Titles target ≤60 characters; descriptions ≤155 where practical.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Apex Legends ESP, Aimbot & wallhack Features',
    description:
      'Overview of Apex Legends ESP, aimbot, and wallhack-style tools plus HWID spoofer, skin changer, and Cloud DMA — four products on apex-hacks.org.',
  },
  '/products/': {
    title: 'Buy Apex Legends Hacks 2026 | Hacks, Spoofer & DMA',
    description:
      'Buy Apex Legends hacks: Apex Legends hacks bundle, HWID spoofer, skin changer, and Cloud DMA — compare four cards, then checkout on the partner site.',
  },
  '/articles/': {
    title: 'Apex Legends Hack Articles 2026 | Aimbot, ESP & DMA',
    description:
      'Apex Legends hack guides: aimbot settings, ESP setup, wallhack, HWID spoofer, skin changer, and DMA — then buy from the matching product card.',
  },
  '/forums/': {
    title: 'Apex Legends Hacks Forum 2026 | Aimbot & ESP Q&A Threads',
    description:
      'Apex Legends hacks forum: Apex Legends aimbot FOV, ESP clutter, wallhack lines, HWID spoofer, skin changer, and Cloud DMA threads on apex-hacks.org.',
  },
  '/faq/': {
    title: 'Risk & Apex Legends Hacks FAQ 2026 | Aimbot, ESP & Accounts',
    description:
      'Apex Legends hacks FAQ: ESP vs aimbot terms, affiliate checkout, HWID spoofer scope, skin changer vs combat tools, and account-risk basics.',
  },
  '/affiliate-disclosure/': {
    title: 'Affiliate Disclosure | apex-hacks.org Commissions Policy',
    description:
      'Affiliate disclosure: apex-hacks.org may earn commissions from qualifying purchases through sponsored Buy links; third-party checkout handles orders.',
  },
  '/terms/': {
    title: 'Terms & Conditions | apex-hacks.org',
    description: 'Site terms, affiliate outbound links, and risk disclaimer for readers of apex-hacks.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | apex-hacks.org Data & Cookies',
    description:
      'Privacy: how apex-hacks.org handles analytics, cookies, support messages, and what we retain when you browse Apex Legends product pages.',
  },
  '/about/': {
    title: 'Warfare 4 Catalog | Modern 4 Hacks Hub 2026',
    description:
      'Warfare 4 Catalog: About apex-hacks.org — independent Apex Legends hacks, HWID spoofer, skin changer, Cloud DMA, plus guides and forums.',
  },
  '/support/': {
    title: 'Apex Legends Hacks Support | Site Help & Checkout',
    description:
      'Support for apex-hacks.org readers: four Apex Legends products, hack guides, forums, and FAQ. Purchases complete on the partner checkout.',
  },
  '/blog/': {
    title: 'Apex Legends Hack Guides | Blog Archive on apex-hacks.org',
    description:
      'Legacy blog URL for apex-hacks.org. All Apex Legends hack guides, aimbot, ESP, and DMA articles are on the articles hub.',
  },
  '/forum/': {
    title: 'Apex Legends Hacks Forum Shortcut | Community Q&A',
    description:
      'Shortcut to the apex-hacks.org forums — Apex Legends aimbot, ESP, wallhack, spoofer, skin changer, and Cloud DMA threads.',
  },
  '/contact/': {
    title: 'Contact apex-hacks.org | Site Support Routing',
    description:
      'Contact routing for apex-hacks.org. Website help only — billing and keys are handled on the partner checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
