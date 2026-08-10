import { Moon, Sun } from 'lucide-react';
import type * as React from 'react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ModeToggleProps = Pick<React.ComponentProps<typeof Button>, 'className' | 'variant' | 'size'>;

export function ModeToggle({
  className,
  variant = 'outline',
  size = 'icon',
}: ModeToggleProps = {}) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={className} variant={variant} size={size}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Claro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Escuro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>Sistema</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
