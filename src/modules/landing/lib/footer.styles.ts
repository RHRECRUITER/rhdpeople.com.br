import { cn } from '@/lib/utils';

// Moldura do cartao
export const CARD_OUTER = cn(
  'rounded-[32px] border border-[#ece8fd] bg-white/30 p-2 backdrop-blur-[2px]',
  'dark:border-[#ece8fd]/5 dark:bg-neutral-900',
);

// Sombra esverdeada do Figma (20% no claro, 5% no escuro).
export const CARD_INNER = cn(
  'overflow-hidden rounded-[48px] border border-[#ece8fd] dark:border-[#ece8fd]/10',
  '[filter:drop-shadow(0_8px_2px_rgba(110,231,183,0.2))_drop-shadow(0_18px_6px_rgba(110,231,183,0.2))]',
  'dark:[filter:drop-shadow(0_8px_2px_rgba(110,231,183,0.05))_drop-shadow(0_18px_6px_rgba(110,231,183,0.05))]',
);

// Tres brilhos radiais emerald (15%/15%, 15%/85%, 85%/85%), convertidos do SVG do
// Figma: raios em % da caixa e opacidade do rect ja aplicada a cor.
export const LEADING_SURFACE = cn(
  'bg-white',
  'bg-[radial-gradient(88.9%_290.2%_at_15%_15%,rgba(110,231,183,0.056)_0%,transparent_44%),radial-gradient(88.9%_290.2%_at_15%_85%,rgba(110,231,183,0.188)_0%,transparent_55%),radial-gradient(88.9%_290.2%_at_85%_85%,rgba(110,231,183,0.128)_0%,transparent_54%)]',
  'dark:bg-neutral-900',
  'dark:bg-[radial-gradient(88.9%_290.2%_at_15%_15%,rgba(110,231,183,0.094)_0%,transparent_44%),radial-gradient(88.9%_290.2%_at_15%_85%,rgba(110,231,183,0.028)_0%,transparent_55%),radial-gradient(88.9%_290.2%_at_85%_85%,rgba(110,231,183,0.1)_0%,transparent_54%)]',
);

// Colunas de links
// 144 / 93 / 136 / 164 no Figma.
export const COLUMN_WIDTHS = ['lg:w-36', 'lg:w-23.25', 'lg:w-34', 'lg:w-41'];

export const COLUMN_LINK = cn(
  'text-[#242734] text-sm leading-5 transition-colors hover:text-emerald-700',
  'dark:text-[#d9d9d9] dark:hover:text-emerald-400',
);

// Rodape do cartao
export const CARD_FOOTER = cn(
  'border-emerald-300 border-t bg-emerald-300/24 px-10 py-6',
  'dark:border-emerald-300/45 dark:bg-emerald-300/12',
);

export const SOCIAL_BUTTON = cn(
  'rounded-md bg-[#ebfcf5] hover:bg-emerald-200',
  'dark:bg-neutral-900/23 dark:hover:bg-neutral-800',
);
