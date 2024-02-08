import React from 'react';

type TagType = { name: string; icon: React.JSX.Element };

export default function ProjectTag({ tag }: { tag: TagType }) {
  return (
    <li key={tag.name}>
      <div className=" flex m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer">
        {tag.name}
        <span className="p-1">{tag.icon}</span>
      </div>
    </li>
  );
}
