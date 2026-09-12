'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MobileNav from './MobileNav';

const routes: {
  title: string;
  path: string;
}[] = [
  {
    title: 'About',
    path: '/about',
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {' '}
      {/* need to add a mobile navbar to show on sm screens */}
      <div className='top-0 pt-5 bg-black z-30 bg-gradient-to-b '>
        <nav className='flex items-center justify-between m-auto xl:w-[90%] py-6 lg:py-1'>
          <Link href={'/'}>
            <Image
              className='mx-5 rounded-full object-cover shadow-[0_0_12px] shadow-violet-300'
              priority
              loading='eager'
              src='/headshot.png'
              alt='Portrait of Nirav Venkatesan'
              width={128}
              height={128}
            />
          </Link>
          <MobileNav />
          <ul className='hidden sm:flex items-center space-x-10 mx-10'>
            {routes.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`list-none text-white text-2xl rounded px-1 hover:font-bold transition-font duration-300 ${
                    pathname === item.path
                      ? 'opacity-100 font-bold'
                      : 'opacity-95 hover:opacity-100'
                  }`}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>{' '}
      </div>
    </>
  );
}
