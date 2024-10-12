import ResumeComponent from "@/components/Resume";
import ChatInterface from "./chat/ChatInterface";
import IntroTextHeader from "../components/IntroTextHeader";

export default function Home() {
  return (
    <>
      {" "}
      <div
        className="animate-slideInLeft relative w-full m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}>
        <IntroTextHeader />
        <div className="p-4">
          <ChatInterface />
        </div>
        <h2 className="m-auto text-2xl p-4">My Journey</h2>
        <ResumeComponent />
      </div>
    </>
  );
}
