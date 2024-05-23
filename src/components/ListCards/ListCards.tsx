import React from "react";
import RepoCard from "../RepoCard/RepoCard";
import { Repository } from "../../services/useFetchRepos";
import "./ListCards.css";

interface ListCardsProps {
  data: Repository[][];
}

const ListCards: React.FC<ListCardsProps> = ({ data }) => {
  return (
    <div className="repo-list">
      {data.map((page, index) => (
        <React.Fragment key={index}>
          {page.map((repo: Repository) => (
            <RepoCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              htmlUrl={repo.html_url}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListCards;
