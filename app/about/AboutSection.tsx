'use client';
import AboutMd from './markdown/about.mdx';

export default function AboutSection() {
  return (
    <div className='p-8 m-auto md:w-10/12 flex flex-col items-center'>
      <h1 className='font-bold text-2xl p-4 text-slate-100'>About Me</h1>

      <AboutMd />
    </div>
  );
}
