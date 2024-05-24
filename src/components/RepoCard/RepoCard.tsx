import React from 'react';
import './RepoCard.css';

interface RepoCardProps {
  name: string;
  description: string;
  htmlUrl: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ name, description, htmlUrl }) => {
  return (
    <div className="repo-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
        Ver Repositório
      </a>
    </div>
  );
};

export default RepoCard;
