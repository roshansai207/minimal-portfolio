import { SKILLS_ICONS } from '@/components/global/icons';
import { z } from 'zod';

export const skillsSchema = z.object({
  id: z.number(),
  title: z.string(),
});

export const SKILLS: (z.infer<typeof skillsSchema> & { icon: (typeof SKILLS_ICONS)[keyof typeof SKILLS_ICONS] })[] = [
  {
    id: 1,
    title: 'Java',
    icon: SKILLS_ICONS.java,
  },
  {
    id: 2,
    title: 'Selenium',
    icon: SKILLS_ICONS.selenium,
  },
  {
    id: 3,
    title: 'Rest Assured API Testing',
    icon: SKILLS_ICONS.restAssuredAPITesting,
  },
  {
    id: 4,
    title: 'Jenkins',
    icon: SKILLS_ICONS.jenkins,
  },
  {
    id: 5,
    title: 'SQL',
    icon: SKILLS_ICONS.sql,
  },
  {
    id: 6,
    title: 'Functional testing',
    icon: SKILLS_ICONS.functionalTesting,
  },
  {
    id: 9,
    title: 'VB scripting and macros creation',
    icon: SKILLS_ICONS.vbScripting,
  },
  // {
  //   id: 7,
  //   title: 'Test planning, scripting',
  // },
  {
    id: 8,
    title: 'Agile/scrum activities',
    icon: SKILLS_ICONS.scrumActivities,
  },
];
