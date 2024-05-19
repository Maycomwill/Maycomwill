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
    <section
      id="projects"
      className="min-h-[38rem] w-full px-4 md:mt-12 md:px-0"
    >
      <h1 className="pb-12 font-title text-5xl tracking-[0.3rem]">PROJETOS</h1>
      <div className="flex flex-col space-y-8">
        <div className="flex w-full flex-col items-center justify-center space-y-6 md:grid md:grid-flow-row md:grid-cols-3 md:place-items-center md:gap-2">
          {repos?.map((repo: Repository) => {
            return <RepoCard repo={repo} key={repo.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
