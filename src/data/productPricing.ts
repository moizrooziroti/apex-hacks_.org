/** No on-site price labels — checkout shows live pricing. */
export const DISPLAY_PRICE_LABEL = '';

export type ProductPlanId = 'monthly' | 'lifetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
}

const catalogPlans: ProductPlan[] = [
  {
    id: 'monthly',
    label: 'Monthly plan',
    priceUsd: 0,
    priceNote: 'Plans and renewal terms are shown on affiliate checkout.',
  },
];

export function getProductPlans(_productSlug: string): ProductPlan[] {
  return catalogPlans;
}

export function formatPlanPrice(_usd: number): string {
  return '';
}

export function checkoutUrlWithPlan(baseUrl: string, _planId: ProductPlanId): string {
  return baseUrl;
}
