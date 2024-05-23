import React from 'react';
import './LoadMoreButton.css';

interface LoadMoreButtonProps {
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, disabled, isLoading }) => {
  return (
    <div className="load-more">
      <button onClick={onClick} disabled={disabled}>
        {isLoading ? 'Carregando...' : 'Mostrar mais'}
      </button>
    </div>
  );
};

export default LoadMoreButton;
