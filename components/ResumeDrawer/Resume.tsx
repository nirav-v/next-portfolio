"use client";
import "./resume-drawer.css";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const workExperiences = [
  {
    title: "Full Stack Developer @Symphony Partners",
    date: "May 2024 - Present",
    location: "San Diego, CA",
    points: [
      "Core developer on Rentius.ai, an online renters' portal built on the MERN stack. Spearheading technical implementation of complex business logic for all landlord-tenant interactions.",
      "Developed the new Symphony Partners' website using Next.js and TypeScript, streamlining UI, improving DevEx, and enhancing performance with modern React and server components.",
      "Developed Shopify themes for multiple clients, creating custom pages from scratch while boosting Google page-speed scores and customer conversion rates.",
      "Honed expertise in meticulously crafting responsive pages aligned with Figma wireframes.",
    ],
    dotColor: "bg-white", // default dot color
  },
  {
    title: "Software Engineer @SeekEats",
    date: "October 2023 - May 2024",
    location: "San Diego, CA",
    points: [
      "Executed design and business logic for features including integration of an AI chatbot into a Next.js and Flask web application, and location-based search within a React Native app.",
      "Orchestrated efficient pull request management and conducted meticulous code reviews, showcasing expertise in enterprise-level software development.",
    ],
    dotColor: "bg-white", // default dot color
  },
  {
    title: "Web Development Instructional Specialist @2U",
    date: "December 2022 - March 2024",
    location: "San Diego, CA",
    points: [
      "Provide personalized guidance to students, offering one-on-one assistance facilitating comprehension of HTML, CSS, JavaScript, Node.js, React, SQL, NoSQL, Git, and Devops.",
      "Promote best practices of Git version control, test-driven development, and Agile methodologies to help design and deploy scalable apps.",
    ],
    dotColor: "bg-white", // default dot color
  },
];

// const ResumeDrawer = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <>
//       <Link
//         href={""}
//         className="btn btn-outline btn-primary uppercase my-4 w-2/3"
//         onClick={() => setDrawerOpen(!drawerOpen)}>
//         My Journey
//       </Link>
//       {drawerOpen ? <ResumeComponent /> : null}
//     </>
//   );
// };

const ResumeComponent = ({
  drawerOpen,
  setDrawerOpen,
}: {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // close drawer when click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;

      // Prevent Errors, Check if the target is actually an HTMLElement before accessing classList
      if (target && target instanceof HTMLElement && target.classList) {
        console.log(target.classList);

        // Check if the click is outside the drawer
        if (!target.closest(".resume-drawer") && drawerOpen) {
          setDrawerOpen(false); // Close the drawer if clicked outside
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [drawerOpen, setDrawerOpen]);

  return (
    <>
      {/* close btn */}

      <div
        id="resume"
        className={`resume-drawer ${
          drawerOpen ? "open" : "closed"
        } fixed lg:h-screen top-0 right-0 bg-black w-full lg:w-1/2 flex flex-col items-center justify-center text-white p-6 z-50`}>
        <div className="w-full flex justify-end">
          <button
            className="btn btn-square btn-outline m-2"
            onClick={() => setDrawerOpen(!drawerOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {workExperiences.map((experience, index) => (
          <div key={index} className="relative w-full  group transition-all">
            {/* vertical line left */}
            {/* <div className="absolute top-0 left-0 transform -translate-x-1/2 w-px h-full bg-gray-400 transition-all group-hover:bg-orange-500 "></div> */}
            {/* circle  */}
            <div
              className={`absolute -top-3 -left-2 transform group-hover:-translate-x-1/2 w-6 h-6 rounded-full bg-black z-20 border-4 transition-all`}></div>
            {/* Content */}
            <div className=" group-hover:text-white relative flex flex-col items-start p-8 pl-12 border-y-2 border-x-4 transition-all transform g group-hover:shadow-lg group-hover:-translate-x-5">
              <div className="title-date text-left">
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <p className="text-sm italic">
                  {experience.date} | {experience.location}
                </p>
              </div>
              <ul className="mt-3 text-left text-sm list-disc">
                {experience.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResumeComponent;
