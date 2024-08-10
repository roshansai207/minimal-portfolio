import { Section, SectionContent, SectionTitle } from '@/components/global/section';
import { SKILLS } from '@/constants/skills';

export function Skills() {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <SectionContent>
        <div className='flex flex-wrap gap-x-6 gap-y-3'>
          {SKILLS.map(({ id, title, icon: Icon }) => {
            return (
              <span
                key={id}
                className='inline-flex items-center justify-center gap-2 font-semibold print:text-[10px] text-foreground/80 hover:text-foreground transition-colors duration-300'
              >
                <Icon className='size-5' />
                {title}
              </span>
            );
          })}
        </div>
      </SectionContent>
    </Section>
  );
}
