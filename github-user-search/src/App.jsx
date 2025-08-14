// src/App.jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { searchUsers } from './services/github';

const App = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>GitHub User Search</h1>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={handleSearch}
      />
      <div style={{ marginTop: '2rem' }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
