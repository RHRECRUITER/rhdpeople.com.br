import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
      className="group flex cursor-pointer items-start gap-6 rounded-none border-0 p-0 text-left whitespace-normal transition-colors duration-300 dark:data-[state=inactive]:hover:bg-emerald-950/30 focus-visible:outline-2 focus-visible:outline-emerald-500 focus-visible:outline-offset-2 after:content-none lg:gap-8"
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
          <span className="font-heading font-medium text-[22px] text-neutral-800 leading-7 transition-colors group-data-[state=active]:text-emerald-600 dark:text-neutral-200 dark:group-data-[state=active]:text-emerald-400">
            {item.title}
          </span>
        </span>
        <span className="text-neutral-500 text-sm leading-5">{item.description}</span>
      </span>
    </TabsTrigger>
  );
}

type ResourceAccordionTriggerProps = {
  item: Resource;
};

function ResourceAccordionTrigger({ item }: ResourceAccordionTriggerProps) {
  const Icon = RESOURCE_ICONS[item.icon];

  return (
    <AccordionTrigger className="group cursor-pointer transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-emerald-500 focus-visible:outline-offset-2 [&>svg:last-child]:hidden">
      <span className="flex flex-col gap-2">
        <span className="flex items-center gap-4">
          <span
            aria-hidden
            className="flex size-6 items-center justify-center rounded-[5px] bg-emerald-600 text-white"
          >
            <Icon className="size-3" strokeWidth={2.26} />
          </span>
          <span className="font-heading font-medium text-[22px] text-neutral-800 leading-7 transition-colors group-data-[state=open]:text-emerald-600 dark:text-neutral-200 dark:group-data-[state=open]:text-emerald-400">
            {item.title}
          </span>
        </span>
        <span className="text-neutral-500 text-sm leading-5">{item.description}</span>
      </span>
    </AccordionTrigger>
  );
}

type ResourcePanelProps = {
  item: Resource;
};

function ResourcePanel({ item }: ResourcePanelProps) {
  return (
    <div
      className={cn(
        'relative aspect-668/490 w-full overflow-hidden rounded-xl md:rounded-lg',
        RESOURCES_GLOW,
      )}
    >
      <img
        alt={item.imageAlt}
        className="absolute inset-0 size-full object-cover object-top-left dark:hidden"
        decoding="async"
        loading="lazy"
        src={item.image.light}
      />
      <img
        alt={item.imageAlt}
        className="absolute inset-0 hidden size-full object-cover object-top-left dark:block"
        decoding="async"
        loading="lazy"
        src={item.image.dark}
      />
    </div>
  );
}

type ResourcesSectionProps = {
  content?: Resources;
};

export function ResourcesSection({ content = DEFAULT_RESOURCES }: ResourcesSectionProps) {
  const itemsKey = content.items.map((item) => item.id).join();
  const defaultId = content.items[0]?.id;

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-neutral-900" id="recursos">
      <div className={cn(CONTAINER, 'py-16 lg:py-[80.5px]')}>
        <div className="flex flex-col gap-8 lg:hidden">
          <h2 className="font-heading font-medium text-[40px] text-neutral-700 leading-12 tracking-[-0.3px] dark:text-neutral-200">
            {content.title}
            <span className="text-emerald-500">{content.titleHighlight}</span>
          </h2>

          <Accordion
            className="flex w-full flex-col gap-8"
            defaultValue={defaultId}
            key={itemsKey}
            type="single"
          >
            {content.items.map((item) => (
              <>
                <AccordionItem key={item.id} value={item.id}>
                  <ResourceAccordionTrigger item={item} />
                  <AccordionContent>
                    <div className="mx-auto mt-8 max-w-xl">
                      <ResourcePanel item={item} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <span className="block h-0.5 rounded-full w-full bg-emerald-600/21 last:hidden lg:hidden" />
              </>
            ))}
          </Accordion>
        </div>

        <div className="hidden lg:block">
          <Tabs
            className="mx-auto grid max-w-328 grid-cols-2 items-start gap-12"
            defaultValue={defaultId}
            key={itemsKey}
            orientation="vertical"
          >
            <div className="flex flex-col gap-8">
              <h2 className="font-heading font-medium text-[45px] text-neutral-700 leading-13 tracking-[-0.3px] dark:text-neutral-200">
                {content.title}
                <span className="text-emerald-500">{content.titleHighlight}</span>
              </h2>

              <TabsList
                aria-label="Principais recursos"
                className="flex w-full gap-6 p-0"
                variant="line"
              >
                {content.items.map((item) => (
                  <ResourceTab item={item} key={item.id} />
                ))}
              </TabsList>
            </div>

            <div className="relative aspect-668/490">
              {content.items.map((item) => (
                <TabsContent
                  className="absolute inset-0 transition-opacity duration-300 data-[state=inactive]:block data-[state=inactive]:pointer-events-none data-[state=inactive]:invisible data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 motion-reduce:transition-none"
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
      </div>
    </section>
  );
}
