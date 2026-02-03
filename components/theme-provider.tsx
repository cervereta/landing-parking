'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

// Función para obtener el tema inicial de localStorage (solo cliente)
const getInitialTheme = (defaultTheme: Theme): Theme => {
  if (typeof window === 'undefined') return defaultTheme;
  const stored = localStorage.getItem('theme') as Theme;
  return stored || defaultTheme;
};

export const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme(defaultTheme));
  const mounted = typeof window !== 'undefined';

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    if (disableTransitionOnChange) {
      const css = document.createElement('style');
      css.appendChild(
        document.createTextNode(
          '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
        )
      );
      document.head.appendChild(css);

      (() => window.getComputedStyle(document.body))();

      setTimeout(() => {
        document.head.removeChild(css);
      }, 1);
    }

    const applyTheme = (newTheme: Theme) => {
      const isDark = 
        newTheme === 'dark' || 
        (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      root.classList.remove('light', 'dark');
      root.classList.add(isDark ? 'dark' : 'light');
      
      root.style.colorScheme = isDark ? 'dark' : 'light';
    };

    applyTheme(theme);

    if (enableSystem && theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, enableSystem, disableTransitionOnChange, mounted]);

  const value: ThemeProviderState = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    },
    resolvedTheme: (theme === 'dark' || 
      (theme === 'system' && typeof window !== 'undefined' && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)) 
      ? 'dark' : 'light',
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
