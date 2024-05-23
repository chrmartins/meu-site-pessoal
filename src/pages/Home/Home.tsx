import React from "react";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Spinner from "../../components/Spinner/Spinner";
import ListCards from "../../components/ListCards/ListCards";

import "./Home.css";
import { useFetchRepos, useFetchUser } from "../../services/useFetchRepos";
import Header from "../../components/Header/Header";

const Home: React.FC = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchRepos();

  const { data: userData } = useFetchUser();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading repositories: {error.message}</div>;

  return (
    <div className="Home">
      {userData && (
        <Header avatarUrl={userData.avatar_url} username={userData.name} />
      )}

      <ListCards data={data?.pages ?? []} />
      {hasNextPage && (
        <LoadMoreButton
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          isLoading={isFetchingNextPage}
        />
      )}
    </div>
  );
};

export default Home;
