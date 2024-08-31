import React, { useContext } from 'react';
import { ProductsContext } from '../../../context/ProductsContext';

function SearchBar() {
  const {setSearchQuery } = useContext(ProductsContext);
  
  return (
    <div className="relative">
      <input
        type="text"
        className="p-1 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <i className="fas fa-search absolute left-3 top-2 text-gray-500"></i>
    </div>
  );
}

export default SearchBar;
