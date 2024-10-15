import ResumeComponent from "@/components/Resume";
import ChatInterface from "./chat/ChatInterface";
import IntroTextHeader from "../components/IntroTextHeader";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="animate-slideInLeft">
      {" "}
      <div className="top-0 relative z-0 w-full h-auto pb-4 ">
        <div className="intro-text text-center md:text-left md:w-2/3 pl-12 static md:absolute top-0">
          {/* text */}
          <div className="pt-12">
            <IntroTextHeader />
          </div>
          {/* btn links */}
          <div className="flex flex-col mt-12 md:items-start ">
            <Link
              href={"#resume"}
              className="btn btn-outline btn-primary uppercase my-4 md:w-2/3">
              My Journey
            </Link>

            <Link
              href={"/projects"}
              className="btn btn-outline btn-primary uppercase my-4 md:w-2/3">
              Projects
            </Link>
          </div>
        </div>
        <div className="shadow">
          <Image
            priority
            unoptimized={true}
            className="animation-none w-full image-mask shadow-inner"
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
        <div className="p-4">
          <ChatInterface />
        </div>
        <div>
          <h2 className="m-auto text-2xl p-4">My Journey</h2>
          <ResumeComponent />
        </div>
      </div>
    </div>
  );
}
