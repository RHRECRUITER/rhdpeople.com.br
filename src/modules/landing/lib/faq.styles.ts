import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/* Brilho de fundo                                                             */
/* -------------------------------------------------------------------------- */

const GLOW_MOBILE =
  '[--glow:linear-gradient(138.48deg,rgba(167,243,208,0.2)_1.9%,rgba(255,255,255,0)_61.67%)]';
const GLOW_DESKTOP =
  'lg:[--glow:radial-gradient(867px_922px_at_49%_13%,rgba(52,211,153,0.2)_0.7%,rgba(103,222,179,0.15)_25.5%,rgba(154,233,204,0.1)_50%,transparent_100%)]';
const GLOW_DARK = 'dark:[--glow:linear-gradient(180deg,rgba(0,77,64,0.2)_0%,rgba(0,0,0,0.2)_100%)]';

export const GLOW_LAYER = cn(
  'pointer-events-none absolute inset-0 bg-(image:--glow)',
  GLOW_MOBILE,
  GLOW_DESKTOP,
  GLOW_DARK,
);

/* -------------------------------------------------------------------------- */
/* Card de pergunta                                                            */
/* -------------------------------------------------------------------------- */

// Os dois temas usam a mesma geometria de sombra; so o tom muda, entao ele sai
// numa variavel em vez de duplicar as seis camadas.
const CARD_TINT = '[--card-glow:167_243_208] dark:[--card-glow:5_150_105]';

const CARD_GLOW =
  'data-[state=open]:shadow-[0px_0.707px_0.707px_-0.667px_rgb(var(--card-glow)/0.08),0px_1.807px_1.807px_-1.333px_rgb(var(--card-glow)/0.08),0px_3.622px_3.622px_-2px_rgb(var(--card-glow)/0.07),0px_6.866px_6.866px_-2.667px_rgb(var(--card-glow)/0.07),0px_13.647px_13.647px_-3.333px_rgb(var(--card-glow)/0.05),0px_30px_30px_-4px_rgb(var(--card-glow)/0.02)]';

// Risco de luz no topo do card aberto — `inset-shadow-*` compoe com `shadow-*`.
const CARD_TOP_LINE = 'data-[state=open]:inset-shadow-[0_3px_1px_0_rgb(var(--card-glow))]';

export const QUESTION_CARD = cn(
  'overflow-hidden rounded-[10px] border border-emerald-200 bg-emerald-200/60',
  'dark:border-emerald-600 dark:bg-emerald-600/34',
  // A pergunta cai de 16/24 para 14/18 no mobile e o Figma mantem os 48px de
  // altura, entao o card fechado compensa no padding vertical.
  'px-3.75 py-3.5 lg:py-2.75',
  'data-[state=open]:px-4 data-[state=open]:py-3 lg:data-[state=open]:py-3',
  CARD_TINT,
  CARD_GLOW,
  CARD_TOP_LINE,
);

/* -------------------------------------------------------------------------- */
/* Menu de categorias                                                          */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Cabecalho                                                                   */
/* -------------------------------------------------------------------------- */

export const EYEBROW_BADGE = cn(
  'w-fit rounded-[22px] border border-emerald-200 bg-neutral-50 px-3.5 py-2 text-center',
  'font-semibold text-emerald-600 text-sm leading-6 tracking-[1.5px]',
  'drop-shadow-[0_4px_8.2px_rgba(0,0,0,0.06)] lg:px-3.25 lg:py-1.75',
  'dark:border-emerald-200/10 dark:bg-transparent dark:text-neutral-50/65',
  'dark:drop-shadow-[0_4px_16.4px_rgba(0,0,0,0.06)]',
);
