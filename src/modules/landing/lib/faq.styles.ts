import { cn } from '@/lib/utils';

// Card de pergunta
export const QUESTION_CARD = cn(
  'overflow-hidden rounded-[10px] border border-emerald-200 bg-emerald-200/60',
  'dark:border-emerald-600 dark:bg-emerald-600/34',
  'px-3.75 py-3.5 lg:py-2.75',
  'data-[state=open]:px-4 data-[state=open]:py-3 lg:data-[state=open]:py-3',
);

// Menu de categorias
// Carrossel no mobile: os cards sangram ate a borda da tela para o proximo
// espiar e sinalizar que rola. No desktop vira a coluna de 333px empilhada.
export const CATEGORY_LIST = cn(
  '-mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto scrollbar-hidden px-6 pb-2 sm:-mx-8 sm:px-8',
  'lg:col-start-1 lg:row-start-2 lg:mx-0 lg:mt-8 lg:w-83.25 lg:flex-col',
  'lg:overflow-visible lg:px-0 lg:pt-6 lg:pb-0',
);

export const CATEGORY_ITEM = cn(
  'flex w-70.75 shrink-0 snap-start items-center gap-4 rounded-xl p-4 text-left transition-colors',
  'outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
  'lg:w-full lg:shrink',
);

// #004d40 e o teal da marca no Figma, sem par na paleta, e e o mesmo nos dois
// temas. A legenda so muda de cor no item inativo.
export const CATEGORY_STYLES = {
  active: {
    root: 'border-[#004d40] border-l-4 bg-[#ecfdf5] dark:bg-[#ecfdf5]/5 dark:backdrop-blur-md',
    badge: 'rounded-lg bg-emerald-100 dark:bg-emerald-100/20',
    icon: 'size-6 text-[#004d40] dark:text-emerald-400',
    label: 'font-bold text-[#004d40] dark:text-emerald-400',
    subtitle: 'text-[#9ca3af]',
  },
  idle: {
    root: 'hover:bg-emerald-50/60 dark:hover:bg-neutral-800/60',
    badge: 'rounded-full border border-[#e5e7eb] dark:border-[#e5e7eb]/10',
    icon: 'size-5 text-[#374151] dark:text-neutral-50',
    label: 'font-semibold text-[#374151] dark:text-neutral-50',
    subtitle: 'text-[#9ca3af] dark:text-neutral-50/65',
  },
} as const;

// Cabecalho
export const EYEBROW_BADGE = cn(
  'w-fit rounded-[22px] border border-emerald-200 bg-neutral-50 px-3.5 py-2 text-center',
  'font-semibold text-emerald-600 text-sm leading-6 tracking-[1.5px]',
  'drop-shadow-[0_4px_8.2px_rgba(0,0,0,0.06)] lg:px-3.25 lg:py-1.75',
  'dark:border-emerald-200/10 dark:bg-transparent dark:text-neutral-50/65',
  'dark:drop-shadow-[0_4px_16.4px_rgba(0,0,0,0.06)]',
);
