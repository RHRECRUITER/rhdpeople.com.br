import { CreditCard, FileText, LayoutGrid, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import type { FaqCategoryIcon } from '../types/faq.types';

export const CATEGORY_ICONS: Record<FaqCategoryIcon, typeof LayoutGrid> = {
  'layout-grid': LayoutGrid,
  smartphone: Smartphone,
  'file-text': FileText,
  'shield-check': ShieldCheck,
  zap: Zap,
  'credit-card': CreditCard,
};
