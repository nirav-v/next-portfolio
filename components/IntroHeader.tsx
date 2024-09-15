import Image from "next/image";
import React from "react";

function IntroHeader() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A6",
    "#57FF33",
    "#5733FF",
  ];
  return (
    <>
      <p className="text-2xl my-5 p-2 rounded-full font-bold ">
        {"Hi, I'm "}
        {Array.from("Nirav").map((char, index) => {
          // Check if the character is a space and preserve it
          if (char === " ") {
            return " ";
          }

          // Assign a color to each letter, cycling through the color array
          const color = colors[index % colors.length];

          return (
            <span
              key={index}
              style={{ color: color }} // Assign unique color
              className="inline-block animate-letter-color">
              {char}
            </span>
          );
        })}
        <span className="px-2 inline-block animate-wave">👋🏽 </span>
      </p>
    </>
  );
}

export default IntroHeader;
