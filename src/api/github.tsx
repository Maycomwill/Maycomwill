import { api } from "@/lib/axios";
import { Repository } from "@/types/github_data";
import axios, { AxiosError } from "axios";

export async function getRepos() {
  try {
    const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
    let url = "https://api.github.com/users/maycomwill/repos";
    let pagesRemaining = true;
    let raw_data: any[] = [];

    while (pagesRemaining) {
      const { data, headers } = await axios.get(url);
      raw_data = [...raw_data, ...data];
      const linkHeader = headers.link;

      pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

      if (pagesRemaining) {
        url = linkHeader.match(nextPattern)[0];
      }
    }

    const repos = raw_data.sort((a: Repository, b: Repository) => {
      return a.pushed_at > b.pushed_at ? -1 : a.pushed_at < b.pushed_at ? 1 : 0;
    });
    const response: Repository[] = repos;
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return alert(error.message);
    }
  }
}
