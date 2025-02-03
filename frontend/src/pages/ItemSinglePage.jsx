import React from 'react'
import "./itemsinglepage.css"
import Featured from '../subpages/Featured'
import { CiHeart } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaMinus, FaPlus, FaShoppingCart, FaStar, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { dummyData } from '../dummy/data';

const ItemSinglePage = () => {
  return (
    <div className='item_single'>
      <div className="single_div">
        <div className="single1">
          <img src="https://ebeosi.com.ng/public/uploads/all/qSySmwv8CDTXfrztGKUagb5JFMeENtfjkoT5a1Go.jpg" alt="" />
        </div>
        <div className="single2">
          <h4>Friska Instant Baby and Toddler Cereal with Maize & Pineapple</h4>
          <div className="sin_rate">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>(12 reviews)</span>
          </div>
          <div className="sin_com">
            <div className="single_com">
              <CiHeart />
              <p>Add to compare</p>
            </div>
            <div className="single_com">
              <CiHeart />
              <p>Add to compare</p>
            </div>
          </div>
          <div className="sin_brand">
            <p>Brand</p>
            <span>HP Laptop</span>
          </div>
          <div className="sin_add">
            <p>Quantity</p>
            <div className="sin_addto">
              <button><FaMinus /></button>
              <span>1</span>
              <button><FaPlus /></button>
            </div>
          </div>
          <div className="sin_total">
            <p>Total Price</p>
            <h2>&#8358;{new Intl.NumberFormat('en-US').format(4000)}</h2>
          </div>
          <div className="sin_btns">
            <div className="sin_cart">
              <FaShoppingCart />
              <h4>Add to cart</h4>
            </div>
            <div className="sin_cart">
              <FaShoppingCart />
              <h4>Buy Now</h4>
            </div>
          </div>
          <div className="sin_links">
            <button><a href=""><FaFacebookF /></a></button>
            <button><a href=""><FaLinkedinIn /></a></button>
            <button><a href=""><FaTwitter /></a></button>
            <button><a href=""><FaWhatsapp /></a></button>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="top">
          <h4>Top Selling Products</h4>
          <div className="top2">
            {
              dummyData.slice(0, 7).map((item) => {
                return (
                  <div className="review_item" key={item.id}>
                    <img src={item.image} alt="" />
                    <div className="top_div">
                      <p>{item.name.slice(0, 30)}...</p>
                      <h4>&#8358;{new Intl.NumberFormat('en-US').format(item.price)}</h4>
                   </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="top1">
          <div className="description">
            <h4>Description</h4>
            <span>Masters Instant Noodles Chicken Flavour Gout Poulet with Vegetables & African Spices 120g.</span>
          </div>
          <div className="description">
            <h4>Description</h4>
            <span>Masters Instant Noodles Chicken Flavour Gout Poulet with Vegetables & African Spices 120g.</span>
          </div>
        </div>
      </div>
      <Featured />
    </div>
  )
}

export default ItemSinglePage