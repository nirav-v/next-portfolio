'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MobileNav from './MobileNav';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

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
          <div className='flex items-center'>
            <ul className='hidden sm:flex items-center space-x-10 ml-auto'>
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
            <ul className='hidden sm:flex items-center space-x-10 mx-10'>
              <li className='rounded'>
                <div className='github-link-container h-14 group'>
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <ExternalLinkIcon
                      width={12}
                      height={12}
                      href='https://github.com/nirav-v'
                    />
                  </div>
                  <a href='https://github.com/nirav-v' target='__blank'>
                    <Image
                      className='group-hover:opacity-55 transition-opacity duration-300'
                      src={'/static/logos/github-logo.png'}
                      alt='github'
                      width={75}
                      height={75}
                    />
                  </a>
                </div>
              </li>
              <li className='rounded transition-colors duration-300'>
                <div className='linkedin-link-container h-14 group'>
                  <div className='mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <ExternalLinkIcon
                      width={12}
                      height={12}
                      href='https://www.linkedin.com/in/nirav-venkatesan/'
                    />
                  </div>
                  <a
                    href='https://www.linkedin.com/in/nirav-venkatesan/'
                    target='__blank'>
                    <Image
                      className='w-[80%] group-hover:opacity-55 transition-opacity duration-300'
                      src={'/static/logos/linkedin-logo.png'}
                      alt='linkedin'
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>{' '}
      </div>
    </>
  );
}
