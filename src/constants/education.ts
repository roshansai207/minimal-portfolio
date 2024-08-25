import { z } from 'zod';

export const educationSchema = z.object({
  id: z.number(),
  college: z.string(),
  branch: z.string(),
  duration: z.string(),
});

export const EDUCATION: z.infer<typeof educationSchema>[] = [
  {
    id: 1,
    college: 'Bangalore Technological Institute, Bangalore',
    branch: "Bachelor's Degree in Electrical and Communication Engineering",
    duration: '2017 - 2021',
  },
];
