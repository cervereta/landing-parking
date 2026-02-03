import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  name: string;
  role: string;
  avatar: string;
  rating?: number;
}

export const TestimonialCard = ({ content, name, role, avatar, rating = 5, className, ...props }: TestimonialCardProps) => {
  return (
    <div className={cn('bg-white p-8 rounded-3xl shadow-xl shadow-sky-100/50 border border-sky-50 h-full flex flex-col items-start relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300', className)} {...props}>
      <Quote className="absolute top-4 right-6 w-12 h-12 text-sky-50 group-hover:text-sky-100 transition-colors" />
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn('w-4 h-4', i < rating ? 'text-orange-400 fill-orange-400' : 'text-gray-300 fill-gray-300')}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">&ldquo;{content}&rdquo;</p>
      <div className="mt-auto flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-sky-100 border-2 border-white shadow-sm">
          <img src={avatar} alt={name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <h4 className="font-bold text-sky-900">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};
