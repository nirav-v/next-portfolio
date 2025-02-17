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
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // event listener to close drawer when click outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;

      // Prevent Errors, Check if the target is actually an HTMLElement before accessing classList
      if (target && target instanceof HTMLElement && target.classList) {
        console.log(target.classList);

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
      } fixed h-screen top-0 right-0 bg-black w-full lg:w-1/2 flex flex-col items-center  text-white p-6 z-50 overflow-scroll`}>
      <div className='w-full flex justify-end items-start'>
        <button
          className='btn btn-square btn-outline m-2'
          onClick={() => setDrawerOpen(!drawerOpen)}>
          <svg
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
      {children}
    </div>
  );
}

export default SlideoutDrawer;
