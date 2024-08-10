import { z } from 'zod';

export const experienceSchema = z.object({
  id: z.number(),
  role: z.string(),
  company: z.string(),
  location: z.string(),
  dateRange: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
});

export const EXPERIENCE: z.infer<typeof experienceSchema>[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Slash Mark',
    location: 'Remote',
    dateRange: 'Jan 2024 - Apr 2024',
    description:
      'At Slash Mark, I Delivered two dynamic full stack web apps by leveraging a robust monolithic architecture and end-to-end typesafe utilizing tRPC. Engineered a modern user interface that led to a 20% increase in user experience and a 15% improvement in app performance through react-server components and HTML streaming.',
    technologies: ['Next.js', 'TypeScript'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Nxtjob.ai',
    location: 'Bangalore',
    dateRange: 'Apr 2023 - May 2023',
    description:
      'Nxtjob.ai is an AI based startup that meets mentorship to build you an unrejectable resume and master interviews. During my summer internship, I Developed a resume builder and interview application using WebRTC technology for interview simulations and feedback sessions. Elevated user experience by 30% and improved app performance by 40% through strategic implementation of local device caching and effective caching mechanisms.',
    technologies: ['Next.js', 'Javascript', 'WebRTC', 'Redux', 'Tailwind CSS'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: ' Oasis Infobyte',
    location: 'Remote',
    dateRange: 'Dec 2022 - Jan 2023',
    description:
      'Designed, developed, and deployed three dynamic, responsive, and fully-functional web apps using React.js, demonstrating expertise in the latest web development technologies.',
    technologies: ['React.js', 'Javascript', 'CSS'],
  },
  {
    id: 4,
    role: 'MERN Stack Developer',
    company: ' Klazigo',
    location: 'Tirupati',
    dateRange: 'May 2022 - Aug 2022',
    description:
      'At Klazigo, I Implemented and built a scalable, robust, and efficient MERN stack web app from scratch at Klazigo within a 3-month timeframe. Led a talented cross-functional team of three members to develop the app, incorporating JWT authentication and authorization.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
];
