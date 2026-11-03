import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DEFAULT_FAQ } from '../content/faq.content';
import { CATEGORY_ICONS } from '../lib/faq.icons';
import {
  CATEGORY_ITEM,
  CATEGORY_LIST,
  CATEGORY_STYLES,
  EYEBROW_BADGE,
  QUESTION_CARD,
} from '../lib/faq.styles';
import { CONTAINER, SECTION_SURFACE } from '../lib/styles';
import type { Faq, FaqCategory, FaqCategoryId } from '../types/faq.types';

const questionAnchorId = (id: string) => `faq-${id}`;

type CategoryItemProps = {
  category: FaqCategory;
  isActive: boolean;
  onSelect: (id: FaqCategoryId) => void;
};

function CategoryItem({ category, isActive, onSelect }: CategoryItemProps) {
  const Icon = CATEGORY_ICONS[category.icon];
  const styles = CATEGORY_STYLES[isActive ? 'active' : 'idle'];

  return (
    <button
      className={cn(CATEGORY_ITEM, styles.root)}
      onClick={() => onSelect(category.id)}
      type="button"
    >
      <span className={cn('flex size-10 shrink-0 items-center justify-center', styles.badge)}>
        <Icon className={styles.icon} />
      </span>

      <span className="flex min-w-0 flex-col">
        <span className={cn('text-sm leading-5', styles.label)}>{category.title}</span>
        <span className={cn('text-xs leading-4', styles.subtitle)}>{category.description}</span>
      </span>
    </button>
  );
}

type FaqAccordionProps = {
  content?: Faq;
};

export function FaqAccordion({ content = DEFAULT_FAQ }: FaqAccordionProps) {
  const [openId, setOpenId] = useState(content.items[0]?.id ?? '');

  const activeCategory = content.items.find((item) => item.id === openId)?.category;

  function selectCategory(categoryId: FaqCategoryId) {
    const first = content.items.find((item) => item.category === categoryId);
    if (!first) return;

    setOpenId(first.id);
    document
      .getElementById(questionAnchorId(first.id))
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <section className={cn(SECTION_SURFACE, 'relative')} id="faq">
      <div
        className={cn(
          CONTAINER,
          'relative flex flex-col gap-5 py-12',
          // A linha 3 e `1fr` para absorver a sobra de altura das perguntas, senao
          // o CTA descola do menu e cai no rodape da secao.
          'lg:grid lg:grid-cols-[571px_1fr] lg:grid-rows-[auto_auto_1fr] lg:gap-x-12 lg:gap-y-0',
        )}
      >
        <header className="flex flex-col items-center gap-3.75 text-center lg:col-start-1 lg:row-start-1 lg:items-start lg:gap-6.25 lg:pr-6 lg:text-left">
          <span className={EYEBROW_BADGE}>{content.eyebrow}</span>

          <h2 className="font-heading font-bold text-[40px] text-stone-800 leading-12 tracking-[-0.3px] lg:text-[56px] lg:leading-14 lg:tracking-[-0.6px] dark:text-neutral-50">
            {content.title}{' '}
            <span className="text-emerald-700 dark:text-emerald-400">{content.titleHighlight}</span>
          </h2>

          <p className="font-heading text-black text-lg leading-7.5 tracking-[-0.15px] lg:max-w-110.5 lg:text-2xl dark:text-neutral-50">
            {content.description}
          </p>
        </header>

        <nav aria-label="Categorias de perguntas" className={CATEGORY_LIST}>
          {content.categories.map((category) => (
            <CategoryItem
              category={category}
              isActive={category.id === activeCategory}
              key={category.id}
              onSelect={selectCategory}
            />
          ))}
        </nav>

        <Accordion
          className="flex w-full max-w-174.75 flex-col gap-2.5 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mx-auto lg:gap-6 lg:self-center lg:pl-12"
          collapsible
          onValueChange={setOpenId}
          type="single"
          value={openId}
        >
          {content.items.map((item) => (
            <AccordionItem
              className={QUESTION_CARD}
              id={questionAnchorId(item.id)}
              key={item.id}
              value={item.id}
            >
              <AccordionTrigger className="cursor-pointer items-center gap-2.5 font-medium text-black text-sm leading-4.5 data-[state=open]:font-normal lg:text-base lg:leading-6 dark:text-white [&>svg]:size-5">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="pt-2 text-black opacity-80 dark:text-white">
                <p className="text-sm leading-5 tracking-[-0.16px]">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col items-center gap-3.5 lg:col-start-1 lg:row-start-3 lg:mt-6 lg:w-83.25 lg:items-stretch lg:gap-6 lg:self-start">
          <p className="text-center font-bold text-base text-black lg:text-left lg:text-2xl dark:text-neutral-50">
            {content.ctaTitle}
          </p>

          <Button className="w-full max-w-60.25 lg:max-w-none" size="xl" type="button">
            {content.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
