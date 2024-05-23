import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const fetchUserData = async () => {
  const { data: user } = await api.get(`/users/chrmartins`);
  return user;
};

export const fetchRepos = async (page: number = 1, perPage: number = 9) => {
  const { data: repos } = await api.get(`/users/chrmartins/repos`, {
    params: {
      page,
      per_page: perPage,
    },
  });

  return repos;
};
