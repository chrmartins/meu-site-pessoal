import React, { useState } from "react";
import "./HomeInput.css";

interface HomeInputProps {
  onSubmit: (username: string) => void;
}

const HomeInput: React.FC<HomeInputProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <div className="home-input">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub Username"
            className="username-input"
          />
          <button type="submit" className="submit-button">
            Buscar Repositórios
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeInput;
