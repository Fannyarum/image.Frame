import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';  

const albums = [
  { name: 'Music', image: new URL('../assets/collection.png', import.meta.url).href },
  { name: 'Flower', image: new URL('../assets/collection.png', import.meta.url).href },
  { name: 'Architecture', image: new URL('../assets/collection.png', import.meta.url).href },
  { name: 'Fashion', image: new URL('../assets/collection.png', import.meta.url).href },
  { name: 'Landscape', image: new URL('../assets/collection.png', import.meta.url).href },
  { name: 'Portrait', image: new URL('../assets/collection.png', import.meta.url).href },
];

export default function Album({ setCategory }) {
  const { theme } = useTheme();  
  const navigate = useNavigate();

  const handleAlbumClick = (category) => {
    setCategory(category);  
    navigate('/gallery');   
  };

  return (
    <div className={`p-8 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className="mb-8">
        <h2 className={`HeaderAlbum ${theme === 'light' ? 'light' : 'dark'}`}>
          Dapatkan Inspirasi
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {albums.map((album) => (
          <div
            key={album.name}
            className={`relative cursor-pointer group overflow-hidden rounded-lg shadow-md ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
            onClick={() => handleAlbumClick(album.name.toLowerCase())}>
            <div className="relative flex justify-center items-center border-4 border-gray-500 rounded-lg p-2">
              <img
                src={album.image}
                alt={album.name}
                className="w-full h-72 object-cover rounded-md"/>
            </div>
            <div className={`text-center font-semibold text-lg mt-4 mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {album.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
