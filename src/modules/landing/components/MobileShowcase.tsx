import { Clock, FileText, FolderOpen, House, type LucideIcon, Smile, TreePalm } from 'lucide-react';
import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import footerImage from '../../../assets/interativo/fixos/footer-navegacao-por-gesto.png';
import statusBarImage from '../../../assets/interativo/fixos/header-do-celular.png';
import { DEFAULT_SHOWCASE } from '../content/showcase.content';
import { CONTAINER } from '../lib/styles';
import type {
  Showcase,
  ShowcaseHotspot,
  ShowcaseModal,
  ShowcaseModalId,
  ShowcaseNavId,
  ShowcaseNavItem,
  ShowcaseScreenId,
} from '../types/showcase.types';

/** Largura em px dos prints das telas. Todas as coordenadas partem dela. */
const SCREEN_WIDTH = 563;

/** Alturas, em px do print, das partes fixas do celular */
const STATUS_BAR_HEIGHT = 66; // header-do-celular.png
const NAV_HEIGHT = 99;

/**
 * Converte px do print para a largura real da tela do celular. A tela e um
 * container (`@container`), entao 100cqw = 563px do PNG em qualquer tamanho.
 */
const px = (value: number) => `calc(${value} * 100cqw / ${SCREEN_WIDTH})`;

/** Com `?hotspots` na URL as areas clicaveis ficam visiveis, para calibrar. */
const DEBUG_HOTSPOTS =
  typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('hotspots');

const NAV_ICONS: Record<ShowcaseNavId, LucideIcon> = {
  home: House,
  ponto: Clock,
  ferias: TreePalm,
  docs: FolderOpen,
  holerite: FileText,
};

const hotspotKey = (hotspot: ShowcaseHotspot) => `${hotspot.label}-${hotspot.x}-${hotspot.y}`;

function Hotspot({ hotspot, onActivate }: { hotspot: ShowcaseHotspot; onActivate: () => void }) {
  const style: CSSProperties = {
    left: px(hotspot.x),
    top: px(hotspot.y),
    width: px(hotspot.width),
    height: px(hotspot.height),
  };

  return (
    <button
      aria-label={hotspot.label}
      className={cn(
        'absolute cursor-pointer rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
        DEBUG_HOTSPOTS && 'bg-red-500/30 ring-1 ring-red-500',
      )}
      onClick={onActivate}
      style={style}
      type="button"
    />
  );
}

type BottomNavProps = {
  items: ShowcaseNavItem[];
  active?: ShowcaseNavId;
  onNavigate: (to: ShowcaseScreenId) => void;
};

/**
 * O menu e montado em HTML (e nao com o PNG `menu-app-inferior`) porque o PNG ja
 * vem com "Home" marcado, e aqui o item ativo muda conforme a tela.
 */
function BottomNav({ items, active, onNavigate }: BottomNavProps) {
  return (
    <nav
      aria-label="Menu do app"
      className="relative z-10 grid shrink-0 grid-cols-5 border-[#d5e9e4] border-t bg-[#eaf5f2]"
      style={{ height: px(NAV_HEIGHT) }}
    >
      {items.map((item) => {
        const Icon = NAV_ICONS[item.id];
        const isActive = item.id === active;
        const iconSize = px(item.featured ? 30 : 28);

        const button = (
          <button
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'flex cursor-pointer flex-col items-center justify-center',
              item.featured
                ? 'absolute left-1/2 -translate-x-1/2 rounded-full border-2 border-white bg-emerald-700 font-semibold text-white shadow-md'
                : 'text-emerald-700 transition-colors',
              !item.featured && (isActive ? 'bg-[#dceee9] font-semibold' : 'font-normal'),
            )}
            key={item.id}
            onClick={() => onNavigate(item.to)}
            style={
              item.featured
                ? { width: px(88), height: px(88), top: px(-48), fontSize: px(18) }
                : { gap: px(8), fontSize: px(17) }
            }
            type="button"
          >
            <Icon style={{ width: iconSize, height: iconSize }} strokeWidth={1.5} />
            {item.label}
          </button>
        );

        // O botao em destaque sobe para fora do menu, preso ao centro da sua coluna
        return item.featured ? (
          <div className="relative" key={item.id}>
            {button}
          </div>
        ) : (
          button
        );
      })}
    </nav>
  );
}

