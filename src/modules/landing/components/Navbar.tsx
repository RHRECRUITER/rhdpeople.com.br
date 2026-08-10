import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '../../../assets/logo-rhdpeople.svg';
import { CONTAINER } from '../lib/styles';
import type { Nav } from '../types/nav.types';

const DEFAULT_NAV: Nav = {
  links: [
    { label: 'Produto', href: '#produto' },
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Planos', href: '#planos' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
  ],
};

type NavbarProps = {
  content?: Nav;
};

export function Navbar({ content = DEFAULT_NAV }: NavbarProps) {
  return (
    <header className="absolute top-0 left-0 z-50 w-full border border-black/10 bg-black/32 shadow-[inset_0_0_10px_0_rgba(255,255,255,0.05)] backdrop-blur-md lg:border-x-0 lg:border-t-0">
      <div className={cn(CONTAINER, 'flex items-center justify-between py-6 lg:pr-20')}>
        <img alt="RHDPeople" className="h-[23.583px] w-36.25 shrink-0" src={logo} />

        <nav className="hidden items-center gap-6 lg:flex">
          {content.links.map((link) => (
            <a
              className="p-1.5 text-sm text-white/75 leading-5 tracking-[-0.16px] transition-colors hover:text-white"
              href={link.href}
              key={link.label}
              onClick={(event) => event.preventDefault()}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Abaixo de lg o design reduz o header a logo + hamburguer */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2">
            <ModeToggle size="icon-xl" variant="glass" />
            <Button size="xl" type="button" variant="glass">
              Entrar
            </Button>
          </div>

          <Button size="xl" type="button">
            Começar agora
          </Button>
        </div>

        <button
          aria-label="Abrir menu"
          className="text-white transition-opacity hover:opacity-75 lg:hidden"
          type="button"
        >
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  );
}
