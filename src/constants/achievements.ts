import { z } from 'zod';

export const achievementSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
});

export const ACHIEVEMENTS: z.infer<typeof achievementSchema>[] = [
  {
    id: 1,
    title: 'Open Source',
    description: 'Contributed and resolved issues in multiple open source projects including shadcn ui, radix-ui, etc',
    date: '2024',
  },
  {
    id: 2,
    title: 'TEDx',
    description: 'Played a key developer and technical role in planning and conducting a successful TEDx event',
    date: '2022',
  },
  {
    id: 3,
    title: 'Hacktoberfest',
    description: "Contributed to 8 open source projects through GitHub and won the Hacktoberfest '22 and '23",
    date: '2022 & 2023',
  },
  {
    id: 4,
    title: 'CSS Battles',
    description:
      'Achieved a global rank of 818 in CSS Battles, showcasing strong CSS skills and problem-solving abilities in front-end web development',
    date: '2024',
  },
  {
    id: 5,
    title: 'Coding Contest',
    description: 'Recognized for outstanding proficiency in Frontend coding by winning a competitive coding contest conducted by the college',
    date: '2022',
  },
];
