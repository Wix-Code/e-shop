import React from 'react'
import "./responsivenavbar.css"
import { FiHome } from "react-icons/fi";
import { BiSolidCategory } from "react-icons/bi";
import { FaShoppingCart } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md';
import { Link, useLocation } from "react-router-dom"

const ResponsiveNavbar = () => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className='responsive'>
      <Link to="/">
        <div className={pathname === "/" ? "active" : "respon"}>
          <FiHome />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/store">
        <div className={pathname === "/store" ? "active" : "respon"}>
          <BiSolidCategory />
          <p>Categories</p>
        </div>
      </Link>
      <Link to="/cart">
        <div className={pathname === "/cart" ? "active" : "respon"}>
          <FaShoppingCart />
          <p>Cart</p>
        </div>
      </Link>
      <div className="respon">
        <MdAccountCircle />
        <p>My Accounts</p>
      </div>
    </div>
  )
}

export default ResponsiveNavbar