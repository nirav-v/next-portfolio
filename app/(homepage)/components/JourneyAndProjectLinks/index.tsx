import React from 'react';
import ButtonLink from '../../../../components/buttons/ButtonLink';

type Props = {
  journeyOpen: boolean;
  setJourneyOpen: (open: boolean) => void;
  projectsOpen: boolean;
  setProjectsOpen: (open: boolean) => void;
};

function JourneyAndProjectLinks({
  journeyOpen,
  setJourneyOpen,
  projectsOpen,
  setProjectsOpen,
}: Props) {
  return (
    <div className='flex flex-col items-center xl:items-start relative z-1'>
      <ButtonLink
        label='My Journey'
        onClick={() => setJourneyOpen(!journeyOpen)}
      />
      {/* <ButtonLink
        label='My Projects'
        onClick={() => setProjectsOpen(!projectsOpen)}
      /> */}
    </div>
  );
}

export default JourneyAndProjectLinks;
