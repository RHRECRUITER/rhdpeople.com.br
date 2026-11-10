import { Menu, X } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '../../../assets/logo-rhdpeople.svg';
import { CONTAINER } from '../lib/styles';
import type { Nav } from '../types/nav.types';

const DEFAULT_NAV: Nav = {
  links: [
    { label: 'Produto', href: '#inicio' },
    { label: 'Funcionalidades', href: '#app' },
    { label: 'Planos', href: '#planos' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Sobre', href: '#demonstracao' },
    { label: 'FAQ', href: '#faq' },
  ],
};

const NAV_LINK = 'p-1.5 font-medium text-sm text-white/75 leading-5 tracking-[-0.16px]';

// Hover so no desktop: texto verde + sublinhado que cresce a partir do centro
const DESKTOP_NAV_LINK = cn(
  NAV_LINK,
  'relative outline-none transition-colors duration-300 hover:text-emerald-500 focus-visible:text-emerald-500',
  'after:absolute after:inset-x-1.5 after:bottom-0 after:h-0.5 after:scale-x-0 after:bg-emerald-500 after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100',
);

const DESKTOP_PRIMARY_CTA = 'hover:bg-emerald-600';

// Igual ao `lg` do Tailwind
const DESKTOP_QUERY = '(min-width: 64rem)';

type NavbarProps = {
  content?: Nav;
};

export function Navbar({ content = DEFAULT_NAV }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  // Esc fecha o menu; ao ir para desktop ele tambem fecha, para nao reaparecer aberto depois
  useEffect(() => {
    if (!isMenuOpen) return;

    const closeMenu = () => setIsMenuOpen(false);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);

    document.addEventListener('keydown', handleKeyDown);
    desktop.addEventListener('change', closeMenu);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      desktop.removeEventListener('change', closeMenu);
    };
  }, [isMenuOpen]);

  return (
    // No desktop a borda inferior e uma inset shadow para nao somar 1px na altura do header
    <header className="absolute top-0 left-0 z-50 w-full border border-black/10 bg-black/32 shadow-[inset_0_0_10px_0_rgba(255,255,255,0.05)] backdrop-blur-md lg:border-0 lg:shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)]">
      <div className={cn(CONTAINER, 'flex items-center py-6 lg:pr-20')}>
        <img alt="RHDPeople" className="h-[23.583px] w-36.25 shrink-0" src={logo} />

        <nav aria-label="Principal" className="ml-auto hidden items-center gap-6 lg:flex">
          {content.links.map((link) => (
            <a className={DESKTOP_NAV_LINK} href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Em 1440px a navbar fica na posicao do Figma; abaixo disso o espaco livre e dividido
            igualmente dos dois lados dela */}
        <div className="ml-auto hidden items-center gap-3 lg:flex min-[1440px]:ml-[154.5px]">
          <div className="flex items-center gap-2">
            <ModeToggle size="xl" variant="glass" />
            <Button size="xl" type="button" variant="glass">
              Entrar
            </Button>
          </div>

          <Button className={DESKTOP_PRIMARY_CTA} size="xl" type="button">
            Começar agora
          </Button>
        </div>

        <button
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          // p-2 garante a area minima de toque de 24px (WCAG 2.5.8); o -mr-2 mantem o alinhamento
          className="-mr-2 ml-auto rounded-md p-2 text-white transition-opacity hover:opacity-75 focus-visible:outline-white lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menu mobile: anima grid-template-rows de 0fr para 1fr, sem precisar medir a altura */}
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none lg:hidden',
          isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
        id={menuId}
        inert={!isMenuOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={cn(
              'flex flex-col items-center px-6 pt-2 pb-4 transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none',
              isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
            )}
          >
            <nav aria-label="Principal" className="flex flex-col items-center gap-6">
              {content.links.map((link) => (
                <a
                  className={cn(NAV_LINK, 'rounded-sm focus-visible:outline-white')}
                  href={link.href}
                  key={link.label}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <ModeToggle size="xl" variant="glass" />
                <Button size="xl" type="button" variant="glass">
                  Entrar
                </Button>
              </div>

              <Button size="xl" type="button">
                Começar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
