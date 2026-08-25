import { Mail, MapPin, Phone } from 'lucide-react';
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
import type { FooterContact } from '../types/footer.types';

export const CONTACT_ICONS: Record<FooterContact['icon'], typeof Mail> = {
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
};

// O Figma entrega jogos separados de SVG para claro e escuro, entao cada peca
// carrega os dois e o CSS escolhe.
export type ThemedAsset = {
  light: string;
  dark: string;
};

// Simbolo + "RH" + "DPEOPLE", posicionados conforme o lockup do Figma.
export const LOGO_PARTS: (ThemedAsset & { className: string })[] = [
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

export const SOCIAL_ICONS: (ThemedAsset & { label: string })[] = [
  { label: 'LinkedIn', light: iconLinkedin, dark: iconLinkedinDark },
  { label: 'Instagram', light: iconInstagram, dark: iconInstagramDark },
];
