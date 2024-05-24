import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchUserData = async (username: string) => {
  const { data: user } = await api.get(`/users/${username}`);
  return user;
};

export const fetchRepos = async (
  username: string,
  page: number = 1,
  perPage: number = 9
) => {
  const { data: repos } = await api.get(`/users/${username}/repos`, {
    params: {
      page,
      per_page: perPage,
    },
  });

  return repos;
};
