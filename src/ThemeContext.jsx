import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);  
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');  

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}  
    </ThemeContext.Provider>
  );
};
