import React from 'react';
import './Avatar.css';

interface AvatarProps {
  avatarUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUrl }) => {
  return (
    <div className="avatar-container">
      <img 
        src={avatarUrl} 
        alt="Avatar" 
        className="avatar"
      />
    </div>
  );
};

export default Avatar;
