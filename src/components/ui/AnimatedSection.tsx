'use client';

import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = 'slide-up',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isInView } = useIntersectionObserver<HTMLDivElement>({ threshold });

  const animations = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    'scale-in': 'animate-scale-in',
  };

  return (
    <div
      ref={ref}
      className={cn(
        isInView ? animations[animation] : 'opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}