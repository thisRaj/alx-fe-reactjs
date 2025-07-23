import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // 👈 Import added

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>

      </div>
      <h1>Jalil's Recipe Sharing</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is how we learn to make the best meals!!
        </p>
      </div>
      <p className="read-the-docs">
        Let's save your relationships with food fellas!!
      </p>

      <hr />
      <h2>Recipe Sharing App</h2>

      {/* 🔍 Search and Recipe UI */}
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;