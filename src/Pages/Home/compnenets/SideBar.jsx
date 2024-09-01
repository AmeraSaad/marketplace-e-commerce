import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../../../context/ProductsContext';
import { ToggleSidebarContext } from '../../../context/ToggleSidebarContext';

function SideBar() {
  const { isSidebarOpen, toggleSidebar } = useContext(ToggleSidebarContext);
  const { setProducts, getAllProducts } = useContext(ProductsContext);
  const [categories, setCategories] = useState([]);
  const api_url = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const getProductsInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-20">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75" onClick={toggleSidebar}></div>
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30 dark:bg-gray-800 dark:text-white">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold">Categories</h2>
              <button onClick={toggleSidebar} className="text-xl">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <ul className="mt-4">
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900"
                  onClick={getAllProducts}>
                All
              </li>
              {categories.map((category) => (
                <li key={category} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900"
                    onClick={() => getProductsInCategory(category.name)}>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
