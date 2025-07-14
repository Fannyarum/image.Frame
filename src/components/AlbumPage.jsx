import React, { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext'; 

export default function AlbumPage({ category }) {
  const [images, setImages] = useState([]);
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const { theme } = useTheme(); 

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = `https://api.unsplash.com/photos/random?count=16&query=${category}&client_id=${accessKey}`;
        const res = await fetch(url);
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error('Gagal fetch dari Unsplash:', err);
      }
    };

    fetchImages();
  }, [category]);

  return (
    <div className={`p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      {images.map((img) => (
        <div key={img.id} className="relative group overflow-hidden rounded-xl shadow-md">
          <img
            src={img.urls.small}
            alt={img.alt_description}
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            <h3 className="font-semibold">{img.user.name}</h3>
            <p className="text-sm">{img.alt_description || 'Beautiful aesthetic photo'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
