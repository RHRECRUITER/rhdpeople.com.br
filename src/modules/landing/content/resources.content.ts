import benefitsImage from '@/assets/recursos/beneficios.webp';
import benefitsDarkImage from '@/assets/recursos/beneficios-dark.webp';
import timeTrackingImage from '@/assets/recursos/controle-ponto.webp';
import timeTrackingDarkImage from '@/assets/recursos/controle-ponto-dark.webp';
import leaveImage from '@/assets/recursos/ferias-licencas.webp';
import leaveDarkImage from '@/assets/recursos/ferias-licencas-dark.webp';
import payrollImage from '@/assets/recursos/folha-pagamento.webp';
import payrollDarkImage from '@/assets/recursos/folha-pagamento-dark.webp';
import type { Resources } from '@/modules/landing/types/resources.types';

export const DEFAULT_RESOURCES: Resources = {
  title: 'Principais ',
  titleHighlight: 'Recursos',
  items: [
    {
      id: 'ferias',
      icon: 'tree-palm',
      title: 'Férias e Licenças',
      description:
        'Controle de períodos aquisitivos e concessivos com aprovação gerencial, solicitações digitais e programação de escala, sem margem para inconsistência.',
      image: { light: leaveImage, dark: leaveDarkImage },
      imageAlt: 'Tela de gestão de férias e licenças',
    },
    {
      id: 'ponto',
      icon: 'clock',
      title: 'Controle de Ponto',
      description:
        'Registro de jornada com GPS e validação biométrica por KYC. Ajustes e justificativas com fluxo de aprovação rastreável e auditável por evento.',
      image: { light: timeTrackingImage, dark: timeTrackingDarkImage },
      imageAlt: 'Tela de controle de ponto dos colaboradores',
    },
    {
      id: 'folha',
      icon: 'receipt-text',
      title: 'Folha de Pagamento',
      description:
        'Fechamento automatizado com cálculo de encargos, horas extras e descontos. Exportação integrada à contabilidade com rastreabilidade de cada lançamento.',
      image: { light: payrollImage, dark: payrollDarkImage },
      imageAlt: 'Tela de fechamento e conferência da folha de pagamento',
    },
    {
      id: 'beneficios',
      icon: 'gift',
      title: 'Benefícios',
      description:
        'Gestão de VT, VA, saúde e outros benefícios com cálculo automático de descontos na folha e histórico de alterações por colaborador.',
      image: { light: benefitsImage, dark: benefitsDarkImage },
      imageAlt: 'Tela de catálogo e gestão de benefícios',
    },
  ],
};
