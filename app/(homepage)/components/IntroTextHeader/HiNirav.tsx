import { Space_Grotesk } from "next/font/google";

const nameFont = Space_Grotesk({
  subsets: ["latin"],
  weight: "600",
});

function HiImNirav() {
  return (
    <p className="text-xl font-medium tracking-tight lg:text-2xl">
      {"Hi! I'm "}
      <span
        className={`${nameFont.className} inline-block bg-gradient-to-r from-pink-500 via-fuchsia-400 to-violet-400 bg-clip-text font-semibold tracking-tight text-transparent`}
      >
        Nirav
      </span>
      <span className="inline-block animate-wave px-2">👋🏽 </span>
    </p>
  );
}

export default HiImNirav;
