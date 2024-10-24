import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function MobileNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes: { title: string; path: string }[] = [
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div>
      {/* Mobile Menu Button */}
      <button className="sm:hidden" onClick={toggleMenu}>
        <Image
          src="/static/icons/menu.svg" // Filler image, replace with actual icon later
          alt="menu icon"
          width={40}
          height={40}
        />
      </button>
      {/* Mobile Dropdown Nav */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center w-full py-4 space-y-6 z-50">
          <ul className="flex flex-col items-center space-y-4 text-white text-xl">
            {routes.map((item, index) => (
              <li key={index} onClick={toggleMenu}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center space-y-4 text-white text-xl">
            <li>
              <a href="https://github.com/nirav-v" target="__blank">
                <Image
                  src={"/static/logos/github-logo.png"}
                  alt="github"
                  width={75}
                  height={75}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nirav-venkatesan/"
                target="__blank">
                <Image
                  src={"/static/logos/linkedin-logo.png"}
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
