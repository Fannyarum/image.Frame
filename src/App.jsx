import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Album from './components/Album';
import AlbumPage from './components/AlbumPage';
import { ThemeProvider } from './ThemeContext';  

export default function App() {
  const [category, setCategory] = useState('');  

  return (
    <ThemeProvider> 
      <Router>
        <div className="bg-white text-black">
          <Navbar setCategory={setCategory} />
          <Routes>
            <Route path="/" element={<Gallery category={category} />} />
            <Route path="/album" element={<Album setCategory={setCategory} />} />
             <Route path="/gallery" element={<AlbumPage category={category} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
