import { Section, SectionContent, SectionTitle } from '@/components/global/section';
import { EDUCATION } from '@/constants/education';

export function Education() {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      <SectionContent>
        <div className='space-y-6 text-muted-foreground'>
          {EDUCATION.map(({ id, college, branch, duration }) => (
            <div key={id} className='border rounded-lg p-4 bg-neutral-900'>
              <h3 className='text-foreground text-base mb-1.5'>{college}</h3>
              <div className='flex items-center justify-between'>
                <p className='text-sm text-muted-foreground font-medium leading-6'>Bachelor's Degree in Electrical and Electronics Engineering</p>
                <p className='text-sm text-muted-foreground tabular-num mb-2'>{duration}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
