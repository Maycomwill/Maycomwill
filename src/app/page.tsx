import Image from "next/image";
import Photo from "@/assets/foto.jpg";
import GradientText from "@/components/gradient-text";
import Strip from "@/components/strip";
import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <div
      className="relative
     flex flex-col items-center justify-start px-36 font-sans"
    >
      <section
        id="home"
        className="flex min-h-[38rem] w-full items-start justify-start pt-24"
      >
        <div className="group relative flex h-48 w-[40%] animate-fade-in-left flex-col flex-wrap items-start justify-start transition-all duration-500 ease-in-out hover:cursor-pointer">
          <div className="w-fit">
            <GradientText>MAYCOM</GradientText>
            <div className="flex w-full flex-row items-center justify-start space-x-2 pr-[7.5rem]">
              <div className="absolute h-[2px] w-0 bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600 transition-all duration-500 ease-in-out group-hover:w-60" />
              <GradientText className="absolute right-[.35rem] top-[5.5rem]">
                WILL
              </GradientText>
            </div>
            <span className="font-bold">Full-Stack developer</span>
          </div>
        </div>
        <div className="flex w-[60%] items-center justify-center">
          <div className="group relative flex h-[200px] w-[200px] animate-fade-in-right items-center justify-center bg-red-500 hover:cursor-pointer ">
            <div className="relative z-10 h-[200px] w-[200px] overflow-hidden bg-blue-500 object-fill transition-all duration-500 ease-in-out group-hover:scale-105">
              <Image
                width={200}
                height={200}
                src={Photo}
                alt=""
                className="object-fit absolute top-0 z-10 transition-all duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="absolute left-2 top-2 z-0 h-[200px] w-[200px] border-2 border-white bg-transparent transition-all duration-500 ease-in-out group-hover:left-3 group-hover:top-3 group-hover:animate-border-transition" />
          </div>
        </div>
      </section>
      <div className="absolute top-[32rem] w-full">
        <Strip color="secondary" className="bottom-10 z-0" />
        <Strip className="bottom-10 z-0" />
      </div>
      <About />

      <Projects />

      <Contact />
    </div>
  );
}
