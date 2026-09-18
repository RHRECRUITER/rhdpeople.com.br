export type Advantage = {
  title: string;
  /** Só aparece no card expandido */
  description: string;
  image: string;
  imageAlt: string;
};

export type Features = {
  /** Primeira parte do titulo, em neutro (ex: "Nossas ") */
  title: string;
  /** Parte final do titulo, destacada em emerald */
  titleHighlight: string;
  items: Advantage[];
};
