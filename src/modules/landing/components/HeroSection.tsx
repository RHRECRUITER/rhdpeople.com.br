import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import heroBackground from '../../../assets/hero-background.png';
import { CONTAINER, SECONDARY_ACTION_ON_LIGHT } from '../lib/styles';
import type { Hero } from '../types/hero.types';

const DEFAULT_HERO: Hero = {
  eyebrow: 'GESTÃO DE DP SIMPLIFICADA',
  title: 'Seu RH mais inteligente, ',
  titleHighlight: 'humano e digital',
  description:
    'Automatize tarefas, acompanhe indicadores em tempo real e facilite a rotina do seu time com uma plataforma intuitiva, segura e eficiente e elimine o retrabalho.',
  actions: [
    { label: 'Ver Planos', variant: 'secondary' },
    { label: 'Começar agora', variant: 'primary' },
  ],
};

type HeroSectionProps = {
  content?: Hero;
};

export function HeroSection({ content = DEFAULT_HERO }: HeroSectionProps) {
  return (
    // O esmaecimento da base termina na cor do fundo da secao, senao aparece emenda.
    // No desktop a secao segue a proporcao da foto (4:3) para ela nao ser cortada.
    <section
      className={cn(
        'relative w-full overflow-hidden lg:flex lg:aspect-4/3 lg:items-center lg:pt-27.75',
        'bg-white [--hero-fade:#ffffff] lg:bg-emerald-50 lg:[--hero-fade:var(--emerald-50)]',
        'dark:bg-neutral-900 dark:[--hero-fade:var(--neutral-900)]',
      )}
    >
      {/* No mobile a foto e uma faixa no topo, ampliada e deslocada para enquadrar como no
          Figma; no desktop ela ocupa a secao inteira */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-105.25 w-full overflow-hidden lg:h-full"
      >
        <img
          alt=""
          className="absolute top-0 left-[-66.45%] h-full w-[168.4%] max-w-none object-cover sm:left-0 sm:w-full sm:object-[69%_center] lg:object-center"
          fetchPriority="high"
          src={heroBackground}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_86.389%,var(--hero-fade)_100%),linear-gradient(89.57deg,rgba(0,0,0,0.59)_0.28%,transparent_88.68%)]" />
      </div>

      {/* No mobile o pt posiciona o texto sobre a parte baixa da foto */}
      <div className={cn(CONTAINER, 'relative pt-68.75 pb-12 lg:pt-12 lg:pb-16')}>
        <div className="flex w-full max-w-145.5 flex-col gap-4.5 lg:gap-8">
          <div className="flex flex-col gap-4.5 lg:gap-4">
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="font-bold text-[#f8ffff]/75 text-sm leading-5 tracking-[-0.16px]">
                {content.eyebrow}
              </p>

              <h1 className="font-heading font-bold text-[40px] text-[#f8ffff] leading-12 tracking-[-0.3px] lg:text-[72px] lg:leading-19 lg:tracking-normal">
                {content.title}
                <span className="text-emerald-400">{content.titleHighlight}</span>
              </h1>
            </div>

            {/* No mobile este paragrafo cai abaixo da foto, sobre o fundo claro */}
            <p className="max-w-73.5 text-[#111111]/65 text-sm leading-5 lg:max-w-115 lg:text-[#f8ffff]/75 lg:text-lg lg:leading-6.75 dark:text-[#f8ffff]/75">
              {content.description}
            </p>
          </div>

          {/* Mobile inverte a ordem: o CTA primario vem primeiro */}
          <div className="flex flex-row-reverse flex-wrap items-center justify-end gap-3 lg:flex-row lg:justify-start lg:gap-6">
            {content.actions.map((action) => (
              <Button
                className={
                  action.variant === 'primary'
                    ? 'lg:w-62.25'
                    : cn(SECONDARY_ACTION_ON_LIGHT, 'w-34.25')
                }
                key={action.label}
                size="xl"
                type="button"
                variant={action.variant === 'primary' ? 'default' : 'glass'}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
