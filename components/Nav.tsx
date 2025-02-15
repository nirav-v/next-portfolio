'use client';
import React, { useState, useEffect } from 'react';
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

  // for mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {' '}
      {/* need to add a mobile navbar to show on sm screens */}
      <div className='top-0 p-5 bg-black z-30 bg-gradient-to-b '>
        <nav className='flex items-center justify-between m-auto xl:w-[90%] py-6 lg:py-1'>
          <Link href={'/'}>
            <Image
              className='rounded-full shadow-white shadow-[0px_0px_5px_2px] absolute top-4 z-10'
              priority
              loading='eager'
              src='/headshot.png'
              alt='dev-icon'
              width={150}
              height={150}
            />
          </Link>
          <MobileNav />

          <ul className='hidden sm:flex items-center space-x-10 ml-auto'>
            {routes.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`list-none text-white text-2xl ${
                    pathname === item.path
                      ? 'opacity-100 font-bold'
                      : 'opacity-95 hover:opacity-100 transition-opacity'
                  }`}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <ul className='hidden sm:flex items-center space-x-10 mx-10'>
            <li>
              <a href='https://github.com/nirav-v' target='__blank'>
                <Image
                  src={'/static/logos/github-logo.png'}
                  alt='github'
                  width={75}
                  height={75}
                />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/nirav-venkatesan/'
                target='__blank'>
                <Image
                  src={'/static/logos/linkedin-logo.png'}
                  alt='linkedin'
                  width={30}
                  height={30}
                />
              </a>
            </li>
          </ul>
        </nav>{' '}
      </div>
    </>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      className='h-5 w-5 absolute text-gray-100'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}>
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function CrossIcon(props: any) {
  return (
    <svg
      className='h-5 w-5 absolute text-gray-100'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}>
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  );
}
