import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Globe from '@/components/ui/magic-ui/globe';
import { INTRO } from '@/constants/intro';
import Image from 'next/image';
import Link from 'next/link';

export function Intro() {
  return (
    <section>
      <div className='pt-[160px] relative z-50'>
        <div>
          <Image
            src={`/${INTRO.profilePic.src}`}
            className='size-28 md:size-[150px] rounded-full mx-auto'
            alt={INTRO.profilePic.alt}
            width={1000}
            height={500}
          />
        </div>
        <div>
          <h2 className='text-center text-3xl md:text-4xl font-bold mt-6 mb-3'>{INTRO.name}</h2>
          <div className='text-center text-sm md:text-base font-medium text-muted-foreground whitespace-pre-wrap px-4 md:px-0'>
            <p>
              {INTRO.role}, based in <LocationGlobe />
            </p>
          </div>
          <div className='flex items-center justify-center gap-5 mt-6'>
            {[...INTRO.personalLinks, ...INTRO.socialLinks].map((link, index) => {
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <Button variant='outline' className='bg-neutral-800/50' key={index}>
                  <Link href={link.href} className='flex items-center justify-center gap-2'>
                    <link.icon className='h-4 w-4' />
                    <span className='capitalize'>{link.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationGlobe() {
  return (
    <Dialog>
      <DialogTrigger className='underline font-medium relative'>
        {INTRO.location.value}
        <span className='flex absolute size-2.5 top-0 right-0 -mt-0.5 -mr-1.5'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75' />
          <span className='relative inline-flex rounded-full size-2.5 bg-sky-500' />
        </span>
      </DialogTrigger>
      <DialogContent className='bg-transparent border-none p-0 max-w-fit'>
        <div className='size-[600px]'>
          <Globe className='w-full h-full' />
        </div>
      </DialogContent>
    </Dialog>
  );
}
