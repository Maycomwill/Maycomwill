import {
  GithubLogo,
  WhatsappLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="mt-12 min-h-[28rem] w-full text-left">
      <h1 className="pb-12 font-title text-5xl tracking-[0.3rem]">CONTATO</h1>
      <div className="flex flex-col space-y-12">
        <p>
          Entre em contato por email{" "}
          <span className="select-none bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 bg-clip-text font-bold text-transparent hover:cursor-pointer">
            maycom.willams@gmail.com
          </span>
          , ou atraves das redes sociais
        </p>
        <div className="flex space-x-12">
          <div className="group relative h-8 w-8 hover:cursor-pointer">
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/4 -translate-y-1/4 rounded-full bg-purple-500/70 opacity-0 blur-xl transition-all duration-200 ease-in-out group-hover:opacity-100" />
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/60 opacity-0 blur-xl transition-all duration-200 ease-in-out group-hover:opacity-100" />
            <Link
              target="_blank"
              rel="noopener"
              href={"https://linkedin.com/in/maycomwill"}
              className="absolute z-10"
            >
              <Linkedin size={32} />
            </Link>
          </div>
          <div className="group relative h-8 w-8 hover:cursor-pointer">
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/4 -translate-y-1/4 rounded-full bg-purple-500/70 opacity-0 blur-xl transition-all duration-200 ease-in-out group-hover:opacity-100" />
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/60 opacity-0 blur-xl transition-all duration-200 ease-in-out group-hover:opacity-100" />
            <Link
              target="_blank"
              rel="noopener"
              href={"https://github.com/maycomwill"}
              className="absolute z-10"
            >
              <GithubLogo width={32} height={32} />
            </Link>
          </div>
          <div className="group relative h-8 w-8 hover:cursor-pointer">
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/4 -translate-y-1/4 select-none rounded-full bg-purple-500/70 opacity-0 blur-xl transition-all duration-200 ease-in-out group-hover:opacity-100" />
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 select-none rounded-full bg-cyan-500/60 opacity-0 blur-xl transition-all duration-200 ease-in-out group-hover:opacity-100" />
            <Link
              href={"https://twitter.com/maycomwillams"}
              target="_blank"
              rel="noopener"
              className="absolute z-10"
            >
              <XLogo width={32} height={32} />
            </Link>
          </div>
          <div className="group relative h-8 w-8 hover:cursor-pointer">
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/4 -translate-y-1/4 rounded-full bg-purple-500/70 opacity-0 blur-xl transition-all duration-200 ease-in-out group-hover:opacity-100" />
            <div className="absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/60 opacity-0 blur-xl transition-all duration-200 ease-in-out group-hover:opacity-100" />
            <Link
              target="_blank"
              rel="noopener"
              className="absolute z-10"
              href={
                "https://api.whatsapp.com/send?phone=5581984317191&text=Olá"
              }
            >
              <WhatsappLogo width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
