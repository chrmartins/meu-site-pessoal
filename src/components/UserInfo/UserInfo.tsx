import React from 'react';
import Avatar from '../Avatar/Avatar';
import './UserInfo.css';

interface UserInfoProps {
  avatarUrl: string;
  username: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ avatarUrl, username }) => {
  return (
    <div className="user-info">
      <Avatar avatarUrl={avatarUrl} />
      <span className="username">{username}</span>
    </div>
  );
};

export default UserInfo;