type ModalSheetProps = {
  modalId: ShowcaseModalId;
  modal: ShowcaseModal;
  onActivate: (hotspot: ShowcaseHotspot) => void;
  onClose: () => void;
};

/**
 * Container que sobe da base da tela, como um bottom sheet. Tocar no fundo
 * escurecido tambem fecha. Se for mais alto que a tela, rola por dentro.
 */
function ModalSheet({ modalId, modal, onActivate, onClose }: ModalSheetProps) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-end">
      <button
        aria-label="Fechar"
        className="absolute inset-0 animate-in cursor-pointer bg-black/40 fade-in duration-200"
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />

      <div
        aria-label={modal.label}
        aria-modal
        className="relative max-h-full animate-in overflow-y-auto overscroll-contain scrollbar-hidden duration-300 slide-in-from-bottom"
        role="dialog"
        style={{ marginTop: px(STATUS_BAR_HEIGHT) }}
      >
        {/* Ao trocar de um container para o proximo, so o conteudo faz fade (o painel nao sobe de novo) */}
        <div className="relative animate-in fade-in duration-300" key={modalId}>
          <img
            alt=""
            className="block w-full"
            decoding="async"
            draggable={false}
            src={modal.image}
          />

          {modal.hotspots.map((hotspot) => (
            <Hotspot
              hotspot={hotspot}
              key={hotspotKey(hotspot)}
              onActivate={() => onActivate(hotspot)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type MobileShowcaseProps = {
  content?: Showcase;
};

export function MobileShowcase({ content = DEFAULT_SHOWCASE }: MobileShowcaseProps) {
  const [screenId, setScreenId] = useState(content.initialScreen);
  const [modalId, setModalId] = useState<ShowcaseModalId | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const screen = content.screens[screenId];

  // Os prints tem ~300KB cada: so baixa as outras telas quando a secao chega
  // perto da viewport, para a troca de tela nao piscar.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        for (const { image } of [
          ...Object.values(content.screens),
          ...Object.values(content.modals),
        ]) {
          // decode() deixa a imagem pronta para pintar, nao so baixada
          const preload = new Image();
          preload.src = image;
          preload.decode().catch(() => {});
        }
      },
      { rootMargin: '400px' },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [content.screens, content.modals]);

  // Esc fecha o container aberto
  const isModalOpen = modalId !== null;
  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalId(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isModalOpen]);

  // Toda tela nova abre do topo e sem container aberto, como num app de verdade
  function navigate(to: ShowcaseScreenId) {
    setScreenId(to);
    setModalId(null);
    scrollRef.current?.scrollTo({ top: 0 });
  }

  function activate(hotspot: ShowcaseHotspot) {
    if ('to' in hotspot) navigate(hotspot.to);
    else if ('modal' in hotspot) setModalId(hotspot.modal);
    else setModalId(null);
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-linear-to-b from-[#f7fbfa] to-[#eaf5f2] dark:from-neutral-900 dark:to-neutral-950"
      id="app"
      ref={sectionRef}
    >
      <div className={cn(CONTAINER, 'flex flex-col items-center gap-8 py-12 lg:gap-14 lg:py-24')}>
        <header className="flex w-full max-w-225 flex-col items-center gap-4 text-center lg:gap-6">
          {/* No mobile o destaque quebra para a segunda linha, como no Figma */}
          <h2 className="font-heading font-bold text-[32px] text-neutral-900 leading-10 tracking-[-0.4px] sm:text-5xl sm:leading-14 lg:text-[80px] lg:leading-24 lg:tracking-[-0.6px] dark:text-neutral-50">
            {content.title}
            <span className="block text-emerald-700 sm:inline dark:text-emerald-400">
              {content.titleHighlight}
            </span>
          </h2>

          <p className="max-w-222 text-base text-neutral-600 leading-6.5 sm:text-xl sm:leading-8 lg:text-[32px] lg:text-neutral-700 lg:leading-13 lg:tracking-[0.2px] dark:text-neutral-300">
            {content.description}
          </p>

          <p className="mt-2 flex w-full items-center gap-3 rounded-full border border-neutral-200 bg-white/60 px-4 py-3 text-left text-neutral-800 text-xs sm:w-auto sm:gap-4 sm:px-5 sm:text-sm lg:mt-0 lg:px-10 lg:text-xl dark:border-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-100">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-700 text-white lg:size-8">
              <Smile className="size-4 lg:size-5" />
            </span>
            {content.hint}
          </p>
        </header>

        <div className="flex w-full flex-col items-center gap-20 lg:w-auto lg:flex-row lg:gap-10">
          {/* Moldura do celular */}
          <div className="aspect-9/18 w-full max-w-85 shrink-0 rounded-[44px] border-10 border-black bg-black shadow-2xl lg:w-95 lg:max-w-none lg:rounded-[48px]">
            <div className="@container relative flex size-full flex-col overflow-hidden rounded-[38px] bg-[#eef7f5]">
              <img alt="" className="w-full shrink-0" src={statusBarImage} />

              <div
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain scrollbar-hidden"
                ref={scrollRef}
              >
                <div className="relative animate-in fade-in duration-300" key={screenId}>
                  <img
                    alt={screen.imageAlt}
                    className="block w-full"
                    decoding="async"
                    draggable={false}
                    loading="lazy"
                    src={screen.image}
                  />

                  {[...content.globalHotspots, ...screen.hotspots].map((hotspot) => (
                    <Hotspot
                      hotspot={hotspot}
                      key={hotspotKey(hotspot)}
                      onActivate={() => activate(hotspot)}
                    />
                  ))}
                </div>
              </div>

              <BottomNav active={screen.nav} items={content.nav} onNavigate={navigate} />

              <img alt="" className="w-full shrink-0 bg-[#eaf5f2]" src={footerImage} />

              {modalId && (
                <ModalSheet
                  modal={content.modals[modalId]}
                  modalId={modalId}
                  onActivate={activate}
                  onClose={() => setModalId(null)}
                />
              )}
            </div>
          </div>

          {/* Card explicativo: no mobile fica acima do celular, no desktop ao lado */}
          <div className="relative order-first w-full max-w-103 lg:order-0 lg:w-103">
            {/* Seta apontando para o celular: para baixo no mobile, para a esquerda no desktop */}
            <span
              aria-hidden
              className="absolute -bottom-13 left-1/2 size-0 -translate-x-1/2 border-x-16 border-x-transparent border-t-24 border-t-emerald-700 lg:hidden"
            />
            <span
              aria-hidden
              className="absolute top-1/2 -left-10 hidden size-0 -translate-y-1/2 border-y-16 border-y-transparent border-r-24 border-r-emerald-700 lg:block"
            />

            {/* Todos os cards ficam empilhados na mesma celula do grid e so o ativo
                aparece. Assim o card tem sempre a altura do texto mais longo e o
                celular abaixo dele nao pula ao trocar de tela. */}
            <div aria-live="polite" className="grid">
              {Object.entries(content.screens).map(([id, { callout }]) => {
                const isActive = id === screenId;

                return (
                  <div
                    aria-hidden={!isActive}
                    className={cn(
                      'col-start-1 row-start-1 flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white/80 p-6 backdrop-blur-sm lg:gap-4 lg:bg-white lg:p-8 dark:border-neutral-700 dark:bg-neutral-800/80 lg:dark:bg-neutral-800',
                      isActive ? 'animate-in fade-in duration-300' : 'invisible',
                    )}
                    key={id}
                  >
                    <span className="text-base text-neutral-500 lg:text-xl dark:text-neutral-400">
                      {callout.eyebrow}
                    </span>
                    <h3 className="font-bold text-2xl text-neutral-900 leading-8 lg:text-[28px] lg:leading-9 dark:text-neutral-50">
                      {callout.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-6 lg:text-base lg:leading-7 dark:text-neutral-300">
                      {callout.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
