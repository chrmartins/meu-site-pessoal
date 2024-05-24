import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeInput from './pages/HomeInput/HomeInput';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { useFetchUser, useFetchRepos } from './services/useFetchData';

function AppRoutes() {
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
    <Router>
      <Routes>
        <Route path="/" element={<HomeInput onSubmit={handleFetchUserData} />} />
        <Route
          path="/home"
          element={
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
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
