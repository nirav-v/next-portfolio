import Image from 'next/image';
import Link from 'next/link';
import { ProjectType } from '../../types/ProjectType';
import ProjectTag from './ProjectTag';

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}>
        <Image
          priority
          className="w-full rounded-md"
          width={500}
          height={500}
          src={project.img}
          alt={`${project.title} landing page image`}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-lg">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map(tag => {
            return <ProjectTag key={tag.name} tag={tag} />;
          })}
        </ul>
      </div>
    </div>
  );
}
