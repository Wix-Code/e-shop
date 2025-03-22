import React, { useContext } from 'react'
import Slider from "react-slick";
import { createStore } from '../libs/context';
import Card from './Card';
import { dummyData } from '../dummy/data';
import { useSelector } from 'react-redux';

const Baby = () => {
  //const { data } = useContext(createStore)
  const { products, loading, error } = useSelector((state) => state.products);
    
    var settings = {
      infinite: true,
      speed: 4000,
      autoplay: true,
      cssEase: "linear",
      autoplaySpeed: 4000,
      slidesToShow: 5,
      slidesToScroll: 1,
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
  return (
    <div className='featured'>
      <h1>Beauty, Health & Hair</h1>
      <div className='feature'>
        <Slider {...settings}>
          {
            products.filter((product) => product.cat === "Drinks").map((item) => {
              return (
               <Card item={item} key={item.id} />
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Baby