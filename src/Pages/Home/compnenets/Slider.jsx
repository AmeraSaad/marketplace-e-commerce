import React, { useContext } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from './Product';
import { ProductsContext } from '../../../context/ProductsContext';

const ProductSlider = () => {
  const {products} = useContext(ProductsContext);
  const productsSlice =products.slice(0, 5)

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="product-slider  dark:bg-gray-800 dark:text-white">
      <div className="mx-auto text-center pt-16 ">
      <h1 className="text-5xl mb-6"> Top Products</h1>
      <span className="block w-16 border-b-4 border-gray-600 mx-auto"></span>
      </div>
      <Slider {...settings} className='p-10'>
        {productsSlice.map(product => (
          <div key={product.id} className="px-20">
          <Product product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
