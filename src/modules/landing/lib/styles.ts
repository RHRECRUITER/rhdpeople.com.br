/**
 * Container central da landing. O Figma foi desenhado sobre um frame de 1440px
 * (max-w-360 = 1440px), entao em telas maiores o conteudo para de esticar e
 * fica centralizado — apenas os fundos seguem full-bleed.
 */
export const CONTAINER = 'mx-auto w-full max-w-360 px-6 sm:px-8 lg:px-16';

/**
 * No mobile o CTA secundario do hero cai abaixo da foto, sobre o fundo claro, e o
 * vidro escuro do `variant="glass"` fica ilegivel. Aqui ele inverte para vidro
 * claro e volta ao padrao no desktop (onde fica sobre a foto) e no tema escuro.
 */
export const SECONDARY_ACTION_ON_LIGHT = [
  'border-[#111111]/10 bg-white/10 text-[#111111]/75 hover:bg-[#111111]/5 hover:text-[#111111]',
  'lg:border-white/10 lg:bg-black/10 lg:text-white/75 lg:hover:bg-black/20 lg:hover:text-white',
  'dark:border-white/10 dark:bg-black/10 dark:text-white/75 dark:hover:bg-black/20 dark:hover:text-white',
].join(' ');

/** Texto secundario dos blocos claros/escuros do footer. */
export const MUTED_TEXT = 'text-[#464c69] text-sm leading-5 dark:text-[#d2d2d2]';
