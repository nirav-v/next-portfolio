'use client';
import React from 'react';
import Markdown from 'react-markdown';
import { workExperiences } from './data';

const Resume = () => {
  return (
    <div className=''>
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
