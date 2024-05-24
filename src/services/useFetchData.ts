import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchRepos, fetchUserData } from '../api/github';

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
}

export interface User {
  avatar_url: string;
  login: string;
}

export const useFetchRepos = (username: string) => {
  return useInfiniteQuery<Repository[], Error>({
    queryKey: ['repos', username],
    queryFn: async ({ pageParam = 1 }: any) => {
      return fetchRepos(username, pageParam, 9);
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
    enabled: !!username, 
  });
};

export const useFetchUser = (username: string) => {
  return useQuery<User, Error>({
    queryKey: ['user', username],
    queryFn: () => fetchUserData(username),
    enabled: !!username, 
  });
};
