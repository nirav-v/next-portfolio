// import { kebabCase } from "@/utils/utils";
import ProjectCard from "./ProjectCard";

type ProjectType = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

const projectsList: ProjectType[] = [
  {
    id: 0,
    title: "Hardpost",
    desc: "Social e-commerce platform for skateboarders",
    img: "/static/projects/hardpost.png",
    link: "https://learn.theyei.org/",
    github: "https://github.com/braydentw/learn.theyei",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
  },
  {
    id: 1,
    title: "BuildFaster",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/projects/buildfaster.png",
    link: "https://buildfaster.co/",
    tags: ["HTML", "CSS", "Javascript", "Gumroad"],
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}
