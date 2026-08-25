import type { Footer } from '../types/footer.types';

export const DEFAULT_FOOTER: Footer = {
  title: 'Seu RH mais inteligente,',
  titleHighlight: 'humano e digital.',
  description:
    'A plataforma completa de gestão de Departamento Pessoal que simplifica processos e empodera colaboradores.',
  contacts: [
    { icon: 'mail', label: 'contato@rhdpeople.com.br' },
    { icon: 'phone', label: '(83) 99621-9812' },
    { icon: 'map-pin', label: 'João Pessoa - PB' },
  ],
  ctaLabel: 'Falar com especialista',
  columns: [
    {
      title: 'Produto',
      links: [
        { label: 'Funcionalidades', href: '#funcionalidades' },
        { label: 'Portal do colaborador', href: '#portal' },
        { label: 'Planos e preços', href: '#planos' },
        { label: 'Integrações', href: '#integracoes' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: '#sobre' },
        { label: 'Carreiras', href: '#carreiras' },
        { label: 'Parceiros', href: '#parceiros' },
      ],
    },
    {
      title: 'Suporte',
      links: [
        { label: 'Central de ajuda', href: '#ajuda' },
        { label: 'Status do sistema', href: '#status' },
        { label: 'Contato', href: '#contato' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'LGPD', href: '#lgpd' },
        { label: 'Termos de Uso', href: '#termos' },
        { label: 'Política de privacidade', href: '#privacidade' },
        { label: 'Cookies', href: '#cookies' },
      ],
    },
  ],
  copyright: '© RHDPeople | todos os direitos reservados',
};
