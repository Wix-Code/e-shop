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
    <div className="responsives">
      <div className='responsive'>
        <Link to="/">
          <div className={pathname === "/" ? "acti" : "respon"}>
            <FiHome />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/store">
          <div className={pathname === "/store" ? "acti" : "respon"}>
            <BiSolidCategory />
            <p>Categories</p>
          </div>
        </Link>
        <Link to="/cart">
          <div className={pathname === "/cart" ? "acti" : "respon"}>
            <FaShoppingCart />
            <p>Cart</p>
          </div>
        </Link>
        <div className="respon">
          <MdAccountCircle />
          <p>My Accounts</p>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveNavbar