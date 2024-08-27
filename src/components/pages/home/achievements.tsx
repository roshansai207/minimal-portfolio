import { Section, SectionContent, SectionTitle } from '@/components/global/section';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ACHIEVEMENTS } from '@/constants/achievements';

export function Achievements() {
  return (
    <Section>
      <SectionTitle>Achievements</SectionTitle>
      <SectionContent>
        <div className='space-y-6 text-muted-foreground'>
          {ACHIEVEMENTS.map(({ id, title, description, date, content }) => {
            return (
              <Dialog key={id}>
                <DialogTrigger key={id}>
                  <div className='border rounded-lg p-4 bg-neutral-900 hover:bg-muted duration-300 cursor-pointer'>
                    <div className='flex items-end justify-between'>
                      <h3 className='text-foreground text-base mb-1.5'>{title}</h3>
                      <p className='text-sm text-muted-foreground tabular-num mb-2'>{date}</p>
                    </div>
                    <p className='text-sm text-muted-foreground font-medium leading-6 text-left'>{description}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className='max-w-2xl' showCloseButton>
                  <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                  </DialogHeader>
                  <div>
                    {content.type === 'image' ? (
                      <div>
                        <img src={`/achievements/${content.src}`} className='w-full h-auto' alt={title} />
                      </div>
                    ) : (
                      <object data={`/achievements/${content.src}`} className='min-h-[300px]' type='application/pdf' width='100%' height='100%'>
                        <p>
                          Link to PDF:{' '}
                          <a href={`/achievements/${content.src}`} rel='noreferrer' target='_blank'>
                            Click here
                          </a>
                        </p>
                      </object>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </SectionContent>
    </Section>
  );
}
