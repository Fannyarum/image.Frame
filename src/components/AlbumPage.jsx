import React, { useEffect, useState, useContext } from 'react';
import { useTheme } from '../ThemeContext';  
import { Heart } from 'lucide-react';  

export default function AlbumPage({ category }) {
  const [images, setImages] = useState([]);        
  const [selectedImage, setSelectedImage] = useState(null); 
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

  const openModal = (img) => {
    setSelectedImage(img);  
  };

  const closeModal = () => {
    setSelectedImage(null);  
  };

  return (
    <div className={`p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      {images.map((img) => (
        <div 
          key={img.id} 
          className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
          onClick={() => openModal(img)} // buka gambar
        >
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

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" 
          onClick={closeModal} >
          <div 
            className="bg-white p-8 rounded-lg max-w-3xl w-full" 
            onClick={(e) => e.stopPropagation()} >
            <div className="flex mb-4">
              <img 
                src={selectedImage.urls.regular} 
                alt={selectedImage.alt_description} 
                className="w-2/3 h-auto mr-4"/>
              <div className="w-1/3">
                <h3 className="text-2xl font-semibold">{selectedImage.alt_description || 'No title'}</h3>
                <p className="mt-2 text-lg">{selectedImage.user.name}</p>
                <p className="mt-2 text-gray-700">{selectedImage.description || 'No description available'}</p>
                <div className="mt-4 flex items-center justify-center text-gray-500">
                  <Heart className="w-6 h-6 text-red-500 mr-2" /> 
                  <span className="text-xl">{selectedImage.likes} Likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
