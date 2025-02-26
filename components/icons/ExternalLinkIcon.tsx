import Image from 'next/image';
import React from 'react';

type Props = { width?: number; height?: number; href?: string };

function ExternalLinkIcon({ width, height, href }: Props) {
  return (
    <a
      className='flex justify-end'
      href={href}
      target='_blank'
      rel='noreferrer'>
      <Image
        src='/static/icons/external-link.svg'
        width={width}
        height={height}
        alt='Link Icon'
      />
    </a>
  );
}

export default ExternalLinkIcon;
