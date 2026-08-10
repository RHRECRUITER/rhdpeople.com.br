import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import iconInstagram from '../../../assets/icon-instagram.svg';
import iconInstagramDark from '../../../assets/icon-instagram-dark.svg';
import iconLinkedin from '../../../assets/icon-linkedin.svg';
import iconLinkedinDark from '../../../assets/icon-linkedin-dark.svg';
import logoDpeople from '../../../assets/logo-dpeople.svg';
import logoDpeopleDark from '../../../assets/logo-dpeople-dark.svg';
import logoMark from '../../../assets/logo-mark.svg';
import logoMarkDark from '../../../assets/logo-mark-dark.svg';
import logoRh from '../../../assets/logo-rh.svg';
import logoRhDark from '../../../assets/logo-rh-dark.svg';
import { CONTAINER, MUTED_TEXT } from '../lib/styles';
import type { Footer, FooterContact } from '../types/footer.types';

const CONTACT_ICONS = {
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
} as const;

const DEFAULT_FOOTER: Footer = {
  title: 'Seu RH mais inteligente,',
  titleHighlight: 'humano e digital.',
  description:
    'A plataforma completa de gestão de Departamento Pessoal que simplifica processos e empodera colaboradores.',
  contacts: [
    { icon: 'mail', label: 'contato@rhdpeople.com.br' },
    { icon: 'phone', label: '(83) 99621-9812' },
    { icon: 'map-pin', label: 'João Pessoa - PB' },
  ],
  ctaLabel: 'Falar com especialista',
  columns: [
    {
      title: 'Produto',
      links: [
        { label: 'Funcionalidades', href: '#funcionalidades' },
        { label: 'Portal do colaborador', href: '#portal' },
        { label: 'Planos e preços', href: '#planos' },
        { label: 'Integrações', href: '#integracoes' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: '#sobre' },
        { label: 'Carreiras', href: '#carreiras' },
        { label: 'Parceiros', href: '#parceiros' },
      ],
    },
    {
      title: 'Suporte',
      links: [
        { label: 'Central de ajuda', href: '#ajuda' },
        { label: 'Status do sistema', href: '#status' },
        { label: 'Contato', href: '#contato' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'LGPD', href: '#lgpd' },
        { label: 'Termos de Uso', href: '#termos' },
        { label: 'Política de privacidade', href: '#privacidade' },
        { label: 'Cookies', href: '#cookies' },
      ],
    },
  ],
  copyright: '© RHDPeople | todos os direitos reservados',
};

/**
 * Brilhos radiais do fundo, transcritos do Figma (frame "Leading content", 1296x413).
 * Centros em 15%/15%, 15%/85% e 85%/85%; os raios saem de `r * escala * offset` do
 * gradiente e o alfa de `alfa do stop x opacidade do retangulo` — por isso os tres
 * tem intensidades diferentes, e claro/escuro nao sao so uma reducao uniforme.
 */
const GLOW_LIGHT =
  '[--glow:radial-gradient(507px_527px_at_15%_15%,rgba(110,231,183,0.056),transparent),radial-gradient(634px_659px_at_15%_85%,rgba(110,231,183,0.188),transparent),radial-gradient(622px_647px_at_85%_85%,rgba(110,231,183,0.128),transparent)]';
const GLOW_DARK =
  'dark:[--glow:radial-gradient(507px_527px_at_15%_15%,rgba(110,231,183,0.094),transparent),radial-gradient(634px_659px_at_15%_85%,rgba(110,231,183,0.028),transparent),radial-gradient(622px_647px_at_85%_85%,rgba(110,231,183,0.1),transparent)]';

const CARD_GLOW =
  '[filter:drop-shadow(0_8px_2px_rgba(110,231,183,0.2))_drop-shadow(0_18px_6px_rgba(110,231,183,0.2))]';
const CARD_GLOW_DARK =
  'dark:[filter:drop-shadow(0_8px_2px_rgba(110,231,183,0.05))_drop-shadow(0_18px_6px_rgba(110,231,183,0.05))]';

/** Larguras fixas das colunas de links no desktop (144 / 93 / 136 / 164 no Figma). */
const COLUMN_WIDTHS = ['lg:w-36', 'lg:w-23.25', 'lg:w-34', 'lg:w-41'];

/** Partes da marca, posicionadas conforme o lockup do Figma. */
const LOGO_PARTS = [
  { className: 'top-0 left-0 h-8.75 w-[36.639px]', light: logoMark, dark: logoMarkDark },
  {
    className: 'top-[6.16px] left-[42.37px] h-[22.59px] w-[42.324px]',
    light: logoRh,
    dark: logoRhDark,
  },
  {
    className: 'top-[5.69px] left-[92.56px] h-[23.53px] w-[126.442px]',
    light: logoDpeople,
    dark: logoDpeopleDark,
  },
];

/**
 * O Figma entrega jogos separados de SVG para claro e escuro, entao renderizamos
 * os dois e deixamos o CSS escolher. Tudo aqui fica abaixo da dobra, por isso lazy.
 */
