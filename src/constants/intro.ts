import { LinkedIn } from '@/components/global/icons';
import { Mail, Phone } from 'lucide-react';

export const INTRO = {
  name: 'Roshan Palamarthi',
  role: "I'm a Software Automation Test Engineer",
  description: 'Passionate programmer, Self-taught Developer, Open Source Contributor',
  location: {
    value: 'Bangalore',
    href: 'https://www.google.com/maps/place/Bengaluru',
    coordinates: [12.9716, 77.5946] as const,
  },
  profilePic: {
    src: 'roshan-profile-pic.jpeg',
    alt: 'roshan-profile-pic',
  },
  socialLinks: [
    {
      icon: LinkedIn,
      label: 'linkedin',
      href: 'https://www.linkedin.com/in/roshan-sai',
    },
  ],

  personalLinks: [
    {
      icon: Mail,
      label: 'gmail',
      href: 'mailto:roshansai207@gmail.com',
      value: 'roshansai207@gmail.com',
    },
    {
      icon: Phone,
      label: 'phone',
      href: 'tel:+918861688207',
      value: '+918861688207',
    },
  ],
};
