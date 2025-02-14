import React, { useContext } from 'react'
import Slider from "react-slick";
import { createStore } from '../libs/context';
import Card from './Card';

const Drinks = () => {
  const { data } = useContext(createStore)
    
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
  return (
    <div className='featured'>
      <h1>Drinks</h1>
      <div className='feature'>
        <Slider {...settings}>
          {
            data.map((item) => {
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

export default Drinks