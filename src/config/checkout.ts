/**
 * Affiliate purchase destinations (four products only).
 * Visible Buy links use these URLs directly — same tab, rel="sponsored".
 */
export const BUY_URLS = {
  hacks: 'https://zadeyo.com/go/SMAR?to=%2Fproducts%2Fapex-legends',
  spoofer: 'https://zadeyo.com/go/SMAR?to=%2Fproducts%2Fhwid-spoofer',
  skinChanger: 'https://zadeyo.com/go/SMAR?to=%2Fproducts%2Fskin-changer',
  cloudDma: 'https://zadeyo.com/go/SMAR?to=%2Fproducts%2Fcloud-dma',
} as const;

export type BuyProduct = keyof typeof BUY_URLS;

export const PRIMARY_BUY_URL = BUY_URLS.hacks;

export function buyUrlForArticleSlug(slug: string): string {
  if (slug.includes('hwid-spoofer') || slug.includes('spoofer')) return BUY_URLS.spoofer;
  if (slug.includes('skin-changer')) return BUY_URLS.skinChanger;
  if (slug.includes('cloud-dma') || slug === 'software-hacks-vs-cloud-dma-tradeoffs') {
    return BUY_URLS.cloudDma;
  }
  return BUY_URLS.hacks;
}

export function buyUrlForSlug(slug: string): string {
  switch (slug) {
    case 'apex-legends-hacks':
      return BUY_URLS.hacks;
    case 'apex-legends-spoofer':
      return BUY_URLS.spoofer;
    case 'apex-legends-skin-changer':
      return BUY_URLS.skinChanger;
    case 'cloud-dma':
      return BUY_URLS.cloudDma;
    default:
      return PRIMARY_BUY_URL;
  }
}

export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : '/' + href;
  }
  for (const url of Object.values(BUY_URLS)) {
    if (href === url || href.startsWith(url.split('?')[0])) return url;
  }
  return href;
}

/** @deprecated Use BUY_URLS — kept for gradual migration from internal /go/ paths */
export function checkoutForSlug(slug: string): string {
  return buyUrlForSlug(slug);
}

export function checkoutPath(_product?: string): string {
  return PRIMARY_BUY_URL;
}

export const PRIMARY_CHECKOUT_PATH = PRIMARY_BUY_URL;
