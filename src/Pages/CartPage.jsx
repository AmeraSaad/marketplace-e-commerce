import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const CartPage = () => {
  const { theme } = useContext(ThemeContext); 
  return (
    <main className={`${theme} main-content`}>
      <h1>CartPage</h1>
    </main>
  )
}

export default CartPage
