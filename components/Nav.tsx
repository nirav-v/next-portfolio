"use client";
import React, { useState } from "react";
import Link from "next/link";

const routes: {
  title: string;
  path: string;
}[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "About",
    path: "/about",
  },
];
function Nav() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer"></li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setActiveTab(item.title)}
              className={`list-none text-white ${
                activeTab === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
