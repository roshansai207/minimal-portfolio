import { Section, SectionContent, SectionTitle } from '@/components/global/section';
import { EXPERIENCE } from '@/constants/experience';

export function Experience() {
  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      <SectionContent>
        <div className='space-y-6 text-muted-foreground'>
          {EXPERIENCE.map(({ id, company, location, role, dateRange, description, technologies }) => (
            <div key={id} className='border rounded-lg p-4 bg-neutral-900'>
              <h3 className='text-foreground font-medium text-base mb-1.5'>{company}</h3>
              <div className='flex items-center justify-between mb-2 text-muted-foreground'>
                <p className='text-sm font-medium'>{role}</p>
                <p className='text-xs tabular-num'>{dateRange}</p>
              </div>
              <p className='text-sm text-foreground/50 font-normal leading-6'>
                {description} Technologies: {technologies.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
