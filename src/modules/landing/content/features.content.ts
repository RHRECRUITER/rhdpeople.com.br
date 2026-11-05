import imageCentralized from '../../../assets/carrosel/image01.webp';
import imageAutomated from '../../../assets/carrosel/image02.webp';
import imageRealtime from '../../../assets/carrosel/image03.webp';
import imageCompliance from '../../../assets/carrosel/image04.webp';
import type { Features } from '../types/featuresGrid.type';

export const DEFAULT_FEATURES: Features = {
  title: 'Nossas ',
  titleHighlight: 'Vantagens',
  items: [
    {
      title: 'Gestão Centralizada',
      description: 'Substitua de vez as planilhas e múltiplos sistemas por uma única plataforma.',
      image: imageCentralized,
      imageAlt: 'Gestor acompanhando os indicadores do time pelo notebook',
    },
    {
      title: 'Rotina Automatizada',
      description: 'Elimine tarefas manuais e burocráticas para ganhar tempo no dia a dia',
      image: imageAutomated,
      imageAlt: 'Equipe de RH reunida trabalhando de forma colaborativa',
    },
    {
      title: 'Dados em Tempo Real',
      description: 'Evite erros operacionais, multas e processos com dados 100% auditáveis',
      image: imageRealtime,
      imageAlt: 'Analista acompanhando um painel de estatísticas no notebook',
    },
    {
      title: 'Total Conformidade',
      description: 'Evite erros operacionais, multas e processos com dados 100% auditáveis',
      image: imageCompliance,
      imageAlt: 'Analista de RH apresentando relatórios de conformidade para a equipe',
    },
  ],
};
