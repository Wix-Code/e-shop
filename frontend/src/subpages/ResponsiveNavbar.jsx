import React from 'react'
import "./responsivenavbar.css"
import { FaBars, FaShoppingCart } from 'react-icons/fa'

const ResponsiveNavbar = () => {
  return (
    <div className='responsive'>
      <div className="respon">
        <FaBars />
        <p>Home</p>
      </div>
      <div className="respon">
        <FaBars />
        <p>Categories</p>
      </div>
      <div className="respon">
        <FaShoppingCart />
        <p>Cart</p>
      </div>
    </div>
  )
}

export default ResponsiveNavbar