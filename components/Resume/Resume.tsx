'use client';
import React from 'react';
import Markdown from 'react-markdown';

const workExperiences = [
  {
    title: 'Full Stack Developer @Symphony Partners',
    date: 'May 2024 - Present',
    location: 'San Diego, CA',
    points: [
      'Rebuilt the Symphony Partners website using Next.js and TypeScript, enhancing UI, improving DevEx, and optimizing performance with modern React and server components.',
      `Developed an AI-powered chatbot for Rentius.ai using OpenAI’s API and the MERN stack—employing advanced techniques such as function calling, structured outputs, and response streaming to automate legal notice autofill, integrate with proprietary APIs, and manage database synchronization with AWS S3 and MongoDB.`,
      'Designed and customized Shopify themes, creating responsive pages aligned with performance metrics and implementing business logic to support client-specific IT needs.',
    ],
    dotColor: 'bg-white', // default dot color
  },
  {
    title: 'Software Engineer @SeekEats',
    employmentType: 'Internship',
    date: 'October 2023 - May 2024',
    location: 'San Diego, CA',
    points: [
      'Executed design and business logic for features including integration of an AI chatbot into a Next.js and Flask web application, and location-based search within a React Native app.',
      'Orchestrated efficient pull request management and conducted meticulous code reviews, showcasing expertise in enterprise-level software development.',
    ],
    dotColor: 'bg-white', // default dot color
  },
  {
    title: 'Web Development Instructional Specialist @2U, ',
    employmentType: 'Contract',
    date: 'December 2022 - March 2024',
    location: 'San Diego, CA',
    points: [
      'Mentored students in web development, offering personalized guidance on HTML, CSS, JavaScript, Node.js, React, SQL, NoSQL, Git, and DevOps.',
      'Promoted best practices, including version control with Git, test-driven development, and Agile methodologies, enabling students to design and deploy scalable applications.',
    ],
    dotColor: 'bg-white', // default dot color
  },
];

const Resume = () => {
  return (
    <div className=''>
      {workExperiences.map((experience, index) => (
        <div key={index} className='relative w-full  group transition-all '>
          {/* vertical line left */}
          {/* <div className="absolute top-0 left-0 transform -translate-x-1/2 w-px h-full bg-gray-400 transition-all group-hover:bg-orange-500 "></div> */}
          {/* circle  */}
          {/* <div
            className={`absolute -top-3 -left-2 transform group-hover:-translate-x-1/2 w-6 h-6 rounded-full bg-black z-20 border-4 transition-all`}></div> */}
          {/* Content */}
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
