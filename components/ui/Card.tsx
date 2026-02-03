import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline';
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = ({ className, variant = 'default', padding = 'md', children, ...props }: CardProps) => {
  const variants = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg shadow-sky-100/50 border border-sky-50',
    outline: 'bg-white border border-sky-100',
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={cn('rounded-2xl overflow-hidden group transition-all duration-300', variants[variant], paddings[padding], className)} {...props}>
      {children}
    </div>
  );
};
