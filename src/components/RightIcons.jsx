import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

function RightIcons() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button  className="fixed right-0 top-1/4 transform -translate-y-1/2 bg-gray-100 text-black p-2 dark:bg-gray-700 dark:text-white ">
        <i class="fa-regular fa-clone"></i>
      </button>
      <button  className="fixed right-0 top-1/3 transform -translate-y-1/2 bg-gray-100 text-black p-2 dark:bg-gray-700 dark:text-white">
        <i class="fa-solid fa-gear"></i>
      </button>
      {/* Dark Mode Toggle Button */}
      <button onClick={toggleTheme} className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-2 dark:bg-gray-700 dark:text-white">
        {theme === 'light' ? 'dark' : 'light'}
      </button>
    </>
  )
}

export default RightIcons
