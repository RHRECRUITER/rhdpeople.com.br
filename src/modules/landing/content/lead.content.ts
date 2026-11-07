import type { LeadSectionContent } from '../types/lead.types';

export const DEFAULT_LEAD: LeadSectionContent = {
  eyebrow: 'Demonstração Gratuita',
  title: 'Veja o RHDPeople',
  titleHighlight: 'em ação',
  description:
    'Preencha o formulário e nossa equipe entrará em contato para uma demonstração personalizada.',
  checkpoints: ['Demo de 30 minutos', 'Tire suas dúvidas', 'Casos do seu setor', 'Sem compromisso'],
  badges: [
    { icon: 'shield', label: 'LGPD' },
    { icon: 'globe-lock', label: 'Dados seguros' },
    { icon: 'check', label: 'Sem contrato' },
  ],
  formTitle: 'Agende sua demonstração',
  contactHeader: 'Dados de contato',
  fields: {
    name: { label: 'Nome completo', placeholder: 'Seu nome' },
    company: { label: 'Empresa', placeholder: 'Nome da empresa' },
    email: { label: 'E-mail corporativo', placeholder: 'empresa@exemplo.com' },
    phone: { label: 'WhatsApp', placeholder: '(00) 00000-0000' },
  },
  employeeCountHeader: 'Número de colaboradores',
  employeeRanges: ['1-20', '21-50', '51-100', '101-300', '300+'],
  challengeHeader: 'Qual seu maior desafio hoje?',
  challenges: [
    { id: 'vacation', label: 'Gestão de férias' },
    { id: 'time_tracking', label: 'Controle de ponto' },
    { id: 'payroll', label: 'Folha de pagamento' },
    { id: 'documents', label: 'Documentos' },
  ],
  submitButtonText: 'Agendar demonstração gratuita',
  submitButtonLoading: 'Enviando...',
  termsNotice: 'Ao enviar, você concorda com nossa',
  privacyPolicyText: 'Política de Privacidade',
  termsOfUseText: 'Termos de Uso',
  successTitle: 'Obrigado!',
  successTitleHighlight: 'Entraremos em contato',
  successDescription:
    'Sua demonstração foi agendada. Nossa equipe vai analisar seu perfil e entrar em contato em até 24 horas úteis.',
  backButtonText: 'Voltar ao formulário',
  captcha: {
    label: 'Digite o código da imagem',
    loading: 'Carregando...',
    placeholder: 'Digite o código',
  },
};
