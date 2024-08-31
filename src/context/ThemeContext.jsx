import React, { useState,createContext } from 'react'

export const ThemeContext = createContext();

function ThemeProvider({children}) {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    < ThemeContext.Provider value={{theme,setTheme,toggleTheme}}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
