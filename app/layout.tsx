import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nirav',
  description: 'Full Stack Developer Nirav Venkatesan',
};

import Nav from '@/components/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        <main className='w-full text-center'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
