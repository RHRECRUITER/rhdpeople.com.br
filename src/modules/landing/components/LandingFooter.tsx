import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DEFAULT_FOOTER } from '../content/footer.content';
import { CONTACT_ICONS, LOGO_PARTS, SOCIAL_ICONS, type ThemedAsset } from '../lib/footer.icons';
import {
  CARD_FOOTER,
  CARD_INNER,
  CARD_OUTER,
  COLUMN_LINK,
  COLUMN_WIDTHS,
  GLOW_LAYER,
  SOCIAL_BUTTON,
} from '../lib/footer.styles';
import { CONTAINER, MUTED_TEXT, SECTION_SURFACE } from '../lib/styles';
import type { Footer, FooterContact } from '../types/footer.types';

// Tudo aqui fica abaixo da dobra, por isso lazy.
function ThemedImg({ light, dark, className }: ThemedAsset & { className: string }) {
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
    <footer className={SECTION_SURFACE}>
      <div className={cn(CONTAINER, 'py-8')}>
        <div className={CARD_OUTER}>
          <div className={CARD_INNER}>
            <div className="relative flex flex-col gap-14 bg-white px-6 pt-12 pb-7.5 lg:flex-row lg:gap-27.5 lg:px-12 dark:bg-neutral-900">
              <div aria-hidden className={GLOW_LAYER} />

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

                {/* 249px no Figma */}
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
                            className={COLUMN_LINK}
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

            <div className={CARD_FOOTER}>
              <div className="flex max-w-300 flex-col items-center justify-between gap-4 sm:flex-row">
                <p className={cn(MUTED_TEXT, 'tracking-[-0.28px] dark:text-[#efefef]')}>
                  {content.copyright}
                </p>

                <div className="flex items-center gap-4">
                  {SOCIAL_ICONS.map((social) => (
                    <Button
                      aria-label={social.label}
                      className={SOCIAL_BUTTON}
                      key={social.label}
                      size="icon"
                      type="button"
                      variant="ghost"
                    >
                      <ThemedImg className="size-5" dark={social.dark} light={social.light} />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
