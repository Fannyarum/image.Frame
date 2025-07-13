import React, { useState } from 'react';
import { useTheme } from '../App';
import { Sun, Moon, Camera, Search } from 'lucide-react';

export default function Navbar({ setCategory }) {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();  
    setCategory(searchTerm); 
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit(event);
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      <div className="flex items-center gap-2 text-xl font-bold">
        <Camera className="w-6 h-6" />
        FunGallery
      </div>
      <div className="flex items-center gap-2">
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Search images..."
            className={`p-2 rounded-md border-2 focus:outline-none ${theme === 'light' ? 'border-black bg-white text-black focus:ring-2 focus:ring-gray-600' : 'border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-gray-400'}`}
          />
          <button 
            type="submit"
            className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <Search className="w-5 h-5 text-white" />  { }
          </button>
        </form>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  );
}
