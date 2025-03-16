import React, { useContext, useEffect } from 'react'
import Slider from "react-slick";
import { createStore } from '../libs/context';
import Card from './Card';
import { dummyData } from '../dummy/data';
import { fetchProducts } from '../slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Drinks = () => {
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
  return (
    <div className='featured'>
      <h1>Drinks</h1>
      <div className='feature'>
        <Slider {...settings}>
          {
            products.filter((product) => product.cat === "Drinks" ).map((item) => {
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