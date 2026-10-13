import type { Pricing } from '@/modules/landing/types/pricing.types';

export const DEFAULT_PRICING: Pricing = {
  title: 'Conheça nosso',
  highlightTitle: 'plano Start por R$ {price}/mês',
  description: 'Temos planos ideais que crescem junto com seu negócio',
  prices: {
    annual: 199,
    monthly: 249,
  },
  features: [
    'Dashboard completo',
    'Gestão de colaboradores',
    'Documentos básicos',
    'Portal do colaborador (mobile)',
    'Suporte padrão por email',
  ],
  subscribeLabel: 'Assinar agora',
  customPlanLabel: 'Precisa de algo específico?',
};
