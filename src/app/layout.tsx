import { ABOUT } from '@/constants/about';
import { INTRO } from '@/constants/intro';
import '@/styles/main.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${INTRO.name} | ${INTRO.description}`,
  description: `${ABOUT}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
