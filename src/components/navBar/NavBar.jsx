import React, { useContext } from 'react';
import logo from '../../assets/images/logo.png'
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
import { ToggleSidebarContext } from '../../context/ToggleSidebarContext';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(ToggleSidebarContext);
  const { theme } = useContext(ThemeContext); 
  return (
    <header className={theme}> 
    <nav className="fixed top-0 w-full z-10 flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-800 dark:text-white">
       {/* Left side - Logo and Toggle button */}
      <div className="flex items-center">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 mx-8">
          {<i className="fas fa-bars text-2xl"></i> }
        </button>
        <Link to={'/'}>
          <img src={logo} alt="Logo" className="h-8" />
        </Link>
      </div>

      {/* Center - Dropdown lists */}
      <div className="hidden lg:flex space-x-8 z-10">
        <div className="relative group">
          <button className="hover:text-gray-500">HOME <i className="ml-2 fas fa-chevron-down text-sm"></i></button>
          <div className="hidden group-hover:block absolute left-0  w-48 bg-white shadow-lg rounded-lg">
            <ul className="py-2 dark:bg-gray-800 dark:text-white">
              <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-gray-500">SHOP <i className="ml-2 fas fa-chevron-down text-sm"></i></button>
          <div className="hidden group-hover:block absolute left-0 w-48 bg-white shadow-lg rounded-lg">
            <ul className="py-2 dark:bg-gray-800 dark:text-white">
              <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-gray-500">PRODUCTS <i className="ml-2 fas fa-chevron-down text-sm"></i></button>
          <div className="hidden group-hover:block absolute left-0 w-48 bg-white shadow-lg rounded-lg">
            <ul className="py-2 dark:bg-gray-800 dark:text-white">
              <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-gray-500">FEATURES <i className="ml-2 fas fa-chevron-down text-sm"></i></button>
          <div className="hidden group-hover:block absolute left-0 w-48 bg-white shadow-lg rounded-lg">
            <ul className="py-2 dark:bg-gray-800 dark:text-white">
              <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-gray-500">PAGES <i className="ml-2 fas fa-chevron-down text-sm"></i></button>
          <div className="hidden group-hover:block absolute left-0  w-48 bg-white shadow-lg rounded-lg">
            <ul className="py-2 dark:bg-gray-800 dark:text-white">
              <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-gray-500">BLOGS <i className="ml-2 fas fa-chevron-down text-sm"></i></button>
          <div className="hidden group-hover:block absolute left-0 w-48 bg-white shadow-lg rounded-lg">
            <ul className="py-2 dark:bg-gray-800 dark:text-white">
              <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right side - Search, Settings, Cart */}
      <div className="flex items-center space-x-4">
        <SearchBar/>
        {/* Settings and Cart Icons */}
        <button className="">
          <i to className="fas fa-cog text-xl text-gray-500"></i>
        </button>
        <Cart/>
      </div>
    </nav>
    </header>
  );
};

export default NavBar;
