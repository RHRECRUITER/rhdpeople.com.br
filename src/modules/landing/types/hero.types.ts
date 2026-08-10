export type HeroAction = {
  label: string;
  variant: 'primary' | 'secondary';
};

export type Hero = {
  /** Texto sobreposto ao titulo (ex: "GESTAO DE DP SIMPLIFICADA") */
  eyebrow: string;
  /** Primeira parte do titulo, em branco */
  title: string;
  /** Parte final do titulo, destacada em emerald */
  titleHighlight: string;
  description: string;
  actions: HeroAction[];
};
