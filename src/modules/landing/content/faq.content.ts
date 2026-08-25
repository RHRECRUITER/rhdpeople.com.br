import type { Faq } from '../types/faq.types';

export const DEFAULT_FAQ: Faq = {
  eyebrow: 'FAQ',
  title: 'Perguntas',
  titleHighlight: 'Frequentes',
  description: 'Encontre respostas para as dúvidas mais comuns sobre o RHDPeople.',
  categories: [
    {
      id: 'funcionalidades',
      icon: 'layout-grid',
      title: 'Funcionalidades',
      description: 'Recursos principais da plataforma',
    },
    {
      id: 'aplicativo-ponto',
      icon: 'smartphone',
      title: 'Aplicativo e Ponto',
      description: 'Registro, GPS e validação de presença',
    },
    {
      id: 'documentos-relatorios',
      icon: 'file-text',
      title: 'Documentos e Relatórios',
      description: 'Gestão de arquivos, exportações e histórico',
    },
    {
      id: 'seguranca',
      icon: 'shield-check',
      title: 'Segurança',
      description: 'Proteção de dados, LGPD e autenticação',
    },
    {
      id: 'implantacao',
      icon: 'zap',
      title: 'Implantação',
      description: 'Demonstração, migração e primeiros passos',
    },
    {
      id: 'pagamentos',
      icon: 'credit-card',
      title: 'Pagamentos',
      description: 'Planos, formas de pagamento e contratação',
    },
  ],
  ctaTitle: 'Não achou o que procurava?',
  ctaLabel: 'Envie sua dúvida aqui',
  items: [
    {
      id: 'porte-empresa',
      category: 'funcionalidades',
      question: 'O RHDPeople é indicado para qual tipo de empresa?',
      answer:
        'O RHDPeople é ideal para empresas de todos os portes, desde startups com menos de 25 colaboradores até grandes corporações com mais de 300 funcionários. Nossa plataforma se adapta às necessidades específicas de cada negócio, oferecendo planos escaláveis.',
    },
    {
      id: 'ponto-gps',
      category: 'aplicativo-ponto',
      question: 'O registro de ponto exige GPS?',
      answer:
        'O GPS é opcional e pode ser configurado conforme a política da sua empresa. Você pode exigir localização apenas para determinados setores ou horários, ou até desativar completamente. A flexibilidade é total.',
    },
    {
      id: 'kyc-batida',
      category: 'aplicativo-ponto',
      question: 'O que é a validação KYC por batida?',
      answer:
        'KYC (Know Your Customer) por batida é nossa tecnologia de validação biométrica facial. Ao registrar o ponto, o sistema confirma a identidade do colaborador através de reconhecimento facial, garantindo autenticidade e prevenindo fraudes.',
    },
    {
      id: 'demonstracao',
      category: 'implantacao',
      question: 'Como funciona a demonstração?',
      answer:
        'Após preencher o formulário, nossa equipe entrará em contato em até 24 horas para agendar uma demonstração personalizada de 30 minutos. Apresentaremos os recursos mais relevantes para o seu negócio.',
    },
    {
      id: 'assinatura-documentos',
      category: 'documentos-relatorios',
      question: 'O colaborador pode assinar documentos pela plataforma?',
      answer:
        'Sim. Contratos, advertências, recibos e demais documentos podem ser assinados digitalmente pelo aplicativo ou pelo portal do colaborador, com validade jurídica e trilha de auditoria completa.',
    },
    {
      id: 'armazenamento-documentos',
      category: 'documentos-relatorios',
      question: 'Como funciona o armazenamento de documentos?',
      answer:
        'Todos os documentos são armazenados em nuvem com criptografia de ponta a ponta, backup automático e categorização inteligente. Você pode definir permissões de acesso por cargo, setor ou colaborador específico.',
    },
    {
      id: 'exportar-relatorios',
      category: 'documentos-relatorios',
      question: 'Posso exportar relatórios?',
      answer:
        'Sim! Oferecemos exportação em diversos formatos (PDF, Excel, CSV) com layouts prontos para contabilidade. Relatórios podem ser agendados para envio automático por email.',
    },
    {
      id: 'protecao-dados',
      category: 'seguranca',
      question: 'Os dados ficam protegidos?',
      answer:
        'Levamos segurança muito a sério. Utilizamos criptografia AES-256, servidores certificados, backups redundantes, autenticação em duas etapas e estamos em conformidade com a LGPD.',
    },
    {
      id: 'migracao-planilhas',
      category: 'implantacao',
      question: 'Posso migrar minhas planilhas para o RHDPeople?',
      answer:
        'Sim! Oferecemos importação via planilhas (Excel/CSV) para facilitar a migração. Nossa equipe de onboarding ajuda a mapear seus dados e garantir que a transição seja suave e sem perdas.',
    },
    {
      id: 'site-celular',
      category: 'aplicativo-ponto',
      question: 'O site funciona no celular?',
      answer:
        'Absolutamente! O Portal do Colaborador é um aplicativo mobile completo (iOS e Android) onde colaboradores podem bater ponto, solicitar férias, assinar documentos, consultar holerites e muito mais.',
    },
  ],
};
