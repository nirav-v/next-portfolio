import { ProjectType } from '@/types/ProjectType';
import ProjectCard from './ProjectCard';
import {
  SiAmazon,
  SiChakraui,
  SiSequelize,
  SiStripe,
  SiVite,
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import CurrentWork from '../../components/IntroTextHeader/CurrentWork';

const projectsList: ProjectType[] = [
  {
    id: 0,
    title: 'Hardpost',
    desc: 'Crowdsourced e-commerce platform for skateboarders',
    img: '/static/projects/new_hardpost.png',
    link: 'https://www.hardpost-shop.com/',
    github: 'https://github.com/nirav-v/hardpost',
    tags: [
      { name: 'React', icon: <SiVite /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MySQL', icon: <GrMysql /> },
      { name: 'AWS', icon: <SiAmazon /> },
      { name: 'Sequelize', icon: <SiSequelize /> },
      { name: 'Stripe', icon: <SiStripe /> },
      { name: 'Chakra UI', icon: <SiChakraui /> },
    ],
  },
  // {
  //   id: 1,
  //   title: 'Restroom Router',
  //   desc: 'Yelp for public restrooms',
  //   img: '/static/projects/rr.png',
  //   link: 'https://restroom--router.herokuapp.com/restroomsNearYou',
  //   github: 'https://github.com/nirav-v/restroom-router',
  //   tags: [
  //     { name: 'React', icon: <SiVite /> },
  //     { name: 'Node.js', icon: <FaNodeJs /> },
  //     { name: 'Express', icon: <SiExpress /> },
  //     { name: 'MongoDB', icon: <SiMongoose /> },
  //     { name: 'GraphQL', icon: <SiApollographql /> },
  //     { name: 'CSS', icon: <SiMui /> },
  //     { name: 'Javascript', icon: <SiJavascript /> },
  //     { name: 'MapBox', icon: <SiMapbox /> },
  //   ],
  // },
];

export default function Projects() {
  return (
    <div className='grid grid-cols-1 gap-8 items-start'>
      <CurrentWork />
      <p className='sm:text-xl'>
        Prior to my current role, I refined my skills through one main project:
        "Hardpost"—an online marketplace for skateboarders.
      </p>
      {projectsList.map(item => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}
