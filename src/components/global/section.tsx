import { cn } from '@/lib/utils/cn';

export function Section({ className, ...props }: React.ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn('max-w-[880px] px-6 md:px-10 mx-auto flex flex-col md:flex-row gap-y-8 items-start justify-start relative', className)}
      {...props}
    />
  );
}

export function SectionTitle({ className, ...props }: React.ComponentPropsWithoutRef<'h2'>) {
  return (
    <div className='w-full max-w-44 md:sticky static top-12'>
      <h2 className={cn('text-base font-semibold', className)} {...props} />
    </div>
  );
}

export function SectionContent({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) {
  return <div className={cn('w-full', className)} {...props} />;
}
