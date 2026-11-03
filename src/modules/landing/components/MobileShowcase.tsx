import { Smile } from 'lucide-react';
import { cn } from '@/lib/utils';
import backgroundDark from '../../../assets/interativo/background/dark-background.jpg';
import backgroundLight from '../../../assets/interativo/background/light-background.jpg';
import { DEFAULT_SHOWCASE } from '../content/showcase.content';
import { useShowcase } from '../hooks/useShowcase';
import { NAV_ICONS } from '../lib/showcase.icons';
import {
  APP_THEME,
  BOTTOM_NAV,
  CALLOUT_ARROW_DOWN,
  CALLOUT_ARROW_LEFT,
  CALLOUT_CARD,
  DESCRIPTION,
  HEADING,
  HINT_PILL,
  HOTSPOT,
  NAV_HEIGHT,
  NAV_ITEM,
  NAV_ITEM_FEATURED,
  PHONE_FRAME,
  PHONE_SCREEN,
  px,
  SECTION,
  SHEET_BACKDROP,
  SHEET_PANEL,
  STATUS_BAR_HEIGHT,
} from '../lib/showcase.styles';
import { CONTAINER } from '../lib/styles';
import type {
  Showcase,
  ShowcaseHotspot,
  ShowcaseModal,
  ShowcaseModalId,
  ShowcaseNavId,
  ShowcaseNavItem,
  ShowcaseScreen,
  ShowcaseScreenId,
  ShowcaseTheme,
} from '../types/showcase.types';

// `?hotspots` na URL deixa as areas clicaveis visiveis, para calibrar
const DEBUG_HOTSPOTS =
  typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('hotspots');

const hotspotKey = (hotspot: ShowcaseHotspot) => `${hotspot.label}-${hotspot.x}-${hotspot.y}`;

function Hotspot({ hotspot, onActivate }: { hotspot: ShowcaseHotspot; onActivate: () => void }) {
  return (
    <button
      aria-label={hotspot.label}
      className={cn(HOTSPOT, DEBUG_HOTSPOTS && 'bg-red-500/30 ring-1 ring-red-500')}
      onClick={onActivate}
      style={{
        left: px(hotspot.x),
        top: px(hotspot.y),
        width: px(hotspot.width),
        height: px(hotspot.height),
      }}
      type="button"
    />
  );
}

type BottomNavProps = {
  items: ShowcaseNavItem[];
  active?: ShowcaseNavId;
  theme: ShowcaseTheme;
  onNavigate: (to: ShowcaseScreenId) => void;
};

// Em HTML, e nao com o PNG do menu, porque o item ativo muda conforme a tela
function BottomNav({ items, active, theme, onNavigate }: BottomNavProps) {
  const colors = APP_THEME[theme];

  return (
    <nav
      aria-label="Menu do app"
      className={cn(BOTTOM_NAV, colors.nav)}
      style={{ height: px(NAV_HEIGHT) }}
    >
      {items.map((item) => {
        const Icon = NAV_ICONS[item.id];
        const isActive = item.id === active;
        const iconSize = px(item.featured ? 30 : 28);

        return (
          <div className="relative" key={item.id}>
            <button
              aria-current={isActive ? 'page' : undefined}
              className={
                item.featured
                  ? cn(NAV_ITEM_FEATURED, colors.featured)
                  : cn(NAV_ITEM, isActive ? cn(colors.navActive, 'font-semibold') : 'font-normal')
              }
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
          </div>
        );
      })}
    </nav>
  );
}

type ModalSheetProps = {
  modalId: ShowcaseModalId;
  modal: ShowcaseModal;
  theme: ShowcaseTheme;
  onActivate: (hotspot: ShowcaseHotspot) => void;
  onClose: () => void;
};

