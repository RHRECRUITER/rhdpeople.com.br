import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/* Brilho de fundo                                                             */
/* -------------------------------------------------------------------------- */

const GLOW_ALPHAS = cn(
  '[--glow-tl:0.056] [--glow-bl:0.188] [--glow-br:0.128]',
  'dark:[--glow-tl:0.094] dark:[--glow-bl:0.028] dark:[--glow-br:0.1]',
);

const GLOW =
  '[--glow:radial-gradient(507px_527px_at_15%_15%,rgb(110_231_183/var(--glow-tl)),transparent),radial-gradient(634px_659px_at_15%_85%,rgb(110_231_183/var(--glow-bl)),transparent),radial-gradient(622px_647px_at_85%_85%,rgb(110_231_183/var(--glow-br)),transparent)]';

export const GLOW_LAYER = cn(
  'pointer-events-none absolute inset-0 bg-(image:--glow)',
  GLOW_ALPHAS,
  GLOW,
);

/* -------------------------------------------------------------------------- */
/* Moldura do cartao                                                           */
/* -------------------------------------------------------------------------- */

// Dois drop-shadows empilhados exigem `filter` (cada `drop-shadow-*` sobrescreve
// a propriedade inteira). Aqui so o alfa muda entre os temas.
export const CARD_GLOW = cn(
  '[--card-glow:0.2] dark:[--card-glow:0.05]',
  '[filter:drop-shadow(0_8px_2px_rgb(110_231_183/var(--card-glow)))_drop-shadow(0_18px_6px_rgb(110_231_183/var(--card-glow)))]',
);

export const CARD_OUTER = cn(
  'rounded-[32px] border border-[#ece8fd] bg-white/30 p-2 backdrop-blur-[2px]',
  'dark:border-[#ece8fd]/5 dark:bg-neutral-900',
);

export const CARD_INNER = cn(
  'overflow-hidden rounded-[48px] border border-[#ece8fd] dark:border-[#ece8fd]/10',
  CARD_GLOW,
);

/* -------------------------------------------------------------------------- */
/* Colunas de links                                                            */
/* -------------------------------------------------------------------------- */

// 144 / 93 / 136 / 164 no Figma.
export const COLUMN_WIDTHS = ['lg:w-36', 'lg:w-23.25', 'lg:w-34', 'lg:w-41'];

export const COLUMN_LINK = cn(
  'text-[#242734] text-sm leading-5 transition-colors hover:text-emerald-700',
  'dark:text-[#d9d9d9] dark:hover:text-emerald-400',
);

/* -------------------------------------------------------------------------- */
/* Rodape do cartao                                                            */
/* -------------------------------------------------------------------------- */

export const CARD_FOOTER = cn(
  'border-emerald-300 border-t bg-emerald-300/24 px-6 py-6 lg:px-10',
  'dark:border-emerald-300/45 dark:bg-emerald-300/12',
);

export const SOCIAL_BUTTON = cn(
  'rounded-md bg-[#ebfcf5] hover:bg-emerald-200',
  'dark:bg-neutral-900/23 dark:hover:bg-neutral-800',
);
