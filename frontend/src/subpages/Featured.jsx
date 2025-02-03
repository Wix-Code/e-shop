import React, { useContext } from 'react'
import { dummyData } from '../dummy/data'
import Card from './Card'
import './featured.css'
import Slider from "react-slick";

/*function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}*/


import { FaHeart } from 'react-icons/fa';
import { createStore } from '../libs/context';



const Featured = () => {

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
          slidesToShow: 1,
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

export default Featured

 
       