import React from "react";
import ListCards from "../../components/ListCards/ListCards";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Spinner from "../../components/Spinner/Spinner";
import ErrorToast from "../../components/ErrorToast/ErrorToast";
import "./Home.css";

interface HomeProps {
  repos: any[];
  loading: boolean;
  error: string;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
}

const Home: React.FC<HomeProps> = ({
  repos,
  loading,
  error,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) => {
  return (
    <div className="Home">
      {error && <ErrorToast message={error} />}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ListCards data={repos} />
          {hasNextPage && (
            <LoadMoreButton
              onClick={fetchNextPage}
              disabled={isFetchingNextPage}
              isLoading={isFetchingNextPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
