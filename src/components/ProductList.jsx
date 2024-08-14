import React, { useState } from 'react';
import Product from './Product';
import ProductSorting from './ProductSorting';

function ProductList({products,setProducts}) {
  // const getProducts = () => {
  //   fetch('https://dummyjson.com/products')
  //   .then((res) => res.json())
  //   .then((data) => setProducts(data.products));
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  
  const [sortOption, setSortOption] = useState('');
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'price') {
      return a.price - b.price;
    } else if (sortOption === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <>
    <div className="mx-auto text-center pt-20 dark:bg-gray-800 dark:text-white">
      <h1 className="text-5xl mb-6">
        Our Products
      </h1>
      <span className="block w-16 border-b-4 border-gray-600 mx-auto"></span>
    </div>
    
    <ProductSorting setSortOption={setSortOption}/>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-10 dark:bg-gray-800 dark:text-white">
      {sortedProducts.map((product, index) => (
        <div className="relative rounded-lg group" key={index}>
          <Product product={product} />
        </div>
      ))}
    </div>
    </>
  );
}

export default ProductList;
