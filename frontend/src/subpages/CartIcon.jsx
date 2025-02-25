import React from 'react'
import "./carticon.css"
import { BsCart } from 'react-icons/bs'

const CartIcon = () => {
  return (
    <div className='icon_icon'>
      <div className="deli_icon">
        <BsCart className='bs' />
        <h4>1. My Cart</h4>
      </div>
      <div className="deli_icon">
        <BsCart className='bs' />
        <h4>2. Order</h4>
      </div>
      <div className="deli_icon">
        <BsCart className='bs' />
        <h4>3. Payment</h4>
      </div>
      <div className="deli_icon">
        <BsCart className='bs' />
        <h4>4. Confirmation</h4>
      </div>
    </div>
  )
}

export default CartIcon