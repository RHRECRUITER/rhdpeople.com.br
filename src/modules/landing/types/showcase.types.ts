export type ShowcaseScreenId =
  | 'home-hoje'
  | 'home-semana'
  | 'home-mes'
  | 'ponto-hoje'
  | 'ponto-mes'
  | 'docs'
  | 'holerite'
  | 'perfil'
  | 'ferias';

export type ShowcaseModalId = 'solicitar-ferias' | 'registrar-confirmar' | 'registrar-localizacao';

export type ShowcaseNavId = 'home' | 'ponto' | 'ferias' | 'docs' | 'holerite';

/** Tema do app dentro do celular (independente do tema do site) */
export type ShowcaseTheme = 'light' | 'dark';

/** O mesmo print exportado nos dois temas do app */
export type ShowcaseImage = Record<ShowcaseTheme, string>;

/**
 * Area clicavel invisivel sobre o print da tela. As coordenadas sao em px do
 * proprio PNG (que tem 563px de largura), do jeito que aparecem no Figma.
 *
 * Cada area faz uma de quatro coisas:
 * - `to`: troca de tela
 * - `modal`: abre (ou troca) o container sobre a tela
 * - `close`: fecha o container aberto
 * - `toggleTheme`: alterna o app entre claro e escuro
 */
export type ShowcaseHotspot = {
  /** Lido pelo leitor de tela (ex: "Ver semana") */
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
} & (
  | { to: ShowcaseScreenId }
  | { modal: ShowcaseModalId }
  | { close: true }
  | { toggleTheme: true }
);

/** Container que abre por cima da tela, preso na base do celular */
export type ShowcaseModal = {
  image: ShowcaseImage;
  /** Nome do container, lido pelo leitor de tela */
  label: string;
  hotspots: ShowcaseHotspot[];
};

export type ShowcaseScreen = {
  image: ShowcaseImage;
  imageAlt: string;
  /** Aba do menu inferior que fica ativa nesta tela. Sem aba (ex: perfil), nenhuma fica marcada */
  nav?: ShowcaseNavId;
  /** Card explicativo ao lado do celular */
  callout: {
    eyebrow: string;
    title: string;
    description: string;
  };
  hotspots: ShowcaseHotspot[];
};

export type ShowcaseNavItem = {
  id: ShowcaseNavId;
  label: string;
  /** Tela aberta ao tocar no item */
  to: ShowcaseScreenId;
  /** Botao redondo em destaque, saltando acima do menu (ex: Ferias) */
  featured?: boolean;
};

export type Showcase = {
  /** Primeira parte do titulo, em neutro */
  title: string;
  /** Parte final do titulo, destacada em emerald */
  titleHighlight: string;
  description: string;
  hint: string;
  initialScreen: ShowcaseScreenId;
  screens: Record<ShowcaseScreenId, ShowcaseScreen>;
  modals: Record<ShowcaseModalId, ShowcaseModal>;
  /** Areas clicaveis presentes em todas as telas (ex: foto e nome abrem o perfil) */
  globalHotspots: ShowcaseHotspot[];
  nav: ShowcaseNavItem[];
};
