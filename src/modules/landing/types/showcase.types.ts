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

/** Tema do app no celular, independente do tema do site */
export type ShowcaseTheme = 'light' | 'dark';

export type ShowcaseImage = Record<ShowcaseTheme, string>;

/**
 * Area clicavel invisivel sobre o print, em px do PNG (como no Figma).
 * Faz uma acao: `to` (troca de tela), `modal` (abre container), `close` ou `toggleTheme`.
 */
export type ShowcaseHotspot = {
  /** Lido pelo leitor de tela */
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

/** Container (bottom sheet) aberto sobre a tela */
export type ShowcaseModal = {
  image: ShowcaseImage;
  /** Lido pelo leitor de tela */
  label: string;
  hotspots: ShowcaseHotspot[];
};

export type ShowcaseScreen = {
  image: ShowcaseImage;
  imageAlt: string;
  /** Aba ativa no menu. Sem aba (ex: perfil), nenhuma fica marcada */
  nav?: ShowcaseNavId;
  /** Card ao lado do celular */
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
  to: ShowcaseScreenId;
  /** Botao redondo em destaque (ex: Ferias) */
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
  statusBar: ShowcaseImage;
  gestureBar: ShowcaseImage;
  screens: Record<ShowcaseScreenId, ShowcaseScreen>;
  modals: Record<ShowcaseModalId, ShowcaseModal>;
  /** Presentes em todas as telas (ex: foto e nome abrem o perfil) */
  globalHotspots: ShowcaseHotspot[];
  nav: ShowcaseNavItem[];
};
