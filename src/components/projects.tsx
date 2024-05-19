"use client";
import { getRepos } from "@/api/github";
import { Repository } from "@/types/github_data";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import RepoCard from "./repo-card";

function Projects() {
  const { data: repos } = useQuery({
    queryFn: getRepos,
    queryKey: ["get_repos"],
  });
  return (
    <section id="projects" className="mt-12 min-h-[38rem] w-full">
      <h1 className="pb-12 font-title text-5xl tracking-[0.3rem]">PROJETOS</h1>
      <div className="flex flex-col space-y-8">
        <div className="grid w-full grid-flow-row grid-cols-3 place-items-center gap-2">
          {repos?.map((repo: Repository) => {
              return <RepoCard repo={repo} key={repo.id} />
            })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
