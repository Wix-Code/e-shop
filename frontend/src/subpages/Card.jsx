import React, { useContext, useState } from 'react'
import './card.css'
import { FaHeart } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createStore } from '../libs/context';
import { Link } from 'react-router-dom';
import { FaCodeCompare } from 'react-icons/fa6';


const Card = ({ item }) => {
  const { addToCart, addCompare, addWishlist } = useContext(createStore)
  
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
          <img src={item.image} alt="" />
          <div className="card_wish">
            <p onClick={() => addCompare(item)}><FaCodeCompare /></p>
            <p onClick={() => addWishlist(item)}><FaHeart /></p>
          </div>
          <button onClick={()=>addToCart(item)}>Add to cart</button>
          <h5>{item.instock}</h5>
        </div>
        <Link to={`/product/${item.id}`}>
          <span>{item.name.slice(0, 40)}...</span>
        </Link>
        <h3>&#8358;{new Intl.NumberFormat('en-US').format(item?.price)}</h3>
      </div>
    </div>
  )
}

export default Card