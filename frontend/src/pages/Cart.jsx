import React, { useContext } from 'react'
import './cart.css'
import { createStore } from '../libs/context'
import { FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartIcon from '../subpages/CartIcon';

const Cart = () => {

  const { cart, cartQty, decCart, incCart, removeFromCart } = useContext(createStore)
  console.log(cart)
  return (
    <div className='cart'>
      <CartIcon />
      <div className="cart_div">
        {
          cart.length === 0 ? (
            <div className='cart_item'>
              <img src="https://ebeosi.com.ng/public/assets/img/nothing.svg" alt="" />
              <h2>Your Cart is Empty</h2>
            </div>
          ) : (
              <div className='cart_items'>
                {
                  cart.map((item, id) => {
                    return (
                      <div className='cart_box' key={id}>
                        <div className="cart_img">
                          <img src={item.image} alt={item.name} />
                          <p>{item.name}</p>
                        </div>
                        <div className="cart_inc">
                          <button onClick={() => decCart(item.id)}><FaMinus /></button>
                          <span>{item.qty}</span>
                          <button onClick={() => incCart(item.id)}><FaPlus /></button>
                        </div>
                        <div className="cart_price">
                          <h4>&#8358;{item.price}</h4>
                          <h3>&#8358;{item.price * item.qty}</h3>
                          <button onClick={() => removeFromCart(item.id)}><FaTimes /></button>
                        </div>
                      </div>
                    )
                  })
                }
                <div className='cart_total'>
                  <p>Subtotal</p>
                  <h3>&#8358;{cartQty}</h3>
                </div>
                <div className='cart_rtn'>
                  <Link to="/">
                    <h4><FaArrowLeft /> Return to shop</h4>
                  </Link>
                  <button>Continue to Shipping</button>
                </div>
              </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart