import { Check, GlobeLock, Shield } from 'lucide-react';

/** Espessura de traço em px absolutos, conforme os ícones dos selos no Figma. */
export const LEAD_BADGE_ICONS = {
  shield: { Icon: Shield, strokeWidth: 2 },
  'globe-lock': { Icon: GlobeLock, strokeWidth: 1.5 },
  check: { Icon: Check, strokeWidth: 2 },
} as const;
