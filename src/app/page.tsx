import { About } from '@/components/pages/home/about';
import { Achievements } from '@/components/pages/home/achievements';
import { Education } from '@/components/pages/home/education';
import { Experience } from '@/components/pages/home/experience';
import { Intro } from '@/components/pages/home/intro';
import { Skills } from '@/components/pages/home/skills';
import { Tools } from '@/components/pages/home/tools';
import { ToolsAndSkills } from '@/components/pages/home/tools-and-skills';

export default function Page() {
  return (
    <main className='space-y-12 md:space-y-20 relative pb-20'>
      <Intro />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Tools />
      <ToolsAndSkills />
      <Achievements />
      <section className='absolute inset-x-0 top-0 h-[75vh] !mt-0 z-[-2] background-designs-wrapper'>
        <div className='inset-0 absolute z-[2] bg-gradient-to-b from-transparent to-background' />
        <div className='background-stripes w-full h-full z-[-2]' />
      </section>
    </main>
  );
}
