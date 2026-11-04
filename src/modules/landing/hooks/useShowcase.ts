import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import type {
  Showcase,
  ShowcaseHotspot,
  ShowcaseModalId,
  ShowcaseScreenId,
  ShowcaseTheme,
} from '../types/showcase.types';

/** Estado do prototipo: tela atual, container aberto e tema do app. */
export function useShowcase(content: Showcase) {
  const [screenId, setScreenId] = useState(content.initialScreen);
  const [modalId, setModalId] = useState<ShowcaseModalId | null>(null);
  const [theme, setTheme] = useState<ShowcaseTheme>('light');
  const scrollRef = useRef<HTMLElement>(null);

  const { ref: sectionRef, inView: isNearViewport } = useInView({
    rootMargin: '400px',
    triggerOnce: true,
  });

  // Pre-carrega as telas do tema atual quando a secao se aproxima, para a troca nao piscar
  useEffect(() => {
    if (!isNearViewport) return;

    for (const { image } of [...Object.values(content.screens), ...Object.values(content.modals)]) {
      const preload = new Image();
      preload.src = image[theme];
      preload.decode().catch(() => {});
    }
  }, [isNearViewport, theme, content.screens, content.modals]);

  const isModalOpen = modalId !== null;
  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalId(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isModalOpen]);

  // Quem abriu o container e guardado no clique: depois a tela fica `inert` e o foco sai dela
  const openerRef = useRef<HTMLElement | null>(null);

  // Ao fechar, o foco volta para quem abriu, ou para a tela se ele nao existe mais
  useEffect(() => {
    const opener = openerRef.current;
    if (isModalOpen || !opener) return;

    openerRef.current = null;
    (opener.isConnected ? opener : scrollRef.current)?.focus({ preventScroll: true });
  }, [isModalOpen]);

  function openModal(id: ShowcaseModalId) {
    if (!isModalOpen && document.activeElement instanceof HTMLElement) {
      openerRef.current = document.activeElement;
    }
    setModalId(id);
  }

  const closeModal = () => setModalId(null);

  function navigate(to: ShowcaseScreenId) {
    // A tela nova recria os hotspots; se o foco estava num deles, ele iria para o <body>.
    // Passa o foco para a regiao rolavel da tela, que continua montada.
    const scroller = scrollRef.current;
    if (scroller?.contains(document.activeElement)) scroller.focus({ preventScroll: true });

    setScreenId(to);
    closeModal();
    scrollRef.current?.scrollTo({ top: 0 });
  }

  function activate(hotspot: ShowcaseHotspot) {
    if ('to' in hotspot) navigate(hotspot.to);
    else if ('modal' in hotspot) openModal(hotspot.modal);
    else if ('toggleTheme' in hotspot) setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    else closeModal();
  }

  return {
    sectionRef,
    scrollRef,
    screenId,
    screen: content.screens[screenId],
    modalId,
    theme,
    navigate,
    activate,
    closeModal,
  };
}
