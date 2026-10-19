import docs from '../../../assets/interativo/docs/docs-home.png';
import ferias from '../../../assets/interativo/ferias/ferias-home.png';
import solicitarFerias from '../../../assets/interativo/ferias/solicitar-ferias-container.png';
import holerite from '../../../assets/interativo/holerites/holeirites-home.png';
import registrarConfirmar from '../../../assets/interativo/home/container-01-confirmar.png';
import registrarLocalizacao from '../../../assets/interativo/home/container-02-localizacao.png';
import homeHoje from '../../../assets/interativo/home/home-inicial.png';
import homeMes from '../../../assets/interativo/home/home-mes.png';
import homeSemana from '../../../assets/interativo/home/home-semana.png';
import perfil from '../../../assets/interativo/meu-perfil/meu-perfil-home.png';
import pontoHoje from '../../../assets/interativo/ponto/ponto-hoje.png';
import pontoMes from '../../../assets/interativo/ponto/ponto-mês.png';
import type { Showcase, ShowcaseHotspot } from '../types/showcase.types';

// Abas Hoje / Semana / Mes do topo da Home (mesma posicao nas tres telas)
const HOME_TABS: ShowcaseHotspot[] = [
  { label: 'Ver hoje', to: 'home-hoje', x: 52, y: 205, width: 155, height: 70 },
  { label: 'Ver semana', to: 'home-semana', x: 207, y: 205, width: 156, height: 70 },
  { label: 'Ver mês', to: 'home-mes', x: 363, y: 205, width: 155, height: 70 },
];

// Abas Hoje / Mes do topo do Ponto
const PONTO_TABS: ShowcaseHotspot[] = [
  { label: 'Ver hoje', to: 'ponto-hoje', x: 52, y: 242, width: 232, height: 56 },
  { label: 'Ver mês', to: 'ponto-mes', x: 284, y: 242, width: 226, height: 56 },
];

// O X fica no mesmo lugar em todos os containers
const CLOSE_HOTSPOT: ShowcaseHotspot = {
  label: 'Fechar',
  close: true,
  x: 440,
  y: 55,
  width: 55,
  height: 60,
};

// Botao "Registrar ponto" (Home e Ponto): abre o fluxo de validacao da batida
const registerHotspot = (y: number): ShowcaseHotspot => ({
  label: 'Registrar ponto',
  modal: 'registrar-confirmar',
  x: 43,
  y,
  width: 476,
  height: 60,
});

// Botao "Cancelar" do rodape dos containers, que tambem fecha
const cancelHotspot = (y: number): ShowcaseHotspot => ({
  label: 'Cancelar',
  close: true,
  x: 36,
  y,
  width: 236,
  height: 58,
});

