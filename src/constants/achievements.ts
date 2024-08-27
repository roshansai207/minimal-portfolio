import { z } from 'zod';

export const achievementSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  content: z.object({
    type: z.enum(['pdf', 'image']),
    src: z.string(),
  }),
});

export const ACHIEVEMENTS: z.infer<typeof achievementSchema>[] = [
  {
    id: 1,
    title: 'Open Source',
    description: 'Contributed and resolved issues in multiple open source projects including shadcn ui, radix-ui, etc',
    date: '2024',
    content: {
      type: 'image',
      src: 'open-source-contribution.png',
    },
  },
  {
    id: 2,
    title: 'TEDx',
    description: 'Played a key developer and technical role in planning and conducting a successful TEDx event',
    date: '2022',
    content: {
      type: 'pdf',
      src: 'resume.pdf',
    },
  },
  {
    id: 3,
    title: 'Hacktoberfest',
    description: "Contributed to 8 open source projects through GitHub and won the Hacktoberfest '22 and '23",
    date: '2022 & 2023',
    content: {
      type: 'pdf',
      src: 'resume.pdf',
    },
  },
];
