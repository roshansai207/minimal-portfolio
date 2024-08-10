import { Section, SectionContent, SectionTitle } from '@/components/global/section';
import { ABOUT } from '@/constants/about';
import Image from 'next/image';

export function About() {
  return (
    <Section>
      <SectionTitle>About</SectionTitle>
      <SectionContent>
        <div className='space-y-4 text-muted-foreground'>
          {ABOUT.map((text, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <p key={index} className='leading-6'>
              {text}
            </p>
          ))}
          <div>
            <Image src='/signature.png' alt='Signature' className='w-24 h-auto' width={1000} height={500} loading='lazy' unoptimized />
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
