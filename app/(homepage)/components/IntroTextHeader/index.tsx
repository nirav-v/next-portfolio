import React from "react";
import CurrentWork from "./CurrentWork";
import HiImNirav from "./HiNirav";

function IntroTextHeader() {
  return (
    <div className='intro-text-header'>
      <div className='my-auto w-full py-5 animate-slideInLeft'>
        <HiImNirav />
      </div>
      <div
        // style={{ animationDelay: "1s" }}
        className='opacity-0 animate-slideInLeft'>
        <h1 className='heroTitle relative mb-5 inline-block w-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl'>
          <span className='block'>
            Full Stack Software Engineer
          </span>
          <span className='mt-2 block text-lg font-medium tracking-normal text-white/65 sm:text-xl lg:text-2xl'>
            Based in San Francisco, CA
          </span>
        </h1>
      </div>
    </div>
  );
}

export default IntroTextHeader;
