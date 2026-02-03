'use client';

import { useTheme } from '@/components/theme-provider';
import { Monitor, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const themes = [
  {
    value: 'light' as const,
    label: 'Claro',
    icon: Sun,
  },
  {
    value: 'dark' as const,
    label: 'Oscuro',
    icon: Moon,
  },
  {
    value: 'system' as const,
    label: 'Sistema',
    icon: Monitor,
  },
];

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 bg-sky-50/50 backdrop-blur-sm border border-sky-100 rounded-full p-1">
      {themes.map(({ value, label, icon: Icon }) => (
        <Button
          key={value}
          variant="ghost"
          size="sm"
          onClick={() => setTheme(value)}
          className={cn(
            'h-8 px-3 rounded-full transition-all duration-200',
            theme === value
              ? 'bg-white shadow-sm text-sky-600 border border-sky-200'
              : 'text-slate-600 hover:text-slate-900'
          )}
          aria-label={`Cambiar tema a ${label}`}
        >
          <Icon className="w-4 h-4" />
          <span className="hidden sm:inline ml-2 text-sm font-medium">{label}</span>
        </Button>
      ))}
    </div>
  );
};

import { cn } from '@/lib/utils';