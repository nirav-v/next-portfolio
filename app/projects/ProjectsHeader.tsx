import React from "react";

export default function ProjectsHeader() {
  return (
    <div className="md:w-10/12 py-12 sm:py-20 m-auto">
      {/* // projects header */}
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
        Projects
      </h1>
      <p className="pb-3 sm:text-lg m-auto">
        No todo lists or weather apps here. I improve by building things I want
        to use.
      </p>
      <p className="sm:text-lg m-auto">
        I'm currently working on my most extensive project, Hardpost, a social
        e-commerce platform for skateboarders .
      </p>
    </div>
  );
}
