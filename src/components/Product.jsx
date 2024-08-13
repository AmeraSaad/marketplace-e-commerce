import React from 'react';

function Product({product}) {
  return (
    <>
      <div>
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain" />
      <button className="bg-gray-700 text-white p-2 rounded relative w-full bottom-10 opacity-0 hover:opacity-100">Add to Cart</button>
      </div>
      <div className="mt-2 pb-5">
        <div className="flex justify-center m-5 ">
          <i className="fas fa-star star-color"></i>
          <i className="fas fa-star star-color"></i>
          <i className="fas fa-star star-color"></i>
          <i className="fas fa-star star-color"></i>
          <i className="fas fa-star text-gray-300"></i>
        </div>
        <h2 className=" text-gray-600 text-center">{product.title}</h2>
        <p className="font-semibold text-xl text-center">${product.price}</p>
      </div>
    </>
  );
}

export default Product;
