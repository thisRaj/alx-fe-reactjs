// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Search GitHub users..."
      value={value}
      onChange={onChange}
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;