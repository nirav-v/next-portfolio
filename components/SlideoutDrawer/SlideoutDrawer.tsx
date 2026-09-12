'use client';
import './slideout-drawer.css';
import React, { Dispatch, SetStateAction, useEffect } from 'react';

function SlideoutDrawer({
  drawerOpen,
  setDrawerOpen,
  children,
}: {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  useEffect(() => {
    // lock scroll on rest of body when drawer open
    // if (drawerOpen) {
    //   document.body.style.overflow = 'hidden';
    // } else {
    //   document.body.style.overflow = '';
    // }

    // event listener to close drawer when click outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;

      // Prevent Errors, Check if the target is actually an HTMLElement before accessing classList
      if (target && target instanceof HTMLElement && target.classList) {
        // Check if the click is outside the drawer
        if (!target.closest('.slideout-drawer') && drawerOpen) {
          setDrawerOpen(false); // Close the drawer if clicked outside
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [drawerOpen, setDrawerOpen]);

  return (
    <div
      id='slideout-drawer'
      className={`slideout-drawer ${
        drawerOpen ? 'open' : 'closed'
      } fixed right-0 top-0 z-50 flex h-screen w-full flex-col items-center overflow-x-hidden overflow-y-auto bg-black text-white lg:w-1/2`}>
      <div className='sticky top-0 z-10 flex w-full shrink-0 justify-end bg-black px-6 pb-2 pt-6'>
        <button
          className='btn btn-square btn-outline m-2'
          type='button'
          aria-label='Close drawer'
          onClick={() => setDrawerOpen(false)}>
          <svg
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div className='w-full px-6 pb-6'>{children}</div>
    </div>
  );
}

export default SlideoutDrawer;
