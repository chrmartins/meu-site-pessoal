import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeInput.css';

function HomeInput({ onSubmit }: { onSubmit: (username: string) => void }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(username);
    navigate('/home');
  };

  return (
    <div className="home-input">
      <h1>Digite seu GitHub Username</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub Username"
            className="username-input"
          />
          <button type="submit" className="submit-button">Buscar Repositórios</button>
        </div>
      </form>
    </div>
  );
}

export default HomeInput;
