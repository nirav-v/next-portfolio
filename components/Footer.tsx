import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    name: "GitHub",
    link: "https://github.com/braydentw",
    icon: "/static/icons/github-f.svg",
    leavesWebsite: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/braydentw/",
    icon: "/static/icons/linkedin-f.svg",
    leavesWebsite: true,
  },
  {
    name: "Email",
    link: "mailto:contact@braydentw.io",
    icon: "/static/icons/mail-f.svg",
    leavesWebsite: true,
  },
];

export default function Footer() {
  return (
    <div className="mt-16 md:border-t-2 border-white flex flex-col items-center">
      <h2 className="relative bottom-4 bg-black px-4 text-xl font-bold">
        {" "}
        Get in touch
      </h2>
      {footerLinks.map((item, index) => {
        return (
          <div key={index} className="my-4">
            {item.leavesWebsite ? (
              <a href={item.link} target="_blank" className="items-center flex">
                {item.icon && (
                  <span className="pr-2 -mb-1">
                    <Image
                      alt={item.name}
                      src={item.icon}
                      width={20}
                      height={20}
                    />
                  </span>
                )}
                {item.name}
              </a>
            ) : (
              <Link href={item.link}>{item.name}</Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
