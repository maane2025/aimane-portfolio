
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-10 md:mb-16 text-center', className)}>
      <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-md md:text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
