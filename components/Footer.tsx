import { SiGithub, SiLinkedin, SiSubstack, SiYoutube } from "react-icons/si";
import SectionHeader from "./SectionHeader";

const footerLinks = [
  {
    name: "GitHub",
    link: "https://github.com/nirav-v",
    Icon: SiGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nirav-venkatesan/",
    Icon: SiLinkedin,
  },
  {
    name: "Substack",
    link: "https://substack.com/@dunesalamander",
    Icon: SiSubstack,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@nirav_v",
    Icon: SiYoutube,
  },
];

export default function Footer() {
  return (
    <div className="p-8 border-white flex flex-col items-center relative z-0">
      <div className="my-4 flex flex-row flex-wrap justify-center gap-8">
        {footerLinks.map((item) => {
          return (
            <div key={item.name}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="items-center flex "
              >
                <span className="pr-2 text-icon-muted" aria-hidden="true">
                  <item.Icon size={20} />
                </span>
                <p className="hover:opacity-75">{item.name}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
