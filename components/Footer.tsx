import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';

const footerLinks = [
  {
    name: 'GitHub',
    link: 'https://github.com/nirav-v',
    icon: '/static/icons/github-f.svg',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nirav-venkatesan/',
    icon: '/static/icons/linkedin-f.svg',
  },
];

export default function Footer() {
  return (
    <div className='mt-16 md:border-t-2 border-white flex flex-col items-center'>
      <SectionHeader title='Link Up!' />
      {footerLinks.map((item, index) => {
        return (
          <div key={index} className='my-4'>
            <a href={item.link} target='_blank' className='items-center flex '>
              {item.icon && (
                <span className='pr-2 -mb-1'>
                  <Image
                    alt={item.name}
                    src={item.icon}
                    width={20}
                    height={20}
                  />
                </span>
              )}
              <p className='hover:opacity-75'>{item.name}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}
