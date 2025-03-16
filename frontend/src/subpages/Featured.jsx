import React, { useContext, useEffect } from 'react'
import { dummyData } from '../dummy/data'
import Card from './Card'
import './featured.css'
import Slider from "react-slick";


import { FaHeart } from 'react-icons/fa';
import { createStore } from '../libs/context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/productSlice';

const Featured = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  //if (loading) return <h2>Loading...</h2>;
  //if (error) return <h2>Error: {error.message}</h2>;
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
          slidesToScroll: 1
        }
      }
    ]
  };
  /*const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    adaptiveHeight: true,
  };*/
  return (
    <div className='featured'>
      <h1>Featured Products</h1>
      <div className='feature'>
        <Slider {...settings}>
          {
            products.map((item) => {
              return (
               <Card item={item} key={item._id} />
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Featured

 
       