import type { ProductPage } from '../data/products';

export interface ProductSeoEntry {
  keyword: string;
  description: string;
}

export const PRODUCT_SEO: Record<string, ProductSeoEntry> = {
  'apex-legends-hacks': {
    keyword: 'Apex Legends HACKS',
    description:
      'Apex Legends hacks for PC with ESP, aimbot-style assist, and wallhack overlays. See modules and price on checkout — buy from this card.',
  },
  'apex-legends-spoofer': {
    keyword: 'Apex Legends HWID Spoofer Download',
    description:
      'Apex Legends HWID spoofer for Apex Legends hardware-ID tooling — scope on the listing, not ESP. Open the spoofer product and checkout when that is the buy.',
  },
  'apex-legends-skin-changer': {
    keyword: 'Apex Legends Skin Changer Buy',
    description:
      'Apex Legends skin changer for Apex Legends camos, blueprints, and operator cosmetics — cosmetic-only, separate from combat hacks. Buy via the skin changer card.',
  },
  'cloud-dma': {
    keyword: 'Apex Legends Cloud DMA Buy',
    description:
      'Cloud DMA for Apex Legends — external memory path, hardware notes on checkout. Compare versus software Apex Legends hacks before you pay.',
  },
};

export function getProductSeo(product: ProductPage): { title: string; description: string } {
  const entry = PRODUCT_SEO[product.slug];
  if (!entry) {
    return { title: product.title, description: product.desc };
  }
  return { title: entry.keyword, description: entry.description };
}
