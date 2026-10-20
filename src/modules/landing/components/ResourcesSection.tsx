import { Fragment, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { DEFAULT_RESOURCES } from '@/modules/landing/content/resources.content';
import { RESOURCE_ICONS } from '@/modules/landing/lib/resources.icons';
import { RESOURCES_GLOW } from '@/modules/landing/lib/resources.styles';
import { CONTAINER } from '@/modules/landing/lib/styles';
import type { Resource, Resources } from '@/modules/landing/types/resources.types';

type ResourceTabProps = {
  item: Resource;
};

function ResourceTab({ item }: ResourceTabProps) {
  const Icon = RESOURCE_ICONS[item.icon];

  return (
    <TabsTrigger
      className={cn(
        'group flex w-full items-start gap-6 rounded-none border-0 p-0 text-left whitespace-normal transition-colors duration-300 data-[state=inactive]:hover:text-inherit dark:data-[state=inactive]:hover:bg-emerald-950/30 focus-visible:outline-2 focus-visible:outline-emerald-500 focus-visible:outline-offset-2 after:content-none lg:gap-8',
      )}
      value={item.id}
    >
      <span
        aria-hidden
        className="mt-0.5 hidden min-h-20 w-1 shrink-0 rounded-full bg-neutral-200 transition-colors duration-300 group-data-[state=active]:bg-emerald-600 lg:block"
      />
      <span className="flex min-w-0 flex-1 flex-col gap-2">
        <span className="flex items-center gap-4">
          <span
            aria-hidden
            className="flex size-6 items-center justify-center rounded-[5px] bg-emerald-600 text-white"
          >
            <Icon className="size-3" strokeWidth={2.26} />
          </span>
          <span
            className={cn(
              'font-medium text-[22px] leading-7 transition-colors',
              'text-neutral-800 group-data-[state=active]:text-emerald-600 group-data-[state=inactive]:group-hover:text-emerald-600 dark:text-neutral-200 dark:group-data-[state=active]:text-emerald-400 dark:group-data-[state=inactive]:group-hover:text-emerald-400',
            )}
          >
            {item.title}
          </span>
        </span>
        <span className="text-neutral-500 text-sm leading-5 dark:text-neutral-500">
          {item.description}
        </span>
      </span>
    </TabsTrigger>
  );
}

type ResourcePanelProps = {
  item: Resource;
};

function ResourcePanel({ item }: ResourcePanelProps) {
  return (
    <div
      className={cn(
        'relative aspect-668/490 w-full overflow-hidden rounded-xl bg-transparent md:rounded-lg',
        RESOURCES_GLOW,
      )}
    >
      <img
        alt={item.imageAlt}
        className="absolute inset-0 size-full object-cover object-top-left dark:hidden"
        src={item.image.light}
      />
      <img
        alt={item.imageAlt}
        className="absolute inset-0 hidden size-full object-cover object-top-left dark:block"
        src={item.image.dark}
      />
    </div>
  );
}

type ResourcesSectionProps = {
  content?: Resources;
};

export function ResourcesSection({ content = DEFAULT_RESOURCES }: ResourcesSectionProps) {
  const firstItem = content.items[0];
  const [selectedId, setSelectedId] = useState<string | undefined>(firstItem?.id);

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-900" id="recursos">
      <div className={cn(CONTAINER, 'py-16 lg:py-21.75')}>
        <Tabs
          className="mx-auto grid max-w-328 grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12"
          defaultValue={firstItem.id}
          onValueChange={setSelectedId}
          orientation="vertical"
          value={selectedId}
        >
          <div className="flex min-w-0 flex-col gap-8">
            <h2 className="font-heading font-medium text-[40px] text-neutral-700 leading-12 tracking-[-0.3px] lg:text-[45px] lg:leading-13 dark:text-neutral-200">
              {content.title}
              <span className="text-emerald-500">{content.titleHighlight}</span>
            </h2>

            <TabsList
              aria-label="Principais recursos"
              className="flex h-auto w-full flex-col items-stretch gap-8 rounded-none bg-transparent p-0 lg:gap-6"
              variant="line"
            >
              {content.items.map((item) => (
                <Fragment key={item.id}>
                  <ResourceTab item={item} />
                  {/* Conteúdo da aba ativa mobile */}
                  <TabsContent
                    aria-hidden={selectedId !== item.id}
                    className="relative mx-auto w-full max-w-xl transition-opacity duration-300 data-[state=inactive]:hidden lg:hidden motion-reduce:transition-none"
                    forceMount
                    value={item.id}
                  >
                    <ResourcePanel item={item} />
                  </TabsContent>
                  <span className="block h-0.5 rounded-full w-full bg-emerald-600/21 last:hidden lg:hidden" />
                </Fragment>
              ))}
            </TabsList>
          </div>
          {/* Conteúdo da aba ativa desktop */}
          <div className="relative hidden min-w-0 lg:block lg:aspect-668/490">
            {content.items.map((item) => (
              <TabsContent
                aria-hidden={selectedId !== item.id}
                className="relative mx-auto w-full max-w-xl transition-opacity duration-300 data-[state=inactive]:hidden motion-reduce:transition-none lg:absolute lg:inset-0 lg:mx-0 lg:block lg:max-w-none lg:data-[state=inactive]:block! lg:data-[state=inactive]:pointer-events-none lg:data-[state=inactive]:invisible lg:data-[state=inactive]:opacity-0 lg:data-[state=active]:opacity-100 lg:motion-reduce:transition-none"
                forceMount
                key={item.id}
                value={item.id}
              >
                <ResourcePanel item={item} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
