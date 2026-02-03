import { cn } from '@/lib/utils';

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'gradient';
  size?: 'md' | 'lg';
}

export const FeatureCard = ({ title, description, icon, variant = 'default', className, ...props }: FeatureCardProps) => {
  const variants = {
    default: 'bg-white',
    primary: 'bg-sky-50',
    secondary: 'bg-orange-50',
    gradient: 'bg-gradient-to-br from-sky-600 to-indigo-700 text-white',
  };

  const iconVariants = {
    default: 'bg-slate-900',
    primary: 'bg-sky-500',
    secondary: 'bg-orange-500',
    gradient: 'bg-white/20 backdrop-blur-sm text-white',
  };

  const titleVariants = {
    default: 'text-slate-900',
    primary: 'text-slate-900',
    secondary: 'text-slate-900',
    gradient: 'text-white',
  };

  const descVariants = {
    default: 'text-slate-600',
    primary: 'text-slate-600',
    secondary: 'text-slate-600',
    gradient: 'text-sky-100',
  };

  return (
    <div className={cn('relative p-8 rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500', variants[variant], className)} {...props}>
      <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500', iconVariants[variant])}>
        {icon}
      </div>
      <div className="relative z-10">
        <h3 className={cn('text-2xl font-bold mb-4', titleVariants[variant])}>{title}</h3>
        <p className={cn('text-lg leading-relaxed opacity-80', descVariants[variant])}>{description}</p>
      </div>
      {variant !== 'gradient' && (
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-sky-50 rounded-full group-hover:scale-150 transition-transform duration-500 z-0" />
      )}
    </div>
  );
};
