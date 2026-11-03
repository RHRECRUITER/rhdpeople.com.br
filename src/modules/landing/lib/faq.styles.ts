import { cn } from '@/lib/utils';

// Fundo da secao. Mobile: brilho diagonal a partir do canto; desktop: brilho radial no
// topo (claro) e degrade vertical verde-petroleo (escuro)
export const FAQ_SURFACE = cn(
  'bg-[#f7f8f8] bg-[linear-gradient(138.5deg,rgba(167,243,208,0.2)_1.9%,transparent_61.67%)]',
  'lg:bg-[#f9f9f9] lg:bg-[radial-gradient(60.25%_86.9%_at_49%_13.1%,rgba(52,211,153,0.2)_0.68%,rgba(103,222,179,0.15)_25.5%,rgba(154,233,204,0.1)_50.3%,transparent_100%)]',
  'dark:bg-neutral-900 dark:bg-[linear-gradient(138.8deg,rgba(52,211,153,0.09)_1.88%,rgba(0,0,0,0.09)_70.87%)]',
  'lg:dark:bg-[linear-gradient(180deg,rgba(0,77,64,0.2),rgba(0,0,0,0.2))]',
);

// Card de pergunta. No mobile o card fechado tem sempre 48px, mesmo com a pergunta em
// duas linhas (o trigger reserva 36px). Aberto ganha um realce de 3px no topo e sombra.
export const QUESTION_CARD = cn(
  'overflow-hidden rounded-[10px] border border-emerald-200 bg-emerald-200/60',
  'dark:border-emerald-600 dark:bg-emerald-600/34',
  'px-3.75 py-1.25 lg:py-2.75',
  'data-[state=open]:px-4 data-[state=open]:py-3 lg:data-[state=open]:py-3',
  'data-[state=open]:shadow-[inset_0_3px_1px_0_#a7f3d0,0_0.707px_0.707px_-0.667px_rgba(167,243,208,0.08),0_1.807px_1.807px_-1.333px_rgba(167,243,208,0.08),0_3.622px_3.622px_-2px_rgba(167,243,208,0.07),0_6.866px_6.866px_-2.667px_rgba(167,243,208,0.07),0_13.647px_13.647px_-3.333px_rgba(167,243,208,0.05),0_30px_30px_-4px_rgba(167,243,208,0.02)]',
  'dark:data-[state=open]:shadow-[inset_0_3px_1px_0_#059669,0_0.707px_0.707px_-0.667px_rgba(5,150,105,0.08),0_1.807px_1.807px_-1.333px_rgba(5,150,105,0.08),0_3.622px_3.622px_-2px_rgba(5,150,105,0.07),0_6.866px_6.866px_-2.667px_rgba(5,150,105,0.07),0_13.647px_13.647px_-3.333px_rgba(5,150,105,0.05),0_30px_30px_-4px_rgba(5,150,105,0.02)]',
);

// Menu de categorias
// Carrossel no mobile: os cards sangram ate a borda da tela para o proximo
// espiar e sinalizar que rola. O scroll-padding faz o snap respeitar o recuo lateral,
// senao o primeiro card gruda na borda. No desktop vira a coluna de 333px empilhada.
export const CATEGORY_LIST = cn(
  '-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-2 overflow-x-auto scrollbar-hidden px-6 pb-2.5 sm:-mx-8 sm:scroll-px-8 sm:px-8',
  'lg:col-start-1 lg:row-start-2 lg:mx-0 lg:mt-8 lg:w-83.25 lg:flex-col',
  'lg:overflow-visible lg:px-0 lg:pt-6 lg:pb-0',
);

export const CATEGORY_ITEM = cn(
  'flex h-15.25 w-70.75 shrink-0 snap-start items-center gap-4 rounded-xl p-4 text-left transition-colors',
  'outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
  'lg:h-auto lg:w-full lg:shrink',
);

// #004d40 e o teal da marca no Figma, sem par na paleta, e e o mesmo nos dois
// temas. A legenda so muda de cor no item inativo, e no escuro o mobile e mais contrastado.
export const CATEGORY_STYLES = {
  active: {
    root: 'border-[#004d40] border-l-4 bg-[#ecfdf5] dark:bg-[#ecfdf5]/5 dark:backdrop-blur-md',
    badge: 'rounded-md bg-emerald-100 dark:bg-emerald-100/20',
    icon: 'size-6 text-[#004d40] dark:text-emerald-400',
    label: 'font-bold text-[#004d40] dark:text-emerald-400',
    subtitle: 'text-[#9ca3af]',
  },
  idle: {
    root: 'hover:bg-emerald-50/60 dark:hover:bg-neutral-800/60',
    badge: 'rounded-full border border-[#e5e7eb] lg:dark:border-[#e5e7eb]/10',
    icon: 'size-5 text-[#374151] dark:text-neutral-50',
    label: 'font-semibold text-[#374151] dark:text-neutral-50',
    subtitle: 'text-[#9ca3af] lg:dark:text-neutral-50/65',
  },
} as const;

// Cabecalho. O padding ja desconta a borda: 40px de altura no mobile e 38px no desktop
export const EYEBROW_BADGE = cn(
  'w-fit rounded-[22px] border border-emerald-200 bg-neutral-50 px-3.25 py-1.75 text-center',
  'font-semibold text-emerald-600 text-sm leading-6 tracking-[1.5px]',
  'drop-shadow-[0_4px_8.2px_rgba(0,0,0,0.06)] lg:px-3 lg:py-1.5',
  'dark:border-emerald-200/94 dark:bg-transparent dark:text-neutral-50/65 lg:dark:border-emerald-200/10',
  'dark:drop-shadow-[0_4px_16.4px_rgba(0,0,0,0.06)]',
);
