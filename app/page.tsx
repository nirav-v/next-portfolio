import { ReactNode } from "react";
import ProjectCard from "./projects/ProjectCard";

export default function Home() {
  return (
    <>
      {" "}
      <div
        className="relative heroElem w-full pt-20 md:pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}>
        <p className="text-xl mb-5">Hi, I'm Nirav 👋</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I am a{" "}
          <span className="heroShiny1 text-rose-600">
            Full Stack Software Engineer
          </span>{" "}
          {/* and 
          <span className="heroShiny2 text-slate-600">Skateboarder</span>{" "} */}
          based in <span className="text-orange-600">San Diego, CA</span>
        </h1>
      </div>
      <div className="flex flex-col text-left justify-between pt-8 relative">
        <div className="md:border-t-2 border-white w-full pt-5">
          <h2 className="relative bottom-10 bg-black px-5 max-w-sm md:max-w-max mx-auto text-center md:text-left md:text-3xl sm:text-2xl font-bold mb-10 pt-4 md:pt-0 md:w-max">
            The projects I want you to see
          </h2>
        </div>
        <ProjectCard
          project={{
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
          }}
        />
      </div>
    </>
  );
}
