"use client";
import { QueryClient } from "@tanstack/react-query";

export const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
});
