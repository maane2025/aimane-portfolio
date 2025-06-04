
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  id: string;
  className?: string;
}

export function Section({ id, children, className, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-12 md:py-20 lg:py-24', className)} {...props}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
