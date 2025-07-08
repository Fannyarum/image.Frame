import React from 'react';
import { useTheme } from '../App';
import { Sun, Moon, Camera } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      <div className="flex items-center gap-2 text-xl font-bold">
        <Camera className="w-6 h-6" />
        FunGallery
      </div>
      <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
    </nav>
  );
}
