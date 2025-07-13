import React, { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(`https://api.unsplash.com/photos/random?count=16&client_id=${accessKey}`);
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error('gagal fetch dari Unsplash:', err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img) => (
        <div
          key={img.id}
          className="relative group overflow-hidden rounded-xl shadow-md">
          <img
            src={img.urls.small}
            alt={img.alt_description}
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            <h3 className="font-bold">{img.user.name}</h3>
            <p className="text-sm">{img.alt_description || 'Photo from Unsplash y'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
