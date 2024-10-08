import React from "react";

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

const ResumeComponent = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white p-6">
      {workExperiences.map((experience, index) => (
        <div key={index} className="relative w-full max-w-3xl group">
          {/* vertical line left */}
          <div className="absolute top-0 left-0 transform -translate-x-1/2 w-px h-full bg-gray-400 transition-all group-hover:bg-orange-500"></div>
          {/* circle  */}
          <div
            className={`absolute -top-3  transform -translate-x-1/2 w-6 h-6 rounded-full bg-black z-20 border-4 border-white transition-all group-hover:border-orange-500 `}></div>

          {/* Content */}
          <div className="content  group-hover:text-orange-500 relative flex flex-col items-start p-8 pl-12 border-l-4transition-transform transform group-hover:scale-105 group-hover:shadow-lg  ">
            <div className="title-date text-left">
              <h3 className="text-lg font-bold">{experience.title}</h3>
              <p className="text-sm italic">
                {experience.date} | {experience.location}
              </p>
            </div>
            <ul className="mt-3 text-left list-disc">
              {experience.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeComponent;
