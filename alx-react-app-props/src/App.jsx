import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Jalil Muyeke", email: "jalilmuyeke@gmail.com" };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>React Counter App</h1>
      <WelcomeMessage />
      <UserProfile name="Rajab" age="36" bio="Loves hiking and photography" />
      <Header />
      <MainContent />
      <Footer />
      <Counter />

      {/* 👇 Context-enabled ProfilePage */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </>
  );
}

export default App;