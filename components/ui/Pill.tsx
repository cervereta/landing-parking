import { cn } from '@/lib/utils';

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
}

export const Pill = ({ className, variant = 'default', size = 'md', children, ...props }: PillProps) => {
  const variants = {
    default: 'bg-white border border-sky-100',
    primary: 'bg-sky-500 text-white',
    secondary: 'bg-orange-500 text-white',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
  };

  return (
    <div className={cn('rounded-full inline-flex items-center gap-2 backdrop-blur-sm shadow-sm', variants[variant], sizes[size], className)} {...props}>
      {children}
    </div>
  );
};
