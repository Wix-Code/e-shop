import React from 'react'
import "./responsivenavbar.css"
import { FiHome } from "react-icons/fi";
import { BiSolidCategory } from "react-icons/bi";
import { FaShoppingCart } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md';

const ResponsiveNavbar = () => {
  return (
    <div className='responsive'>
      <div className="respon">
        <FiHome />
        <p>Home</p>
      </div>
      <div className="respon">
        <BiSolidCategory />
        <p>Categories</p>
      </div>
      <div className="respon">
        <FaShoppingCart />
        <p>Cart</p>
      </div>
      <div className="respon">
        <MdAccountCircle />
        <p>My Accounts</p>
      </div>
    </div>
  )
}

export default ResponsiveNavbar