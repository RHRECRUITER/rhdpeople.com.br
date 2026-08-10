import { Outlet } from 'react-router';
import { LandingFooter } from '../modules/landing/components/LandingFooter';
import { Navbar } from '../modules/landing/components/Navbar';

export function LandingLayout() {
  // As cores vem de `body` (bg-background/text-foreground), definidas em index.css
  return (
    <div className="relative flex min-h-screen flex-col transition-colors">
      {/* Navbar sobreposta ao topo da pagina (fica sobre a imagem do hero) */}
      <Navbar />

      {/* Conteúdo dinâmico da página injetado */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Rodapé fixo na base */}
      <LandingFooter />
    </div>
  );
}
