import ResumeComponent from "@/components/Resume";
import ChatInterface from "./chat/ChatInterface";
import CurrentWork from "./CurrentWork";
import IntroHeader from "@/components/IntroHeader";

export default function Home() {
  return (
    <>
      {" "}
      <div
        className="relative w-full pt-10  m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}>
        <div className="w-full py-5 p-2 animate-slideInLeft">
          <IntroHeader />
        </div>
        <div
          // style={{ animationDelay: "1s" }}
          className="p-4 opacity-0 animate-slideInLeft">
          <h1 className=" heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-2xl lg:text-4xl tracking-tighter mb-5 font-bold heroShinyBg">
            <span className="block md:inline heroShiny1 text-rose-600">
              Full Stack Software Engineer
            </span>{" "}
            {/* and 
          <span className="heroShiny2 text-slate-600">Skateboarder</span>{" "} */}
            based in{" "}
            <span className="block md:inline text-orange-600">
              San Diego, CA
            </span>
          </h1>
        </div>
        <div
          // style={{ animationDelay: "2s" }}
          className="p-4 opacity-0 animate-slideInLeft ">
          <CurrentWork />
        </div>
        <div className="p-4">
          <ChatInterface />
        </div>
        <ResumeComponent />
      </div>
    </>
  );
}
