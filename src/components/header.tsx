import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky left-0 top-0 z-20 flex h-14 w-full items-center justify-center bg-slate-950 md:left-1/2 md:right-1/2 md:top-4 md:w-3/4 md:-translate-x-[12.5%] md:justify-between md:rounded-full md:px-24">
      <Link
        href={"#home"}
        className="group relative flex h-12 w-12 items-center justify-center hover:cursor-pointer"
      >
        <div className="invisible absolute left-1/2 top-1/2 z-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/40 blur-xl group-hover:visible" />
        <div className="invisible absolute left-1/2 top-1/2 z-0 h-10 w-10 -translate-x-1/4 -translate-y-1/4 rounded-full bg-purple-500/20 blur-xl group-hover:visible" />
        <Image
          alt="Maycom logo"
          width={48}
          height={48}
          src={Logo}
          className="absolute z-10"
        />
      </Link>
      <div className="hidden flex-row space-x-8 md:flex">
        <Link
          href={"#about"}
          className="cursor-pointer bg-gradient-to-r from-violet-400 via-cyan-500 to-emerald-500 bg-[length:0%_10%] bg-bottom bg-no-repeat px-1 font-title text-lg tracking-widest transition-[background-size] duration-300 hover:bg-opacity-50 hover:bg-[length:100%_10%]"
        >
          SOBRE
        </Link>
        <Link
          href={"#projects"}
          className="cursor-pointer bg-gradient-to-r from-violet-400 via-cyan-500 to-emerald-500 bg-[length:0%_10%] bg-bottom bg-no-repeat px-1 font-title text-lg tracking-widest transition-[background-size] duration-300 hover:bg-opacity-50 hover:bg-[length:100%_10%]"
        >
          PROJETOS
        </Link>
        <Link
          href={"#contact"}
          className="cursor-pointer bg-gradient-to-r from-violet-400 via-cyan-500 to-emerald-500 bg-[length:0%_10%] bg-bottom bg-no-repeat px-1 font-title text-lg tracking-widest transition-[background-size] duration-300 hover:bg-opacity-50 hover:bg-[length:100%_10%]"
        >
          CONTATO
        </Link>
      </div>
    </header>
  );
}

export default Header;
