import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer1">
        <div className="foot1">
          <h4>USEFULL LINKS</h4>
          <div className="zone">
            <ul>
              <li>About Us</li>
              <li>Returns Policy</li>
              <li>Privacy Notice</li>
            </ul>
          </div>
        </div>
        <div className="foot2">
          <h4>CONTACTS</h4>
          <div className="address">
            <p>Address</p>
            <a>Suite 315, 3rd Floor African Re Building, Plot 1679 Karimu Kotun Street, Victoria Island, Lagos.</a>
          </div>
          <div className="address">
            <p>Phone</p>
            <a href="tel:+2348126829146">+234 812 682 9146</a>
          </div>
          <div className="address">
            <p>Email</p>
            <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
          </div>
        </div>
        <div className="foot3">
          <h4>ACCOUNT ZONE</h4>
          <div className="zone">
            <ul>
              <li>Order History</li>
              <li>Logout</li>
              <li>My Wishlist</li>
              <li>Track Order</li>
              <li>Order History</li>
            </ul>
          </div>
        </div>
        <div className="foot4">
          <img src="https://ebeosi.com.ng/public/uploads/all/uKneTO5jE6fdGB1ToznpUZg20jQkQjqkkpjNTzib.png" alt="" />
          <p>Ebeosi, a leading online wholesale/distribution marketplace in Africa, distributing high quality cosmetics, fashion, groceries, computer accessories, sporting goods, health & beauty, Mobile Accessories, and more at an amazing price.</p>
          <div className="foot_links">
            <h4>Follow Us</h4>
            <div className="foot_icons">
              <button></button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="f20">
          <p>© 2023 Ebeosi Inc.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer