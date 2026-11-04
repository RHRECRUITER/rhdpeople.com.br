import { Outlet } from 'react-router';
import { LandingFooter } from '../modules/landing/components/LandingFooter';
import { Navbar } from '../modules/landing/components/Navbar';

const MAIN_CONTENT_ID = 'conteudo';

export function LandingLayout() {
  // As cores vem de `body` (bg-background/text-foreground), definidas em index.css
  return (
    <div className="relative flex min-h-screen flex-col transition-colors">
      {/* Atalho para pular o menu (WCAG 2.4.1); so aparece ao receber foco pelo teclado */}
      <a
        className="sr-only z-60 rounded-md bg-primary px-4 py-3 font-medium text-primary-foreground text-sm focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        href={`#${MAIN_CONTENT_ID}`}
      >
        Pular para o conteúdo
      </a>

      {/* Navbar sobreposta ao topo da pagina (fica sobre a imagem do hero) */}
      <Navbar />

      {/* Conteúdo dinâmico da página injetado */}
      <main className="flex-1 outline-none" id={MAIN_CONTENT_ID} tabIndex={-1}>
        <Outlet />
      </main>

      {/* Rodapé fixo na base */}
      <LandingFooter />
    </div>
  );
}
