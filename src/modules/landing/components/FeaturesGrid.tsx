import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DEFAULT_FEATURES } from '../content/features.content';
import { CONTAINER } from '../lib/styles';
import type { Advantage, Features } from '../types/featuresGrid.type';

const NAV_BUTTON =
  'rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-turquesa-600 dark:hover:bg-turquesa-500';

type AdvantageCardProps = {
  advantage: Advantage;
  isOpen: boolean;
  onSelect: () => void;
};

function AdvantageCard({ advantage, isOpen, onSelect }: AdvantageCardProps) {
  return (
    // Mobile: 204px fechado / 260px aberto. Desktop: proporcao 2,3x do Figma (560 / 242)
    <button
      aria-expanded={isOpen}
      className={cn(
        'relative h-51 flex-none overflow-hidden rounded-5xl text-left lg:h-auto lg:flex-1',
        'transition-[height,flex-grow] duration-500 ease-out',
        'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2',
        isOpen && 'h-65 lg:flex-[2.3]',
      )}
      onClick={onSelect}
      type="button"
    >
      <img
        alt={advantage.imageAlt}
        className="absolute inset-0 size-full object-cover"
        decoding="async"
        loading="lazy"
        src={advantage.image}
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-center gap-1 border-white/15 border-t bg-black/10 p-5 backdrop-blur-sm lg:min-h-34.5 lg:p-8">
        <h3 className="font-heading font-bold text-[#f8ffff] text-xl leading-7 tracking-[-0.2px]">
          {advantage.title}
        </h3>
        <p
          className={cn(
            'max-w-115 overflow-hidden text-[#f8ffff]/80 text-sm leading-5 transition-all duration-500 ease-out',
            isOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          {advantage.description}
        </p>
      </div>
    </button>
  );
}

type FeaturesGridProps = {
  content?: Features;
};

export function FeaturesGrid({ content = DEFAULT_FEATURES }: FeaturesGridProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const total = content.items.length;

  const move = (step: number) => setOpenIndex((current) => (current + step + total) % total);

  return (
    <section className="w-full bg-[#f9f9f9] dark:bg-neutral-900" id="vantagens">
      <div className={cn(CONTAINER, 'flex flex-col gap-10 py-16 lg:py-21.75')}>
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading font-bold text-[32px] text-neutral-800 leading-9.5 tracking-[-0.3px] lg:text-[48px] lg:leading-14 dark:text-neutral-50">
            {content.title}
            <span className="block text-emerald-600 lg:inline dark:text-emerald-400">
              {content.titleHighlight}
            </span>
          </h2>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <Button
              aria-label="Vantagem anterior"
              className={NAV_BUTTON}
              onClick={() => move(-1)}
              size="icon-sm"
              type="button"
            >
              <ArrowLeft />
            </Button>
            <Button
              aria-label="Próxima vantagem"
              className={NAV_BUTTON}
              onClick={() => move(1)}
              size="icon-sm"
              type="button"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:h-122.5 lg:flex-row lg:gap-2.5">
          {content.items.map((advantage, index) => (
            <AdvantageCard
              advantage={advantage}
              isOpen={index === openIndex}
              key={advantage.title}
              onSelect={() => setOpenIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
