import Formulario from './components/Formulario';

type LandingProps = {
  /** URL do endpoint de leads, vinda do servidor. */
  action: string;
  /** Token CSRF. Vazio no export estático, onde não há sessão. */
  csrf: string;
};

/**
 * Empilha as seções da landing page.
 *
 * A ORDEM DAS LINHAS ABAIXO É A ORDEM NA TELA, de cima para baixo.
 * Ao criar uma seção nova, importe no topo e adicione aqui no lugar certo.
 */
export default function Landing({ action, csrf }: LandingProps) {
  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <Beneficios /> */}
      {/* <ComoFunciona /> */}
      {/* <Diferenciais /> */}
      {/* <Sobre /> */}
      {/* <Faq /> */}
      <Formulario action={action} csrf={csrf} />
      {/* <Cta /> */}
      {/* <Footer /> */}
    </>
  );
}
