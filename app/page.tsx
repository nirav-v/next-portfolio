export default function Home({ children }: { children: ReactNode }) {
  return (
    <div>
      {" "}
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}>
        <p className="text-xl mb-5">Hi, I'm Nirav 👋</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I am a{" "}
          <span className="heroShiny1 text-rose-600">
            Full Stack Software Engineer
          </span>{" "}
          {/* and 
          <span className="heroShiny2 text-slate-600">Skateboarder</span>{" "} */}
          based in <span className="text-orange-600">San Diego, CA</span>
        </h1>
      </div>
    </div>
  );
}
