import { Clock, FileText, FolderOpen, House, type LucideIcon, TreePalm } from 'lucide-react';
import type { ShowcaseNavId } from '../types/showcase.types';

export const NAV_ICONS: Record<ShowcaseNavId, LucideIcon> = {
  home: House,
  ponto: Clock,
  ferias: TreePalm,
  docs: FolderOpen,
  holerite: FileText,
};
