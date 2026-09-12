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
              className='rounded-full shadow-white shadow-[0px_0px_5px_2px] mx-5'
              priority
              loading='eager'
              src='/headshot.png'
              alt='dev-icon'
              width={150}
              height={150}
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
