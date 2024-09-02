import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <Link to={"/cart"} className="p-2 relative">
    <i className="fas fa-shopping-cart text-xl text-gray-500"></i>
    <span className="absolute top-0 right-0 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
    </Link>
  )
}

export default Cart
