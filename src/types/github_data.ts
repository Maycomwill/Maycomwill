export interface Repository {
  name: string;
  id: number;
  html_url: string;
  description: string | null;
  languages_url: string;
  language: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  forks_count: number;
}
