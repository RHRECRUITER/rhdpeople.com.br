import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const readStoredTheme = (storageKey: string): Theme | null => {
  try {
    return localStorage.getItem(storageKey) as Theme | null;
  } catch {
    // Modo privado / storage bloqueado
    return null;
  }
};

// A classe inicial ja e aplicada pelo script inline do index.html, antes do primeiro
// paint; este provider so mantem o estado e reaplica quando o tema muda.
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme(storageKey) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const resolved =
      theme === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : theme;

    // Troca as duas classes de uma vez, sem um estado intermediario sem tema
    root.classList.remove(resolved === 'dark' ? 'light' : 'dark');
    root.classList.add(resolved);
  }, [theme]);

  const setTheme = useCallback(
    (next: Theme) => {
      try {
        localStorage.setItem(storageKey, next);
      } catch {
        // Sem storage o tema so nao persiste entre visitas
      }
      setThemeState(next);
    },
    [storageKey],
  );

  // Valor estavel: sem isso todo consumidor do contexto re-renderiza a cada render do provider
  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
