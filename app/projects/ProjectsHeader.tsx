import React from "react";

export default function ProjectsHeader() {
  return (
    <div className="py-12 sm:py-20 ">
      {/* // projects header */}
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
        Projects
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
        No todo lists or weather apps here. I apply my programming skills by
        building things that I want to use.
        <br />
        I'm currently working on my most extensive project, Hardpost, a social
        e-commerce platform for skateboarders .
      </p>
    </div>
  );
}
