import { Outlet } from 'react-router-dom';
import { Navbar } from '../modules/landing/components/Navbar';
import { LandingFooter } from '../modules/landing/components/LandingFooter';

export function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Navbar fixa no topo */}
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