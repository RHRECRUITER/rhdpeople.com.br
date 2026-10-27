import { Clock, Gift, type LucideIcon, ReceiptText, TreePalm } from 'lucide-react';
import type { ResourceIcon } from '@/modules/landing/types/resources.types';

export const RESOURCE_ICONS: Record<ResourceIcon, LucideIcon> = {
  'tree-palm': TreePalm,
  clock: Clock,
  'receipt-text': ReceiptText,
  gift: Gift,
};
