'use client';
import ChatInterface from '../chat/ChatInterface';
import IntroTextHeader from './components/IntroTextHeader';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Resume from '@/components/Resume/Resume';
import ButtonLink from '../../components/buttons/ButtonLink';
import SlideoutDrawer from '../../components/SlideoutDrawer/SlideoutDrawer';
import Projects from '../projects/ProjectList';
import JourneyAndProjectLinks from './components/JourneyAndProjectLinks';

export default function Home() {
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <>
      <div className='animate-slideInLeft min-h-screen'>
        {' '}
        <div className='pt-5 w-full h-auto pb-4 '>
          <div className='intro-text text-center xl:text-left xl:w-2/3 xl:pl-12 static top-0'>
            {/* text */}

            <IntroTextHeader />

            {/* btn links */}
            <JourneyAndProjectLinks
              journeyOpen={journeyOpen}
              setJourneyOpen={setJourneyOpen}
              projectsOpen={projectsOpen}
              setProjectsOpen={setProjectsOpen}
            />
          </div>

          <div className='shadow'>
            <Image
              priority
              unoptimized={true}
              className='xl:absolute top-0 -z-10 animation-none w-full image-mask shadow-inner hidden xl:block'
              src={'/ImNiravHero.png'}
              width={500}
              height={200}
              alt='hero'
            />
          </div>
        </div>
        <div
          className='relative w-full m-auto flex justify-center text-center flex-col items-center z-1'
          style={{ maxWidth: '1200px' }}>
          <ChatInterface />
        </div>
      </div>
      <SlideoutDrawer drawerOpen={journeyOpen} setDrawerOpen={setJourneyOpen}>
        <Resume />
      </SlideoutDrawer>

      <SlideoutDrawer drawerOpen={projectsOpen} setDrawerOpen={setProjectsOpen}>
        <Projects />
      </SlideoutDrawer>
    </>
  );
}
