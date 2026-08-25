export type FaqCategoryId =
  | 'funcionalidades'
  | 'aplicativo-ponto'
  | 'documentos-relatorios'
  | 'seguranca'
  | 'implantacao'
  | 'pagamentos';

export type FaqCategoryIcon =
  | 'layout-grid'
  | 'smartphone'
  | 'file-text'
  | 'shield-check'
  | 'zap'
  | 'credit-card';

export type FaqCategory = {
  id: FaqCategoryId;
  icon: FaqCategoryIcon;
  title: string;
  description: string;
};

export type FaqItem = {
  id: string;
  category: FaqCategoryId;
  question: string;
  answer: string;
};

export type Faq = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  categories: FaqCategory[];
  ctaTitle: string;
  ctaLabel: string;
  items: FaqItem[];
};
