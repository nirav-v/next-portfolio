import React from 'react';

export default function ProjectsHeader() {
  return (
    <>
      <div className="mx-auto p-6 mb-6 max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          My Projects
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          No todo lists or weather apps here. I learn by building things I want
          to use.
        </p>
        <p className="sm:text-lg m-4  text-gray-300">
          I'm currently building a startup, Hardpost, a social e-commerce
          platform for skateboarders .
        </p>
      </div>
    </>
  );
}