export const DEFAULT_SHOWCASE: Showcase = {
  title: 'Na palma da mão do ',
  titleHighlight: 'colaborador',
  description:
    'Cada colaborador acessa pontos, férias, documentos e holerite direto pelo celular, sem precisar acionar o RH.',
  hint: 'Interaja com o app para explorar cada funcionalidade',
  initialScreen: 'home-hoje',
  screens: {
    'home-hoje': {
      image: homeHoje,
      imageAlt:
        'Tela inicial do app com a jornada do dia, resumo da semana e solicitações recentes',
      nav: 'home',
      callout: {
        eyebrow: 'Home Page - Hoje',
        title: 'A rotina do dia',
        description:
          'O colaborador acompanha a jornada do dia, registra o ponto, visualiza pendências e acessa atalhos importantes como férias, holerite e documentos, tudo direto pela tela inicial.',
      },
      hotspots: [...HOME_TABS, registerHotspot(695)],
    },
    'home-semana': {
      image: homeSemana,
      imageAlt: 'Tela inicial do app com o resumo da semana',
      nav: 'home',
      callout: {
        eyebrow: 'Home Page - Semana',
        title: 'Visão clara da semana',
        description:
          'A tela semanal ajuda o colaborador a entender como está sua jornada ao longo dos dias, com resumo de horas, atrasos, banco de horas e uma linha do tempo com entradas e saídas registradas.',
      },
      hotspots: HOME_TABS,
    },
    'home-mes': {
      image: homeMes,
      imageAlt: 'Tela inicial do app com o resumo do mês',
      nav: 'home',
      callout: {
        eyebrow: 'Home Page - Mês',
        title: 'Controle completo',
        description:
          'Na visão mensal, o colaborador acompanha o saldo acumulado, dias trabalhados, médias, ausências, férias e status das solicitações, facilitando o acompanhamento sem depender do RH.',
      },
      hotspots: HOME_TABS,
    },
    'ponto-hoje': {
      image: pontoHoje,
      imageAlt: 'Tela de ponto com a linha do tempo do dia e o resumo de horas',
      nav: 'ponto',
      callout: {
        eyebrow: 'Meu Ponto - Hoje',
        title: 'Registre e acompanhe',
        description:
          'O colaborador visualiza os horários da jornada em tempo real, registra o ponto com facilidade, acompanha a linha do tempo do dia e consulta rapidamente horas trabalhadas, banco de horas, ocorrências e solicitações de ajuste.',
      },
      hotspots: [...PONTO_TABS, registerHotspot(598)],
    },
    'ponto-mes': {
      image: pontoMes,
      imageAlt: 'Tela de ponto com o espelho do mês',
      nav: 'ponto',
      callout: {
        eyebrow: 'Meu Ponto - Mês',
        title: 'Visão completa',
        description:
          'Na visão mensal, o colaborador acompanha as horas trabalhadas, saldo acumulado, calendário de marcações e o histórico de registros do mês, entendendo com clareza faltas, atrasos, férias e dias trabalhados.',
      },
      hotspots: PONTO_TABS,
    },
    docs: {
      image: docs,
      imageAlt: 'Tela de documentos com pendências, documentos disponíveis e histórico de envios',
      nav: 'docs',
      callout: {
        eyebrow: 'Meus Documentos',
        title: 'Fáceis de gerenciar',
        description:
          'O collaborador acessa documentos diponíveis para download, acompanha pendências de envio e consulta o histórico de arquivos enviados, com status como aprovado, em análise ou rejeitado.',
      },
      hotspots: [],
    },
    holerite: {
      image: holerite,
      imageAlt: 'Tela de holerites com o resumo do ano e a lista de holerites para baixar',
      nav: 'holerite',
      callout: {
        eyebrow: 'Meus Holerites',
        title: 'Sempre disponível',
        description:
          'A tela permite consultar e baixar holerites por período, visualizar documentos diponíveis e entender quando os arquivos ficam liberados após o fechamento da folha.',
      },
      hotspots: [],
    },
    perfil: {
      image: perfil,
      imageAlt: 'Tela de perfil com cargo, benefícios, informações pessoais e segurança',
      callout: {
        eyebrow: 'Meu perfil',
        title: 'Informações pessoais',
        description:
          'O colaborador visualiza seus dados profissionais, benefícios, informações pessoais e opções de segurança, como biometria, Face ID, senha e dispositivos conectados.',
      },
      hotspots: [],
    },
    ferias: {
      image: ferias,
      imageAlt: 'Tela de férias com saldo de dias, solicitação atual e histórico de férias',
      nav: 'ferias',
      callout: {
        eyebrow: 'Minhas Férias',
        title: 'Férias sem burocracia',
        description:
          'O colaborador consulta o saldo, solicita férias em poucos toques e acompanha cada etapa da aprovação.',
      },
      hotspots: [
        {
          label: 'Solicitar férias',
          modal: 'solicitar-ferias',
          x: 43,
          y: 615,
          width: 476,
          height: 60,
        },
      ],
    },
  },
  modals: {
    'solicitar-ferias': {
      image: solicitarFerias,
      label: 'Solicitar férias',
      hotspots: [CLOSE_HOTSPOT, cancelHotspot(790)],
    },
    'registrar-confirmar': {
      image: registrarConfirmar,
      label: 'Validação da batida: confirmação',
      hotspots: [
        CLOSE_HOTSPOT,
        cancelHotspot(1150),
        {
          label: 'Próximo: localização',
          modal: 'registrar-localizacao',
          x: 290,
          y: 1150,
          width: 237,
          height: 58,
        },
      ],
    },
    'registrar-localizacao': {
      image: registrarLocalizacao,
      label: 'Validação da batida: localização',
      hotspots: [CLOSE_HOTSPOT],
    },
  },
  // Foto e nome no topo: abre o perfil de qualquer tela
  globalHotspots: [
    { label: 'Abrir meu perfil', to: 'perfil', x: 20, y: 45, width: 215, height: 70 },
  ],
  nav: [
    { id: 'home', label: 'Home', to: 'home-hoje' },
    { id: 'ponto', label: 'Ponto', to: 'ponto-hoje' },
    { id: 'ferias', label: 'Férias', to: 'ferias', featured: true },
    { id: 'docs', label: 'Docs', to: 'docs' },
    { id: 'holerite', label: 'Holerite', to: 'holerite' },
  ],
};
