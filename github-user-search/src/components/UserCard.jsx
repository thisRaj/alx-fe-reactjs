// src/components/UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => (
  <div>
    <img src={user.avatar_url} alt={user.login} width={50} />
    <h3>{user.login}</h3>
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      View Profile
    </a>
  </div>
);

export default UserCard;