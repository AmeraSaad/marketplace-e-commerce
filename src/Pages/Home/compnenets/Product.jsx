import React from 'react';
import { Link } from 'react-router-dom';


function Product({ product }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${i <= product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="w-full h-56 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
        <button className="absolute p-2 bg-gray-700 text-white bottom-0 left-0 right-0 w-full hover:bg-gray-600 opacity-0 transform translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
          Add to Cart
        </button>
        <div className="absolute pr-2 top-8 right-0 flex flex-col space-y-2 opacity-0  group-hover:opacity-100 transition-opacity duration-500">
          <button className="bg-white py-1 px-2 rounded-full transform translate-x-5 group-hover:translate-x-0 transition-all duration-500 delay-100">
            <i className="fas fa-heart text-gray-400 hover:text-gray-600"></i>
          </button>
          <button className="bg-white p-1 rounded-full transform translate-x-5 group-hover:translate-x-0 transition-all duration-500 delay-200">
            <i className="fas fa-search text-gray-400 hover:text-gray-600"></i>
          </button>
          <Link  to={`/productDetails/${product.id}`} className="bg-white p-1 rounded-full transform translate-x-5 group-hover:translate-x-0 transition-all duration-500 delay-300">
            <i className="fas fa-sync-alt text-gray-400 hover:text-gray-600"></i>
          </Link>
        </div>
      </div>

      <div className="mt-2 pb-5">
        <div className="flex justify-center m-5">{renderStars()}</div>
        <h2 className="text-gray-600 text-center">{product.title}</h2>
        <p className="font-semibold text-xl text-center">${product.price}</p>
      </div>
    </>
  );
}

export default Product;
