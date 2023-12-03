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
    img: "/static/projects/hp.png",
    link: "https://hardpost-f79ecee5b44d.herokuapp.com/",
    github: "https://github.com/nirav-v/hardpost",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "AWS",
      "Sequelize",
      "Stripe",
      "Chakra UI",
    ],
  },
  {
    id: 1,
    title: "Restroom Router",
    desc: "Yelp for public restrooms",
    img: "/static/projects/rr.png",
    link: "https://restroom--router.herokuapp.com/restroomsNearYou",
    github: "https://github.com/nirav-v/restroom-router",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "CSS",
      "Javascript",
      "MapBox",
    ],
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
