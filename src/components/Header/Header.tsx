import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import "./Header.css";

interface HeaderProps {
  avatarUrl: string;
  username: string;
}

const Header: React.FC<HeaderProps> = ({ avatarUrl, username }) => {
  return (
    <header className="header">
      <h1 className="title">Meus Repositórios do GitHub</h1>
      <UserInfo avatarUrl={avatarUrl} username={username} />
    </header>
  );
};

export default Header;
