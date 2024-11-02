"use client";
import ChatInterface from "./chat/ChatInterface";
import IntroTextHeader from "../components/IntroTextHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ResumeComponent from "@/components/ResumeDrawer/Resume";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="animate-slideInLeft h-screen">
        {" "}
        <div className="top-0 w-full h-auto pb-4 ">
          <div className="intro-text text-center xl:text-left xl:w-2/3 pl-12 static top-0">
            {/* text */}
            <div className="pt-20">
              <IntroTextHeader />
            </div>
            {/* btn links */}
            <div className="flex flex-col mt-12 items-center xl:items-start relative z-1">
              <Link
                href={""}
                className="btn btn-outline btn-primary uppercase my-4 w-2/3"
                onClick={() => setDrawerOpen(!drawerOpen)}>
                My Journey
              </Link>
              <Link
                href={"/projects"}
                className="btn btn-outline btn-primary uppercase my-4 w-2/3">
                Projects
              </Link>
            </div>
          </div>

          <div className="shadow">
            <Image
              priority
              unoptimized={true}
              className="xl:absolute top-0 -z-10 animation-none w-full image-mask shadow-inner hidden xl:block"
              src={"/ImNiravHero.png"}
              width={500}
              height={200}
              alt="hero"
            />
          </div>
        </div>
        <div
          className="relative w-full m-auto flex justify-center text-center flex-col items-center z-1"
          style={{ maxWidth: "1200px" }}>
          <ChatInterface />
        </div>
      </div>
      <ResumeComponent drawerOpen={drawerOpen} />
      {/* <ResumeDrawer /> */}
    </>
  );
}
