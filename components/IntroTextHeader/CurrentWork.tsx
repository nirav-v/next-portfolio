import Link from 'next/link';
import React from 'react';

function CurrentWork(props: any) {
  return (
    <>
      <p className='text-xl lg:text-4xl tracking-tighter mb-5 font-bold'>
        Currently I'm at{' '}
        <Link
          href={'https://www.symphonypartners.ca/'}
          target='__blank'
          className='whitespace-nowrap transition-colors duration-500'>
          Symphony Partners
        </Link>{' '}
        developing{' '}
        <Link
          href={'https://www.rentius.ai/'}
          target='__blank'
          className='block md:inline text-sky-500 hover:text-sky-300 hover:underline transition-colors duration-500'>
          Rentius.ai{' '}
        </Link>
        and the{' '}
        <Link
          href={'https://www.symphonypartners.ca/'}
          target='__blank'
          className='whitespace-nowrap text-sky-500  hover:text-sky-300 hover:underline transition-colors duration-500'>
          company website
        </Link>
      </p>
    </>
  );
}

export default CurrentWork;
