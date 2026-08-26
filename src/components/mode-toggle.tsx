import { Moon, Sun } from 'lucide-react';
import type * as React from 'react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ModeToggleProps = Pick<React.ComponentProps<typeof Button>, 'className' | 'variant' | 'size'>;

export function ModeToggle({
  className,
  variant = 'outline',
  size = 'icon',
}: ModeToggleProps = {}) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button
      className={cn('relative', className)}
      variant={variant}
      size={size}
      onClick={toggleTheme}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}
