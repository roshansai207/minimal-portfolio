import Marquee from '@/components/ui/magic-ui/marquee';
import { SKILLS } from '@/constants/skills';
import { TOOLS } from '@/constants/tools';

export function ToolsAndSkills() {
  return (
    <section className='max-w-[880px] px-10 mx-auto'>
      <div className='relative bg-neutral-900 p-6 border-y'>
        <Marquee pauseOnHover className='[--duration:40s] mb-3'>
          {[...TOOLS, ...TOOLS].map(({ icon: Icon }, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={i} className='flex size-14 items-center justify-center rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950 to-90%'>
              <Icon className='size-7' />
            </div>
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse className='[--duration:40s]'>
          {[...SKILLS, ...SKILLS].map(({ icon: Icon }, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={i} className='flex size-14 items-center justify-center rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950 to-90%'>
              <Icon className='size-7' />
            </div>
          ))}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background' />
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background' />
      </div>
    </section>
  );
}
