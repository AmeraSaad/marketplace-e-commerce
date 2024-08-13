import React from 'react';

const NavBar = ({isSidebarOpen,setIsSidebarOpen,toggleSidebar}) => {
  return (
    <nav className="fixed top-0 w-full z-10 flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-800 dark:text-white">
       {/* Left side - Logo and Toggle button */}
      <div className="flex items-center">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 mx-8">
          {<i className="fas fa-bars text-2xl"></i> }
        </button>
        <img src="logo.png" alt="Logo" className="h-8" />
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
      <div className="flex space-x-4 x-4">
        <button className="p-2">
        {/* <img src="./images/search.80230c5d.png" alt="" className='' /> */}
          <i className="fas fa-search text-xl text-gray-500"></i>
        </button>
        <button className="p-2">
          <i className="fas fa-cog text-xl text-gray-500"></i>
        </button>
        <button className="p-2 relative">
          <i className="fas fa-shopping-cart text-xl text-gray-500"></i>
          <span className="absolute top-0 right-0 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
