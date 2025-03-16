import React, { useContext, useState } from 'react'
import './card.css'
import { FaHeart } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createStore } from '../libs/context';
import { Link } from 'react-router-dom';
import { FaCodeCompare } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { addCompare } from '../slices/compareSlice';
import { addToCart } from '../slices/cartSlice';
import { addWishlist } from '../slices/wishlistSlice';


const Card = ({ item }) => {
  //const { addToCart, addCompare, addWishlist } = useContext(createStore)
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.cart);
  const compare = useSelector((state) => state.compare.compare);
  const dispatch = useDispatch();
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  //console.log(item)
  return (
    <div className="cards">
      <div className='card' key={item.id}>
        <div className="card_img">
          <img src={item.img?.[0]} alt="" />
          <div className="card_wish">
            <p onClick={() => dispatch(addCompare(item))}><FaCodeCompare /></p>
            <p onClick={() => dispatch(addWishlist(item))}><FaHeart /></p>
          </div>
          <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
          {item.inStock === "true" ? <h5>outStock</h5> : <h5>inStock</h5>}
        </div>
        <Link to={`/product/${item._id}`}>
          <span>{item.title?.slice(0, 40)}...</span>
        </Link>
        <h3>&#8358;{new Intl.NumberFormat('en-US').format(item?.price)}</h3>
      </div>
    </div>
  )
}

export default Card