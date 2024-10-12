import ResumeComponent from "@/components/Resume";
import ChatInterface from "./chat/ChatInterface";
import CurrentWork from "../components/IntroTextHeader/CurrentWork";
import HiImNirav from "@/components/HiNirav";
import IntroTextHeader from "../components/IntroTextHeader";

export default function Home() {
  return (
    <>
      {" "}
      <div
        className="relative w-full m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}>
        <IntroTextHeader />
        <div className="p-4">
          <ChatInterface />
        </div>
        <ResumeComponent />
      </div>
    </>
  );
}
