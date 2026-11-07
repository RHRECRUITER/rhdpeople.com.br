import { cn } from '@/lib/utils';

// Medidas do print (px do PNG, que tem 563px de largura)
export const SCREEN_WIDTH = 563;
export const STATUS_BAR_HEIGHT = 66;
export const NAV_HEIGHT = 99;

/** Converte px do print para o tamanho real: 100cqw = largura da tela do celular */
export const px = (value: number) => `calc(${value} * 100cqw / ${SCREEN_WIDTH})`;

// Cores do app por tema. Os prints escuros tem fundo transparente, entao o fundo
// vem daqui; o `#111111` foi estimado (nao esta nos PNGs).
export const APP_THEME = {
  light: {
    screen: 'bg-[#eaf6f6]',
    nav: 'border-[#d5e9e4] bg-[#eaf6f6] text-emerald-700',
    navActive: 'bg-[#e5f3f3]',
    featured: 'border-white bg-emerald-700',
  },
  dark: {
    screen: 'bg-[#111111]',
    nav: 'border-white/10 bg-white/5 text-emerald-600',
    navActive: 'bg-white/5',
    featured: 'border-[#111111] bg-emerald-600',
  },
} as const;

// Cabecalho da secao
export const SECTION = cn(
  'relative w-full overflow-hidden bg-linear-to-b from-[#f7fbfa] to-[#eaf5f2]',
  'dark:from-neutral-900 dark:to-neutral-950',
);

export const HEADING = cn(
  'font-heading font-bold text-[32px] text-neutral-900 leading-10 tracking-[-0.4px]',
  'sm:text-5xl sm:leading-14 lg:text-[80px] lg:leading-24 lg:tracking-[-0.6px] dark:text-neutral-50',
);

export const DESCRIPTION = cn(
  'max-w-222 text-base text-neutral-600 leading-6.5 sm:text-xl sm:leading-8',
  'lg:text-[32px] lg:text-neutral-700 lg:leading-13 lg:tracking-[0.2px] dark:text-neutral-300',
);

export const HINT_PILL = cn(
  'mt-2 flex w-full items-center gap-3 rounded-full border border-neutral-200 bg-white/60 px-4 py-3',
  'text-left text-neutral-800 text-xs sm:w-auto sm:gap-4 sm:px-5 sm:text-sm',
  'lg:mt-0 lg:px-10 lg:text-xl dark:border-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-100',
);

// Celular
export const PHONE_FRAME = cn(
  'aspect-9/18 w-full max-w-85 shrink-0 rounded-[44px] border-10 border-black bg-black shadow-2xl',
  'lg:w-95 lg:max-w-none lg:rounded-[48px]',
);

export const PHONE_SCREEN =
  '@container relative flex size-full flex-col overflow-hidden rounded-[38px] transition-colors duration-300';

export const HOTSPOT =
  'absolute cursor-pointer rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring';

// Menu inferior
export const BOTTOM_NAV =
  'relative z-10 grid shrink-0 grid-cols-5 border-t transition-colors duration-300';

export const NAV_ITEM =
  'flex size-full cursor-pointer flex-col items-center justify-center transition-colors';

export const NAV_ITEM_FEATURED = cn(
  'absolute left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center justify-center',
  'rounded-full border-2 font-semibold text-white shadow-md',
);

// Container (bottom sheet)
export const SHEET_BACKDROP =
  'absolute inset-0 animate-in cursor-pointer bg-black/40 fade-in duration-200';

export const SHEET_PANEL = cn(
  'relative max-h-full animate-in overflow-y-auto overscroll-contain scrollbar-hidden',
  'duration-300 slide-in-from-bottom',
);

// Card explicativo
export const CALLOUT_CARD = cn(
  'col-start-1 row-start-1 flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white/80 p-6',
  'backdrop-blur-sm lg:gap-4 lg:bg-white lg:p-8',
  'dark:border-neutral-700 dark:bg-neutral-800/80 lg:dark:bg-neutral-800',
);

export const CALLOUT_ARROW_DOWN = cn(
  'absolute -bottom-13 left-1/2 size-0 -translate-x-1/2',
  'border-x-16 border-x-transparent border-t-24 border-t-emerald-700 lg:hidden',
);

export const CALLOUT_ARROW_LEFT = cn(
  'absolute top-1/2 -left-10 hidden size-0 -translate-y-1/2',
  'border-y-16 border-y-transparent border-r-24 border-r-emerald-700 lg:block',
);
