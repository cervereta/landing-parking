'use client';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

export const AnimatedBackground = ({ children }: AnimatedBackgroundProps) => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-200/40 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-100/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-sky-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>
      
      {children}
    </div>
  );
};
