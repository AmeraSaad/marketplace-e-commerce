import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { theme } = useContext (ThemeContext); 

  const { productId } = useParams();
  return (
    <main className={`${theme} main-content`}>
      <h1>Product Details for {productId}</h1>
    </main>
  )
}

export default ProductPage
