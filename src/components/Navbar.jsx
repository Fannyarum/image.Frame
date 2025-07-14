import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';  
import { Sun, Moon, Camera, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  

export default function Navbar({ setCategory }) {
  const { theme, toggleTheme } = useTheme();  
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();  
  const navigate = useNavigate();  

  // reset kategori
  const handleHomeClick = () => {
    setCategory('');  
    navigate('/');    
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCategory(searchTerm); 
  };

  const handleSearchClick = () => {
    setCategory(searchTerm); 
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit(event); 
    }
  };

  return (
    <nav className={`flex justify-between items-center px-6 py-4 shadow-md mb-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div className="flex items-center gap-2 text-xl font-bold">
        <Camera className="w-6 h-6" />
        <Link to="/" className={`text-${theme === 'light' ? 'black' : 'white'}`}>FunGallery</Link>
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={handleHomeClick}
          className={`p-2 px-4 text-lg font-semibold rounded-full text-white ${theme === 'light' ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-500 hover:bg-gray-600'} shadow-md hover:shadow-lg transition duration-200`}>
          Home
        </button>

        <Link
          to="/album"
          className={`p-2 px-4 text-lg font-semibold rounded-full text-white ${theme === 'light' ? 'bg-gray-400 hover:bg-gray-500' : 'bg-gray-600 hover:bg-gray-700'} transition duration-200`}>
          Album
        </Link>

        {location.pathname === '/' && (
          <form onSubmit={handleSearchSubmit} className="relative flex items-center gap-2">
            <div className={`relative flex items-center border-4 rounded-full ${theme === 'light' ? 'border-gray-600' : 'border-gray-400'}`}>
              <Search 
                className="absolute left-3 w-5 h-5 text-gray-500 cursor-pointer" 
                onClick={handleSearchClick} />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                placeholder="Search images..."
                className={`p-2 pl-12 rounded-full focus:outline-none ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'} focus:ring-2 focus:ring-gray-600`}/>
            </div>
          </form>
        )}

        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  );
}
