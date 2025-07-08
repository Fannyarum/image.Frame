import React, { useEffect, useState, useContext, createContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
        <Navbar />
        <Gallery />
      </div>
    </ThemeContext.Provider>
  );
}