import { Caveat } from 'next/font/google';
import React from 'react';

const caveat = Caveat({
  subsets: ['latin'],
});
export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className='md:border-t-2 border-white w-full pt-5'>
      <h2
        className={
          caveat.className +
          ' relative bottom-10 bg-black px-5 max-w-sm md:max-w-max mx-auto text-center md:text-left text-3xl font-bold mb-10 pt-4 md:pt-0 md:w-max '
        }>
        {title}{' '}
      </h2>
    </div>
  );
}
