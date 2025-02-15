import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes: { title: string; path: string }[] = [
    {
      title: 'About',
      path: '/about',
    },
  ];

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className='mobile-nav relative w-16'>
      {/* Mobile Menu Button */}
      <button className='mobile-nav-icon sm:hidden w-full' onClick={toggleMenu}>
        <Image
          className='m-auto'
          src='/static/icons/mobile-nav-icon-white.svg' // Filler image, replace with actual icon later
          alt='menu icon'
          width={40}
          height={40}
        />
      </button>
      {/* Mobile Dropdown Nav */}
      {isMenuOpen && (
        <div className='mobile-nav-dropdown absolute sm:hidden bg-black flex flex-col items-center w-full py-4 space-y-6 z-50'>
          <ul className='flex flex-col items-center space-y-4 text-white text-xl'>
            {routes.map((item, index) => (
              <li key={index} onClick={toggleMenu}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col items-center space-y-4 text-white text-xl'>
            <li>
              <Link href='https://github.com/nirav-v' target='_blank'>
                <Image
                  src={'/static/logos/github-logo.png'}
                  alt='github'
                  width={75}
                  height={75}
                />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.linkedin.com/in/nirav-venkatesan/'
                target='_blank'>
                <Image
                  src={'/static/logos/linkedin-logo.png'}
                  alt='linkedin'
                  width={30}
                  height={30}
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
