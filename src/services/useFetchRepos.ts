import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchRepos, fetchUserData } from '../api/github';

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export interface User {
  avatar_url: string;
  name: string;
}

export const useFetchRepos = () => {
  return useInfiniteQuery<Repository[], Error>({
    queryKey: ['repos'],
    queryFn: async ({ pageParam = 1 }: any) => {
      return fetchRepos(pageParam, 9);
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });
};

export const useFetchUser = () => {
  return useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: fetchUserData,
  });
};
