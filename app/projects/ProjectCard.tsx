import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "../../types/ProjectType";
import ProjectTag from "./ProjectTag";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="mx-auto flex flex-col projects-center md:projects-start md:justify-center">
      {/* <a
        href={project.link || project.github}
        target="_blank"
        className={` m-auto relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}>
        {" "}
      </a> */}
      <div className="parent-container relative group">
        <Image
          priority
          className="m-auto relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 group-hover:opacity-25 group-hover:border-fun-pink will-change-projectCard  w-full h-full object-cover"
          width={500}
          height={500}
          src={project.img}
          alt={`${project.title} landing page image`}
        />

        <div className="absolute top-10 hidden group-hover:block w-full mt-5 ">
          <div className="flex justify-between items-center w-1/4 m-auto">
            <a href={project.link || project.github} target="_blank">
              <h3 className="text-lg font-bold">{project.title}</h3>
            </a>
            {/* <div className="flex justify-between items-center mx-2 px-8"> */}
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
            {/* </div> */}
          </div>
          <p className="text-center text-fun-gray text-lg">{project.desc}</p>
          <ul className="flex flex-wrap justify-center items-center p-8 mt-2 -ml-2 list-none">
            {project.tags.map(tag => {
              return <ProjectTag key={tag.name} tag={tag} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
