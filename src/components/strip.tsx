import clsx from "clsx";
import React from "react";
import ReactIcon from "@/assets/logos/react.svg";
import Node from "@/assets/logos/nodedotjs.svg";
import Axios from "@/assets/logos/axios.svg";
import Css3 from "@/assets/logos/css3.svg";
import Html5 from "@/assets/logos/html5.svg";
import Expo from "@/assets/logos/expo.svg";
import Git from "@/assets/logos/git.svg";
import Js from "@/assets/logos/javascript.svg";
import Ts from "@/assets/logos/typescript.svg";
import Postegres from "@/assets/logos/postgresql.svg";
import Prisma from "@/assets/logos/prisma.svg";
import TailwindCss from "@/assets/logos/tailwindcss.svg";
import Image from "next/image";

interface StripProps {
  color?: "primary" | "secondary";
  className?: string;
}

const techs = [
  "node",
  "react",
  "axios",
  "git",
  "js",
  "ts",
  "css",
  "html",
  "postgres",
  "prisma",
  "tailwind",
  "expo",
];

function returnIcon(tech: string) {
  switch (tech) {
    case "node":
      return (
        <Image
          src={Node}
          width={32}
          height={32}
          className="max-w-none"
          alt="node"
          key={"node"}
        />
      );
    case "react":
      return (
        <Image
          src={ReactIcon}
          width={32}
          height={32}
          className="max-w-none"
          alt="react"
          key={"react"}
        />
      );
    case "axios":
      return (
        <Image
          src={Axios}
          width={32}
          height={32}
          className="max-w-none"
          alt="axios"
          key={"axios"}
        />
      );
    case "git":
      return (
        <Image
          src={Git}
          width={32}
          height={32}
          className="max-w-none"
          alt="git"
          key={"git"}
        />
      );
    case "js":
      return (
        <Image
          src={Js}
          width={32}
          height={32}
          className="max-w-none"
          alt="js"
          key={"js"}
        />
      );
    case "ts":
      return (
        <Image
          src={Ts}
          width={32}
          height={32}
          className="max-w-none"
          alt="ts"
          key={"ts"}
        />
      );
    case "css":
      return (
        <Image
          src={Css3}
          width={32}
          height={32}
          className="max-w-none"
          alt="css"
          key={"css"}
        />
      );
    case "html":
      return (
        <Image
          src={Html5}
          width={32}
          height={32}
          className="max-w-none"
          alt="html"
          key={"html"}
        />
      );
    case "postgres":
      return (
        <Image
          src={Postegres}
          width={32}
          height={32}
          className="max-w-none"
          alt="postgres"
          key={"postgres"}
        />
      );
    case "prisma":
      return (
        <Image
          src={Prisma}
          width={32}
          height={32}
          className="max-w-none"
          alt="prisma"
          key={"prisma"}
        />
      );
    case "tailwind":
      return (
        <Image
          src={TailwindCss}
          width={32}
          height={32}
          className="max-w-none"
          alt="tailwind"
          key={"tailwind"}
        />
      );
    case "expo":
      return (
        <Image
          src={Expo}
          width={32}
          height={32}
          className="max-w-none"
          alt="expo"
          key={"expo"}
        />
      );
  }
}

function Strip({ color = "primary", className = "" }: StripProps) {
  return (
    <div
      className={clsx(
        "animate-fade-in group absolute flex w-full space-x-16 overflow-hidden whitespace-nowrap py-2 transition-all duration-150 ease-in-out md:animate-none",
        {
          "rotate-6 bg-zinc-700 text-zinc-900 md:rotate-2":
            color === "secondary",
          "-rotate-6 bg-yellow-500 text-zinc-900 md:-rotate-2":
            color === "primary",
        },
        className,
      )}
    >
      <div
        className={clsx(
          "group-hover:paused flex animate-logo-slide space-x-16",
          {
            "animate-logo-slide-reverse": color === "secondary",
          },
        )}
      >
        {techs.map((tech) => returnIcon(tech))}
      </div>
      <div
        aria-hidden="true"
        className={clsx(
          "group-hover:paused flex animate-logo-slide space-x-16",
          {
            "animate-logo-slide-reverse": color === "secondary",
          },
        )}
      >
        {techs.map((tech) => returnIcon(tech))}
      </div>
      <div
        aria-hidden="true"
        className={clsx(
          "group-hover:paused flex animate-logo-slide space-x-16",
          {
            "animate-logo-slide-reverse": color === "secondary",
          },
        )}
      >
        {techs.map((tech) => returnIcon(tech))}
      </div>
    </div>
  );
}

export default Strip;
