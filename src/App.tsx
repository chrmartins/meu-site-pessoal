import React, { useState } from 'react';
import Header from './components/Header/Header';
import HomeInput from './pages/HomeInput/HomeInput';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import { useFetchUser, useFetchRepos } from './services/useFetchData';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [username, setUsername] = useState('');

  const { data: user, error: userError } = useFetchUser(username);
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchRepos(username);

  const handleFetchUserData = (username: string) => {
    setUsername(username);
  };

  return (
    <div className="App">
      <ToastContainer />
      {username ? (
        <>
          <Header avatarUrl={user?.avatar_url || ''} username={user?.login || ''} />
          <Home
            repos={data?.pages.flat() || []}
            loading={isLoading}
            error={userError?.message || error?.message || ''}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </>
      ) : (
        <HomeInput onSubmit={handleFetchUserData} />
      )}
    </div>
  );
};

export default App;
