import React from 'react'
import "./order.css"

const Order = () => {
  return (
    <div className='order'>
      <div className="order1">
        <h2>Shipping Address</h2>
        <div className="order_form">
          <div className="order_inp">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder='First Name' />
          </div>
          <div className="order_inp">
            <label htmlFor="fname">Last Name</label>
            <input type="text" id="fname" name="fname" placeholder='Last Name' />
          </div>
          <div className="order_inp">
            <label htmlFor="fname">Phone No.</label>
            <input type="text" id="fname" name="fname" placeholder='Phone Number' />
          </div>
          <div className="order_inp">
            <label htmlFor="fname">Email</label>
            <input type="email" id="fname" name="fname" placeholder='Email' />
          </div>
          <div className="order_inp">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder='First Name' />
          </div>
          <div className="order_inp">
            <label htmlFor="fname">Street</label>
            <input type="text" id="fname" name="fname" placeholder='Street' />
          </div>
          <div className="order_inp">
            <label htmlFor="fname">Email</label>
            <input type="email" id="fname" name="fname" placeholder='Email' />
          </div>
        </div>
      </div>
      <div className="order2">
        <div className="order_tot">
          <h3>Total Ammount</h3>
          <div className="charges">
            <p>Delivery Charges</p>
            <span>1000</span>
          </div>
          <button>Pay Now</button>
        </div>
      </div>
    </div>
  )
}

export default Order