import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListCards from '../../components/ListCards/ListCards';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import Spinner from '../../components/Spinner/Spinner';
import ErrorToast from '../../components/ErrorToast/ErrorToast';
import './Home.css';

interface HomeProps {
  repos: any[];
  loading: boolean;
  error: string;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
}

function Home({ repos, loading, error, fetchNextPage, hasNextPage, isFetchingNextPage }: HomeProps) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="Home">
      {error && <ErrorToast message={error} />}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="header-button-back">
            <button className="back-button" onClick={handleBackClick}>
              Voltar
            </button>
          </div>
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
}

export default Home;
