import { LinkedIn } from '@/components/global/icons';
import { Mail, Phone } from 'lucide-react';

export const INTRO = {
  name: 'Roshan Palamarthi',
  role: "I'm a software engineer,",
  description: 'Passionate programmer, Self-taught Developer, Open Source Contributor',
  location: {
    value: 'Bangalore',
    href: 'https://www.google.com/maps/place/Chirala',
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
      href: 'https://www.linkedin.com/in/rahul-palamarthi',
    },
  ],

  personalLinks: [
    {
      icon: Mail,
      label: 'gmail',
      href: 'mailto:rahulpalamarthi@gmail.com',
      value: 'rahulpalamarthi@gmail.com',
    },
    {
      icon: Phone,
      label: 'phone',
      href: 'tel:+919515989271',
      value: '+919515989271',
    },
  ],
};
