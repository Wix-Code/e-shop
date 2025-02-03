import React, { useContext } from 'react'
import './cart.css'
import { createStore } from '../libs/context'
import { FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Cart = () => {

  const { cart, cartQty } = useContext(createStore)
  console.log(cart)
  return (
    <div className='cart'>
      <div className="cart_div">
        {
          cart.length === 0 ? (
            <div className='cart_item'>No Item</div>
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
                          <button onClick={() => decCart(item)}><FaMinus /></button>
                          <span>{item.qty}</span>
                          <button onClick={() => incCart(item)}><FaPlus /></button>
                        </div>
                        <div className="cart_price">
                          <h4>&#8358;{item.price}</h4>
                          <h3>&#8358;{item.price * item.qty}</h3>
                          <button onClick={() => removeFromCart(item)}><FaTimes /></button>
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
                  <h4><FaArrowLeft /> Return to shop</h4>
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