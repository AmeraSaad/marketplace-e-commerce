import React from 'react';
import Product from './Product';

function ProductList({products,setProducts}) {
  // const getProducts = () => {
  //   fetch('https://dummyjson.com/products')
  //   .then((res) => res.json())
  //   .then((data) => setProducts(data.products));
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div className='pt-16'>
    <div className="mx-auto text-center pt-10 dark:bg-gray-800 dark:text-white">
      <h1 className="text-5xl mb-6">
        Our Products
      </h1>
      <span className="block w-16 border-b-4 border-gray-600 mx-auto"></span>
    </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-10 dark:bg-gray-800 dark:text-white">
      {products.map((product, index) => (
        <div className="relative rounded-lg hover:shadow-lg" key={index}>
          <Product product={product} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProductList;
