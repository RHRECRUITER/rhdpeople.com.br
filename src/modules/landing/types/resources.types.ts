export type ResourceId = 'ferias' | 'ponto' | 'folha' | 'beneficios';

export type ResourceIcon = 'tree-palm' | 'clock' | 'receipt-text' | 'gift';

export type Resource = {
  id: ResourceId;
  icon: ResourceIcon;
  title: string;
  description: string;
  image: {
    light: string;
    dark: string;
  };
  imageAlt: string;
};

export type Resources = {
  title: string;
  titleHighlight: string;
  items: Resource[];
};
