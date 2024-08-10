import { TOOLS_ICONS } from '@/components/global/icons';
import { z } from 'zod';

export const toolsSchema = z.object({
  id: z.number(),
  title: z.string(),
});

export const TOOLS: (z.infer<typeof toolsSchema> & { icon: (typeof TOOLS_ICONS)[keyof typeof TOOLS_ICONS] })[] = [
  {
    id: 1,
    title: 'Bit bucket',
    icon: TOOLS_ICONS.bitBucket,
  },
  {
    id: 2,
    title: 'Sauce Labs',
    icon: TOOLS_ICONS.sauceLabs,
  },
  {
    id: 3,
    title: 'JIRA',
    icon: TOOLS_ICONS.jira,
  },
  {
    id: 4,
    title: 'Postman',
    icon: TOOLS_ICONS.postman,
  },
  {
    id: 5,
    title: 'Intellij',
    icon: TOOLS_ICONS.intellij,
  },
  {
    id: 6,
    title: 'Maven build tool',
    icon: TOOLS_ICONS.maven,
  },
  // {
  //   id: 7,
  //   title: 'Test NG',
  // },
];
