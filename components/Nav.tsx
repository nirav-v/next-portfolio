"use client";
import React, { useState, useEffect } from "react";
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
export default function Nav() {
  const [activeTab, setActiveTab] = useState("Home");
  // for mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* need to add a mobile navbar to show on sm screens */}
      <div className="block z-100">
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
        </nav>{" "}
      </div>
      {/* <div className="-m-5 block sm:hidden z-100">
        <nav>
          <div
            className={`w-full justify-between flex items-center ${"bg-bg"} p-5`}
            style={{ zIndex: 101 }}>
            <li className="list-none font-bold text-lg">
              <Link href="/">
                <img
                  className="mr-3"
                  src="/static/logos/logo_full.svg"
                  width="160"
                />
              </Link>
            </li>
            <button
              className="burger visible md:hidden"
              aria-label="Toggle menu"
              type="button"
              onClick={toggleMenu}>
              <MenuIcon data-hide={isMenuOpen} />
              <CrossIcon data-hide={!isMenuOpen} />
            </button>
          </div>
          {
            <ul
              className={`menu flex flex-col absolute bg-bg
            ${"menuRendered"}`}>
              {routes.map((item, index) => {
                return (
                  <li
                    className="border-b border-gray-900 text-gray-100 text-sm font-semibold"
                    style={{ transitionDelay: `${150 + index * 25}ms` }}>
                    <Link className="flex w-auto pb-4" href={item.path}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          }
        </nav>
      </div> */}
    </>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: any) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
