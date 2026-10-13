export type BillingCycle = 'annual' | 'monthly';

export type Pricing = {
  title: string;
  highlightTitle: string;
  description: string;
  prices: Record<BillingCycle, number>;
  features: string[];
  subscribeLabel: string;
  customPlanLabel: string;
};
