import React from 'react';
import RepoCard from '../RepoCard/RepoCard';
import './ListCards.css';

interface ListCardsProps {
  data: any[];
}

const ListCards: React.FC<ListCardsProps> = ({ data }) => {
  return (
    <div className="repo-list">
      {data.map((repo) => (
        <RepoCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          htmlUrl={repo.html_url}
        />
      ))}
    </div>
  );
};

export default ListCards;
