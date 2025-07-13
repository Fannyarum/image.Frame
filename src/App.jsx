import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

const ThemeContext = React.createContext();

export const useTheme = () => React.useContext(ThemeContext);

export default function App() {
  const [theme, setTheme] = useState('light'); 
  const [category, setCategory] = useState('');  

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
        <Navbar setCategory={setCategory} />
        <Gallery category={category} />
      </div>
    </ThemeContext.Provider>
  );
}
