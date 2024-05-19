import { Repository } from "@/types/github_data";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from "react";
import Icon from "@mdi/react";
import {
  mdiLanguageTypescript,
  mdiLanguageJava,
  mdiLanguagePython,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
} from "@mdi/js";

function RepoCard({ repo }: { repo: Repository }) {
  const iconData = getLanguageIcon(repo.language);
  const description = generateDescription(repo.description);
  const url = getUrl(repo);

  function generateDescription(description: string | null) {
    if (description === null) {
      return "";
    }
    if (description.length >= 40) {
      const array = description.split(" ");
      const new_description = array.splice(0, 12).join(" ").concat("...");
      return new_description;
    }
    return description;
  }

  function getLanguageIcon(language: string) {
    switch (language) {
      case "TypeScript":
        return { icon: mdiLanguageTypescript, color: "#3178C6" };
      case "JavaScript":
        return { icon: mdiLanguageJavascript, color: "#F7DF1E" };
      case "Java":
        return { icon: mdiLanguageJava, color: "#ca3132" };
      case "Python":
        return { icon: mdiLanguagePython, color: "#3776AB" };
      case "HTML":
        return { icon: mdiLanguageHtml5, color: "#E34F26" };
      case "CSS":
        return { icon: mdiLanguageCss3, color: "#1572B6" };
      default:
        return { icon: mdiLanguageTypescript, color: "#3178C6" };
    }
  }

  function getUrl(repo: Repository) {
    const name = repo.name
      .split("_")
      .join(" ")
      .split("-")
      .join(" ")
      .toLowerCase();
    switch (name) {
      case "inovagil kanban":
        return "https://inovagil-kanban-web.onrender.com/";
      case "catapi instance":
        return "https://catapi-instance.vercel.app/";
      case "inovagil eletivas":
        return "https://inovagil-eletivas.vercel.app/";
      case "dollarconverter":
        return "https://todaycurrency.vercel.app/";
      case "custompokedex":
        return "https://custom-pokedex.vercel.app/";
      case "border radius previewer":
        return "https://borderradiuspreviewer.vercel.app/";
      case "cadernetadigital":
        return "https://cadernetadigital.vercel.app/";
      case "pomodoro react":
        return "https://pomodoro-react-maycomwill.vercel.app/";
        case "todo list oficina":
          return "https://inovagil-todo-web.onrender.com/";
        case "aula todo":
          return "https://inovagil-todo-web.onrender.com/";
      default:
        return repo.html_url;
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      aria-label={repo.name}
      className="group relative z-10 flex h-64 w-64 flex-col items-start justify-start overflow-hidden break-words rounded-md ring-2 ring-slate-400 transition-all duration-300 ease-in-out hover:ring-4 hover:ring-lime-400 focus-visible:ring-lime-400"
    >
      <div className="z-100 absolute w-full py-4 text-center">
        <span className="text-md break-normal font-semibold uppercase">
          {repo.name.split("_").join(" ").split("-").join(" ")}
        </span>
      </div>
      <div className="absolute top-12 z-20 flex flex-col space-y-4 px-2">
        <p className="text-justify text-sm text-white/70">{description}</p>
        <p className="text-left text-sm text-white/70">
          Criado em:{" "}
          {formatDistanceToNow(repo.created_at, {
            locale: ptBR,
            addSuffix: true,
          })}
        </p>
        <p className="text-left text-sm text-white/70">
          Última atualização:{" "}
          {formatDistanceToNow(repo.pushed_at, {
            locale: ptBR,
            addSuffix: true,
          })}
        </p>
      </div>
      <div className="absolute -bottom-4 -right-6 z-0 opacity-20 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-60">
        {repo.language !== null ? (
          <Icon path={iconData.icon} color={iconData.color} size={6} />
        ) : null}
      </div>
    </a>
  );
}

export default RepoCard;