function ModalSheet({ modalId, modal, theme, onActivate, onClose }: ModalSheetProps) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-end">
      <button
        aria-label="Fechar"
        className={SHEET_BACKDROP}
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />

      <div
        aria-label={modal.label}
        aria-modal
        className={SHEET_PANEL}
        role="dialog"
        style={{ marginTop: px(STATUS_BAR_HEIGHT) }}
      >
        {/* O key fica aqui para so o conteudo trocar entre containers, sem o painel subir de novo */}
        <div className="relative animate-in fade-in duration-300" key={modalId}>
          <img
            alt=""
            className="block w-full"
            decoding="async"
            draggable={false}
            src={modal.image[theme]}
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

type CalloutsProps = {
  screens: Showcase['screens'];
  activeId: ShowcaseScreenId;
};

// Todos os cards ficam empilhados e so o ativo aparece: a altura nao muda e o celular nao pula
function Callouts({ screens, activeId }: CalloutsProps) {
  const entries = Object.entries(screens) as [ShowcaseScreenId, ShowcaseScreen][];

  return (
    <div aria-live="polite" className="grid">
      {entries.map(([id, { callout }]) => {
        const isActive = id === activeId;

        return (
          <div
            aria-hidden={!isActive}
            className={cn(CALLOUT_CARD, isActive ? 'animate-in fade-in duration-300' : 'invisible')}
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
  );
}

type MobileShowcaseProps = {
  content?: Showcase;
};

export function MobileShowcase({ content = DEFAULT_SHOWCASE }: MobileShowcaseProps) {
  const {
    sectionRef,
    scrollRef,
    screenId,
    screen,
    modalId,
    theme,
    navigate,
    activate,
    closeModal,
  } = useShowcase(content);

  return (
    <section className={SECTION} id="app" ref={sectionRef}>
      {/* Fundo decorativo de cada tema; o gradiente do SECTION fica por baixo enquanto carrega */}
      <img
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full object-cover dark:hidden"
        decoding="async"
        loading="lazy"
        src={backgroundLight}
      />
      <img
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden size-full object-cover dark:block"
        decoding="async"
        loading="lazy"
        src={backgroundDark}
      />

      <div
        className={cn(
          CONTAINER,
          'relative flex flex-col items-center gap-8 py-12 lg:gap-14 lg:py-24',
        )}
      >
        <header className="flex w-full max-w-225 flex-col items-center gap-4 text-center lg:gap-6">
          <h2 className={HEADING}>
            {content.title}
            <span className="block text-emerald-700 sm:inline dark:text-emerald-400">
              {content.titleHighlight}
            </span>
          </h2>

          <p className={DESCRIPTION}>{content.description}</p>

          <p className={HINT_PILL}>
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-700 text-white lg:size-8">
              <Smile className="size-4 lg:size-5" />
            </span>
            {content.hint}
          </p>
        </header>

        <div className="flex w-full flex-col items-center gap-20 lg:w-auto lg:flex-row lg:gap-10">
          <div className={PHONE_FRAME}>
            <div className={cn(PHONE_SCREEN, APP_THEME[theme].screen)}>
              <img alt="" className="w-full shrink-0" src={content.statusBar[theme]} />

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
                    src={screen.image[theme]}
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

              <BottomNav
                active={screen.nav}
                items={content.nav}
                onNavigate={navigate}
                theme={theme}
              />

              <img alt="" className="w-full shrink-0" src={content.gestureBar[theme]} />

              {modalId && (
                <ModalSheet
                  modal={content.modals[modalId]}
                  modalId={modalId}
                  onActivate={activate}
                  onClose={closeModal}
                  theme={theme}
                />
              )}
            </div>
          </div>

          <div className="relative order-first w-full max-w-103 lg:order-0 lg:w-103">
            <span aria-hidden className={CALLOUT_ARROW_DOWN} />
            <span aria-hidden className={CALLOUT_ARROW_LEFT} />
            <Callouts activeId={screenId} screens={content.screens} />
          </div>
        </div>
      </div>
    </section>
  );
}
