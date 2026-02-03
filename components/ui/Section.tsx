import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'white' | 'primary-light' | 'secondary-light' | 'transparent';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  as?: 'section' | 'div';
}

export const Section = ({
  className,
  background = 'white',
  spacing = 'lg',
  as = 'section',
  children,
  ...props
}: SectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    'primary-light': 'bg-sky-50',
    'secondary-light': 'bg-orange-50',
    transparent: 'bg-transparent',
  };

  const spacings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32',
  };

  const Component = as;

  return (
    <Component className={cn(backgrounds[background], spacings[spacing], className)} {...props}>
      {children}
    </Component>
  );
};
