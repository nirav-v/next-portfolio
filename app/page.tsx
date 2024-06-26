import { Caveat } from 'next/font/google';
import ProjectCard from './projects/ProjectCard';
import {
  SiAmazonaws,
  SiChakraui,
  SiExpress,
  SiSequelize,
  SiStripe,
  SiVite,
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import SectionHeader from '@/components/SectionHeader';
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <>
      {' '}
      <div
        className='relative w-full pt-10  m-auto flex justify-center text-center flex-col items-center z-1'
        style={{ maxWidth: '1200px' }}>
        <p className='text-xl my-5'>Hi, I'm Nirav 👋</p>
        <h1 className='heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-2xl lg:text-4xl tracking-tighter mb-5 font-bold heroShinyBg'>
          <span className='heroShiny1 text-rose-600'>
            Full Stack Software Engineer
          </span>{' '}
          {/* and 
          <span className="heroShiny2 text-slate-600">Skateboarder</span>{" "} */}
          based in <span className='text-orange-600'>San Diego, CA</span>
        </h1>
        <ChatInterface />
      </div>
      <div className='flex flex-col text-left justify-between pt-8 relative'>
        <SectionHeader title='My Larger Projects' />
        <ProjectCard
          project={{
            id: 0,
            title: 'Hardpost',
            desc: 'Social e-commerce platform for skateboarders',
            img: '/static/projects/hp.png',
            link: 'https://hardpost-f79ecee5b44d.herokuapp.com/',
            github: 'https://github.com/nirav-v/hardpost',
            tags: [
              { name: 'React', icon: <SiVite /> },
              { name: 'Node.js', icon: <FaNodeJs /> },
              { name: 'Express', icon: <SiExpress /> },
              { name: 'MySQL', icon: <GrMysql /> },
              { name: 'AWS', icon: <SiAmazonaws /> },
              { name: 'Sequelize', icon: <SiSequelize /> },
              { name: 'Stripe', icon: <SiStripe /> },
              { name: 'Chakra UI', icon: <SiChakraui /> },
            ],
          }}
        />
      </div>
    </>
  );
}