function ThemedImg({ light, dark, className }: { light: string; dark: string; className: string }) {
  return (
    <>
      <img
        alt=""
        className={cn('dark:hidden', className)}
        decoding="async"
        loading="lazy"
        src={light}
      />
      <img
        alt=""
        className={cn('hidden dark:block', className)}
        decoding="async"
        loading="lazy"
        src={dark}
      />
    </>
  );
}

/** Marca composta pelos tres SVGs exportados do Figma (simbolo + "RH" + "DPEOPLE"). */
function LogoLockup() {
  return (
    <div aria-label="RHDPeople" className="relative h-8.75 w-54.75" role="img">
      {LOGO_PARTS.map((part) => (
        <ThemedImg
          className={cn('absolute', part.className)}
          dark={part.dark}
          key={part.className}
          light={part.light}
        />
      ))}
    </div>
  );
}

function SocialButton({ label, light, dark }: { label: string; light: string; dark: string }) {
  return (
    <Button
      aria-label={label}
      className="rounded-md bg-[#ebfcf5] hover:bg-emerald-200 dark:bg-neutral-900/23 dark:hover:bg-neutral-800"
      size="icon"
      type="button"
      variant="ghost"
    >
      <ThemedImg className="size-5" dark={dark} light={light} />
    </Button>
  );
}

function ContactItem({ contact }: { contact: FooterContact }) {
  const Icon = CONTACT_ICONS[contact.icon];

  return (
    <li className={cn(MUTED_TEXT, 'flex items-center gap-2 tracking-[-0.16px]')}>
      <Icon className="size-4 shrink-0" />
      {contact.label}
    </li>
  );
}

type LandingFooterProps = {
  content?: Footer;
};

export function LandingFooter({ content = DEFAULT_FOOTER }: LandingFooterProps) {
  return (
    <footer className="w-full overflow-hidden bg-[#f9f9f9] dark:bg-neutral-900">
      <div className={cn(CONTAINER, 'py-8')}>
        {/* Moldura externa de vidro */}
        <div className="rounded-[32px] border border-[#ece8fd] bg-white/30 p-2 backdrop-blur-[2px] dark:border-[#ece8fd]/5 dark:bg-neutral-900">
          <div
            className={cn(
              'overflow-hidden rounded-[48px] border border-[#ece8fd] dark:border-[#ece8fd]/10',
              CARD_GLOW,
              CARD_GLOW_DARK,
            )}
          >
            <div className="relative flex flex-col gap-14 bg-white px-6 pt-12 pb-7.5 lg:flex-row lg:gap-27.5 lg:px-12 dark:bg-neutral-900">
              <div
                aria-hidden
                className={cn(
                  'pointer-events-none absolute inset-0 bg-(image:--glow)',
                  GLOW_LIGHT,
                  GLOW_DARK,
                )}
              />

              <div className="relative flex w-full flex-col items-start gap-4 lg:w-100.75 lg:shrink-0">
                <LogoLockup />

                <div className="flex flex-col gap-3">
                  <p className="font-heading font-bold text-[32px] text-neutral-700 leading-9.5 tracking-[-0.2px] dark:text-neutral-50">
                    {content.title}
                    <br />
                    <span className="text-emerald-600">{content.titleHighlight}</span>
                  </p>
                  <p className={cn(MUTED_TEXT, 'tracking-[-0.16px]')}>{content.description}</p>
                </div>

                <ul className="flex flex-col gap-2">
                  {content.contacts.map((contact) => (
                    <ContactItem contact={contact} key={contact.label} />
                  ))}
                </ul>

                {/* Largura fixa de 249px, como no Figma */}
                <Button className="w-62.25" size="xl" type="button">
                  {content.ctaLabel}
                </Button>
              </div>

              <div className="relative grid flex-1 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:flex lg:justify-center lg:gap-14">
                {content.columns.map((column, index) => (
                  <nav
                    className={cn('flex flex-col gap-5 lg:shrink-0', COLUMN_WIDTHS[index])}
                    key={column.title}
                  >
                    <h2 className="font-medium text-base text-neutral-900 leading-6 dark:text-neutral-50">
                      {column.title}
                    </h2>
                    <ul className="flex flex-col gap-4">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <a
                            className="text-[#242734] text-sm leading-5 transition-colors hover:text-emerald-700 dark:text-[#d9d9d9] dark:hover:text-emerald-400"
                            href={link.href}
                            onClick={(event) => event.preventDefault()}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
            </div>

            <div className="border-emerald-300 border-t bg-emerald-300/24 px-6 py-6 lg:px-10 dark:border-emerald-300/45 dark:bg-emerald-300/12">
              <div className="flex max-w-300 flex-col items-center justify-between gap-4 sm:flex-row">
                <p className={cn(MUTED_TEXT, 'tracking-[-0.28px] dark:text-[#efefef]')}>
                  {content.copyright}
                </p>

                {/* Redes sociais: viram <a> quando as URLs forem definidas */}
                <div className="flex items-center gap-4">
                  <SocialButton dark={iconLinkedinDark} label="LinkedIn" light={iconLinkedin} />
                  <SocialButton dark={iconInstagramDark} label="Instagram" light={iconInstagram} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
