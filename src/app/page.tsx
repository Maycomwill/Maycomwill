import Image from "next/image";
import GradientText from "@/components/gradient-text";
import Strip from "@/components/strip";
import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div
      className="relative
     flex flex-col items-center justify-start md:px-36 font-sans overflow-x-hidden"
    >
      <section
        id="home"
        className="md:flex-row flex-col flex min-h-[38rem] w-full items-start justify-start pt-20 md:pt-24 space-y-12 md:space-y-0"
      >
        <div className="group relative flex h-48 w-full md:w-[40%] animate-fade-in-left flex-col flex-wrap md:items-start items-center justify-start transition-all duration-500 ease-in-out hover:cursor-pointer">
          <div className="w-fit">
            <GradientText>MAYCOM</GradientText>
            <div className="flex w-full flex-row items-center justify-start space-x-2 pr-[7.5rem]">
              <div className="absolute h-[2px] w-0 bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600 transition-all duration-500 ease-in-out md:group-hover:w-60 group-hover:w-40" />
              <GradientText className="absolute right-[1.1rem] md:right-[.35rem] top-[5.5rem]">
                WILL
              </GradientText>
            </div>
            <span className="font-bold my-2 md:py-0">Full-Stack developer</span>
          </div>
        </div>
        <div className="flex w-full md:w-[60%] items-center justify-center">
          <div className="group relative flex h-[200px] w-[200px] animate-fade-in-right items-center justify-center hover:cursor-pointer ">
            <div className="relative z-10 h-[200px] w-[200px] overflow-hidden bg-blue-500 object-fill transition-all duration-500 ease-in-out group-hover:scale-105">
              <Image
                width={200}
                height={200}
                src={"https://github.com/maycomwill.png"}
                alt=""
                className="transition-all duration-200 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="absolute left-2 top-2 z-0 h-[200px] w-[200px] border-2 border-white bg-transparent transition-all duration-500 ease-in-out group-hover:left-3 group-hover:top-3 group-hover:animate-border-transition" />
          </div>
        </div>
      </section>
      <div className="absolute top-[46rem] md:top-[32rem] w-full">
        <Strip color="secondary" className="bottom-10 z-0" />
        <Strip className="bottom-10 z-0" />
      </div>
      <About />

      <Projects />

      <Contact />
    </div>
  );
}
