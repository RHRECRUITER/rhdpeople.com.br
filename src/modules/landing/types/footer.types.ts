export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterContact = {
  icon: 'mail' | 'phone' | 'map-pin';
  label: string;
};

export type Footer = {
  title: string;
  titleHighlight: string;
  description: string;
  contacts: FooterContact[];
  ctaLabel: string;
  columns: FooterColumn[];
  copyright: string;
};
