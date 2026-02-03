import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-slate-200', className)}
      {...props}
    />
  );
};

export const SkeletonCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn('p-6 rounded-2xl bg-white border border-slate-200', className)}>
      <Skeleton className="h-14 w-14 rounded-2xl mb-6" />
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-20 w-full" />
    </div>
  );
};

export const SkeletonHero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-background">
      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Skeleton className="h-10 w-64 rounded-full mb-8" />
          <Skeleton className="h-24 w-full mb-6" />
          <Skeleton className="h-8 w-2/3 mb-10" />
          <Skeleton className="h-16 w-72 rounded-full mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export const SkeletonStats = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <Skeleton className="h-12 w-32 mx-auto mb-2" />
              <Skeleton className="h-6 w-24 mx-auto" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
