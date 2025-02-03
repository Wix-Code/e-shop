import React, { useContext, useState } from 'react'
import "./navbar.css"
import { NavLinks } from '../dummy/data'
import { IoNotifications, IoSearchOutline } from "react-icons/io5";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping, FaCodeCompare } from "react-icons/fa6";
import { Link, useLocation} from 'react-router-dom';
import { createStore } from '../libs/context';
import { RiComputerLine } from "react-icons/ri";
import { CiFaceFrown } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {

  const { cart, cartQty, compare, wishlist } = useContext(createStore)
  const [openCat, setOpenCat] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  console.log(pathname)

  const user = true
  
  return (
    <div className='navbar'>
      <div className='navba'>
        <div className='nav1'>
          <p>We will serve you better</p>
          <p>Hotline: +234 812 682 9146</p>
        </div>
        <div className='nav2'>
          <img src="https://ebeosi.com.ng/public/uploads/all/keKlwReqyUyfJmfK6M9bFB8JVF9DgzDQ9ZFBBNmm.png" alt="" />
          <div className='nav_inp'>
            <input type="text" placeholder="I am searching for.." id="" />
            <button><IoSearchOutline /></button>
          </div>
          <div className='nav_notify'>
            <Link to="/compare"><div className='notify'>
              {compare.length > 0 ? <button>{compare.length}</button> : null} 
              <FaCodeCompare className='ic'/>
            </div></Link>
            <Link to="/compare">
              <div className='notify'>
                {compare.length > 0 ? <button>{compare.length}</button> : null} 
                <IoNotifications className='ic'/>
              </div>
            </Link>
            <Link to="/wishlist">
              <div className='notify'>
                {wishlist.length > 0 ? <button>{wishlist.length}</button> : null}
                <FaHeart className='ic'/>
              </div>
            </Link>
          </div>
          <div className='nav_log'>
            {
              user? (
                <div className='nav_ava'>
                  <img src="https://ebeosi.com.ng/public/assets/img/avatar-place.png" alt="" />
                  <h5>Ogbonna Ugochukwu</h5>
                  <div className="nav_hover">
                    <Link to="/profile">
                      <div className='cat_open' onClick={() => setOpenCat(false)}>
                        <RiComputerLine /> 
                        <p>Purchase History</p>
                      </div>
                    </Link>
                    <Link to="/profile">
                      <div className='cat_open' onClick={() => setOpenCat(false)}>
                        <FaRegUser /> 
                        <p>Profile</p>
                      </div>
                    </Link>
                    <Link to="/compare">
                      <div className='cat_open' onClick={() => setOpenCat(false)}>
                        <FaCodeCompare /> 
                        <p>Compare</p>
                      </div>
                    </Link>
                    <Link to="/wishlist">
                      <div className='cat_open' onClick={() => setOpenCat(false)}>
                        <FaHeart  /> 
                        <p>Wishlist</p>
                      </div>
                    </Link>
                    <div className='cat_out' onClick={() => setOpenCat(false)}>
                      <RiComputerLine /> 
                      <span>Logout</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='nav_log'>
                    <p>Login</p>
                    <span>|</span>
                  <p>Registration</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className='nav3'>
        <div className='nav_three'>
          <div className='cate' onClick={() => setOpenCat(!openCat)}>
              <h3>Categories</h3>
              <p>(See All)</p>
              <IoIosArrowDown />
          </div>
          {
            openCat &&
            <div className="cat_drop">
              <div className='cat_open' onClick={() => setOpenCat(false)}>
                <RiComputerLine /> 
                <p>Electronics</p>
              </div>
              <div className='cat_open' onClick={() => setOpenCat(false)}>
                <RiComputerLine /> 
                <p>Grocery & Gourmet Food
                </p>
              </div>
              <div className='cat_open' onClick={() => setOpenCat(false)}>
                <RiComputerLine /> 
                <p>Pasta</p>
              </div>
              <div className='cat_open' onClick={() => setOpenCat(false)}>
                <RiComputerLine /> 
                <p>Beauty & Hair</p>
              </div>
              <div className='cat_open' onClick={() => setOpenCat(false)}>
                <RiComputerLine /> 
                <p>Health</p>
              </div> 
              <div className='cat_open' onClick={() => setOpenCat(false)}>
                <RiComputerLine /> 
                <p>Mobile Accessories</p>
              </div>    
            </div>
          }
          <div className='navlink'>
            {
              NavLinks.map((link) => {
                return (
                  <div key={link.name}>
                    <Link to={link.to} className={pathname === link.to ? "active" : ""}>{link.name}</Link>
                  </div>
                )
              })
            }
          </div>
          <Link >
            <div className='cart_btn' onClick={() => setCartOpen (!cartOpen)}>
              <FaCartShopping style={{fontSize: "22px"}} />
              <h4>&#8358;{new Intl.NumberFormat('en-US').format(cartQty)}</h4>
              <p>({cart.length} Items)</p>
              {
                cartOpen && (
                  <div className="cart_scroll">
                    {
                      cart.length === 0 ? (<div className='nav_face'>
                        <CiFaceFrown style={{fontSize: "50px"}} />
                        <h3>Your Cart is empty</h3>
                      </div>) :
                        (
                          <div className='cart_sel'> 
                            <h3>Cart Items</h3>
                            <hr />
                            <div className="open_cart">
                            {cart.map((item) => (
                              <div key={item.id} className="car_del">
                                <img src={item.image} alt="" />
                                <div className="sel_price">
                                  <h5>{item.name}</h5>
                                  <p>&#8358;{new Intl.NumberFormat('en-US').format(item.price)}</p>
                                </div>
                                <LiaTimesSolid style={{fontSize: "30px"}}/>
                              </div>
                            ))}
                            </div>
                            <hr />
                            <div className="cart_tot">
                              <p>Sub Total</p>
                              <h2>&#8358;{new Intl.NumberFormat('en-US').format(cart.reduce((acc, curr) => acc + curr.price, 0))}</h2>
                            </div>
                            <hr />
                            <div className="cart_lin">
                              <Link to="/cart"><button>View Cart</button></Link>
                              <Link to="/checkout"><button>Checkout</button></Link>
                            </div>
                          </div>
                      )
                    }
                  </div>
                )
              }
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar