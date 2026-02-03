import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Container = ({ className, size = 'lg', children, ...props }: ContainerProps) => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-7xl',
    full: 'max-w-none',
  };

  return (
    <div className={cn('mx-auto px-4 w-full', sizes[size], className)} {...props}>
      {children}
    </div>
  );
};
