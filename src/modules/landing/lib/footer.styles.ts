import { cn } from '@/lib/utils';

// Moldura do cartao
export const CARD_OUTER = cn(
  'rounded-[32px] border border-[#ece8fd] bg-white/30 p-2 backdrop-blur-[2px]',
  'dark:border-[#ece8fd]/5 dark:bg-neutral-900',
);

export const CARD_INNER =
  'overflow-hidden rounded-[48px] border border-[#ece8fd] dark:border-[#ece8fd]/10';

// Colunas de links
// 144 / 93 / 136 / 164 no Figma.
export const COLUMN_WIDTHS = ['lg:w-36', 'lg:w-23.25', 'lg:w-34', 'lg:w-41'];

export const COLUMN_LINK = cn(
  'text-[#242734] text-sm leading-5 transition-colors hover:text-emerald-700',
  'dark:text-[#d9d9d9] dark:hover:text-emerald-400',
);

// Rodape do cartao
export const CARD_FOOTER = cn(
  'border-emerald-300 border-t bg-emerald-300/24 px-6 py-6 lg:px-10',
  'dark:border-emerald-300/45 dark:bg-emerald-300/12',
);

export const SOCIAL_BUTTON = cn(
  'rounded-md bg-[#ebfcf5] hover:bg-emerald-200',
  'dark:bg-neutral-900/23 dark:hover:bg-neutral-800',
);
