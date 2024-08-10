import { z } from 'zod';

export const projectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  url: z.string().optional(),
});

export const PROJECTS: z.infer<typeof projectSchema>[] = [
  {
    id: 1,
    name: 'Pixel Share',
    description: 'A WebSocket based file sharing application that ebable users to share files with each other in real-time.',
    stack: ['Typescript', 'Next.js', 'Socket.io', 'Tailwind CSS', 'Redux', 'Monorepo'],
    url: 'https://github.com/imopbuilder/pixel-file',
  },
  {
    id: 2,
    name: 'Code Compiler',
    description: 'Web based multi-language code compiler that facilitate users to compile their code in various programming languages.',
    stack: ['Typescript', 'Next.js', 'Shadcn UI', 'Zod', 'Zustand'],
    url: 'https://github.com/imopbuilder/compile-code',
  },
  {
    id: 3,
    name: 'College Result',
    description:
      "A College Result web app allowing users to view students' college results, including grades, marks, and other relevant information.",
    stack: ['Typescript', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'tRPC', 'Drizzle ORM'],
    url: 'https://github.com/rahu1gg/college-result-trpc',
  },
  {
    id: 4,
    name: 'SVUCE EEE',
    description:
      'Official website of the SVUCE EEE, a student-run organization that aims to provide a platform for students to learn, grow, and explore the world of engineering and technology.',
    stack: ['Typescript', 'Next.js', 'Shadcn UI', 'Tailwind CSS', 'CSS'],
    url: 'https://github.com/rahu1gg/svuce-eee',
  },
  {
    id: 5,
    name: 'Eblaze',
    description: 'Event management platform conducted by students for Department of Electrical and Electronics Engineering, Tirupati.',
    stack: ['Typescript', 'Next.js', 'PostgreSQL', 'tRPC', 'Tailwind CSS', 'Drizzle ORM', 'React-email', 'Framer Motion'],
    url: 'https://github.com/imopbuilder/eblaze-efficient',
  },
  {
    id: 6,
    name: 'WebRTC Playground',
    description: 'A web application enabling users to test their WebRTC capabilities and learn how to use WebRTC in their projects.',
    stack: ['Typescript', 'Next.js', 'Tailwind CSS', 'Redux', 'WebRTC'],
    url: 'https://github.com/imopbuilder/playground-webrtc',
  },
  {
    id: 7,
    name: 'Op Blog',
    description: 'A web-based blogging app that empower users to create and publish blog posts using Markdown.',
    stack: ['Typescript', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'Contentlayer', 'Mdx', 'Markdown'],
    url: 'https://github.com/imopbuilder/op-blog',
  },
  {
    id: 8,
    name: 'Attendance App',
    description: 'A web app that allows users to manage their attendance for various classes and events.',
    stack: ['Typescript', 'Next.js', 'Tailwind CSS', 'Zustand', 'PostgreSQL', 'tRPC', 'React Query'],
    url: 'https://github.com/imopbuilder/attendance-app',
  },
  {
    id: 9,
    name: 'Faculty Portfolio',
    description: 'A Department faculty portfolio web application that allows faculty to showcase their work and achievements using Markdown and MDX.',
    stack: ['Typescript', 'Next.js', 'Tailwind CSS', 'ContentLayer', 'Markdown', 'Mdx'],
    url: 'https://github.com/rahu1gg/svuce-eee-faculty-portfolio',
  },
  {
    id: 10,
    name: 'Suduko Solver',
    description: 'Sudoku puzzle solver web application that allows users to solve Sudoku puzzles using a graphical user interface.',
    stack: ['Typescript', 'Next.js', 'Tailwind CSS', 'Back tracking', 'Shadcn UI'],
    url: 'https://github.com/rahu1gg/suduko-solver',
  },
];
