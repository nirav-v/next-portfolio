'use client';
import React from 'react';
import Markdown from 'react-markdown';
import { workExperiences } from './data';

const Resume = () => {
  return (
    <div className='w-full'>
      <section className='border-b border-white/20 px-8 pb-8 pt-2'>
        <div className='flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center'>
          <div className='text-left'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-white/60'>
              My résumé
            </p>
            <p className='mt-2 text-sm text-white/70'>
              Prefer the pdf? Download a copy to read or share offline.
            </p>
          </div>
          <a
            href='/NiravVenkatesan_Resume.pdf'
            download='Nirav-Venkatesan-Resume.pdf'
            className='btn btn-primary whitespace-nowrap'
            aria-label='Download Nirav Venkatesan résumé as a PDF'>
            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='h-5 w-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 3v12m0 0 5-5m-5 5-5-5M5 21h14'
              />
            </svg>
            Download PDF
          </a>
        </div>
      </section>
      {workExperiences.map((experience, index) => (
        <div key={index} className='relative w-full  group transition-all '>
          <div className=' group-hover:text-white relative flex flex-col items-start p-8 pl-12 transition-all transform g group-hover:shadow-lg '>
            <div className='title-date text-left'>
              <h3 className='text-lg font-bold'>{experience.title}</h3>
              <p className='text-sm italic'>
                {experience.employmentType || null}
              </p>
              <p className='text-sm italic'>
                {experience.date} | {experience.location}
              </p>
            </div>
            <ul className='mt-3 text-left text-sm list-disc'>
              {experience.points.map((point, idx) => (
                <li className='py-2' key={idx}>
                  <Markdown className={'prose text-white'}>{point}</Markdown>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resume;
