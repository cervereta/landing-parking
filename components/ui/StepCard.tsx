import { cn } from '@/lib/utils';

interface StepCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  stepNumber?: number;
}

export const StepCard = ({ title, description, icon, stepNumber, className, ...props }: StepCardProps) => {
  return (
    <div className={cn('bg-white p-6 rounded-2xl text-center group hover:bg-sky-50 transition-colors duration-300', className)} {...props}>
      {stepNumber && (
        <div className="w-8 h-8 mx-auto mb-4 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
          {stepNumber}
        </div>
      )}
      <div className="w-20 h-20 mx-auto bg-sky-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-white border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};
