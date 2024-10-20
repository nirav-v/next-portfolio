import React from "react";
import CurrentWork from "./CurrentWork";
import HiImNirav from "./HiNirav";

function IntroTextHeader() {
  return (
    <>
      <div className="w-full py-5 text-2xl lg:text-4xl animate-slideInLeft">
        <HiImNirav />
      </div>
      <div
        // style={{ animationDelay: "1s" }}
        className="opacity-0 animate-slideInLeft">
        <h1 className=" heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-2xl lg:text-4xl tracking-tighter mb-5 font-bold heroShinyBg">
          <span className="block md:inline heroShiny1 text-nowrap">
            Full Stack Software Engineer
          </span>{" "}
          {/* and 
          <span className="heroShiny2 text-slate-600">Skateboarder</span>{" "} */}
          based in <span className="whitespace-nowrap">San Diego, CA</span>
        </h1>
      </div>
      <div
        // style={{ animationDelay: "2s" }}
        className="opacity-0 animate-slideInLeft ">
        <CurrentWork />
      </div>{" "}
    </>
  );
}

export default IntroTextHeader;
