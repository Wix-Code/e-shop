import React, { useContext, useEffect, useState } from 'react'
import "./itemsinglepage.css"
import Featured from '../subpages/Featured'
import { CiHeart } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaMinus, FaPlus, FaShoppingCart, FaStar, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { dummyData } from '../dummy/data';
import Slider from 'react-slick';
import { createStore } from '../libs/context';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decCart, incCart } from '../slices/cartSlice';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../slices/productSlice';

const ItemSinglePage = () => {

  //const { decCart, incCart } = useContext(createStore)
  const { product, loading, error } = useSelector((state) => state.product);

  const [img, setImg] = useState(product?.img?.[0])
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { id } = useParams();
  //const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  //const image = ["https://ebeosi.com.ng/public/uploads/all/qSySmwv8CDTXfrztGKUagb5JFMeENtfjkoT5a1Go.jpg", "https://ebeosi.com.ng/public/uploads/all/XKC1hMAgPpxs54QmMlOwk9XOfpWsj6x6y3sp7vBQ.jpg", "https://ebeosi.com.ng/public/uploads/all/oCx7Y2R8To7ewEXhtvYFRsfWxhZKjghy6cIJioRa.jpg","https://ebeosi.com.ng/public/uploads/all/MKUDDB8vtJPOHhkwY2VpLZTYynd8EPuf4iLUPQlh.jpg"]
  

  var settings = {
    infinite: true,
    speed: 4000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 4000,
    slidesToShow: 3,
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
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <div className='item_single'>
      <div className="single_div">
        <div className="single1">
          <div className="set_img">
            <img src={product?.img?.[0]} alt="" />
          </div>
          <div className="set_img1">
            {
              product?.img?.map((img, i) => {
                return (
                  <div className={setImg === img ? "active" : "img_set" }>
                    <img key={i} src={img} alt="" onClick={() => setImg(img)} className={setImg === img ? "select" : "" } />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="single2">
          <h4>{product?.title}</h4>
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
            <span>{product?.brand}</span>
          </div>
          <div className="sin_add">
            <p>Quantity</p>
            <div className="sin_addto">
              <button onClick={() => dispatch(decCart(item.id))}><FaMinus /></button>
              <span>1</span>
              <button onClick={() => dispatch(incCart(item.id))}><FaPlus /></button>
            </div>
          </div>
          <div className="sin_total">
            <p>Total Price</p>
            <h2>&#8358;{new Intl.NumberFormat('en-US').format(product?.price)}</h2>
          </div>
          <div className="sin_btns">
            <div onClick={() => dispatch(addToCart(item))} className="sin_cart">
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
          <div className="top_pro">
            <h4>Top Selling Products</h4>
            <div className="top2">
              {
                dummyData.slice(0, 7).map((item) => {
                  return (
                    <div className="review_item" key={item.id}>
                      <img src={item.image} alt="" />
                      <div className="top_div">
                        <p>{product?.title.slice(0, 30)}...</p>
                        <h4>&#8358;{new Intl.NumberFormat('en-US').format(product?.price)}</h4>
                    </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="top1">
          <div className="description">
            <h4>Reviews & Ratings</h4>
            <div className="rate_div">
              <div className="rate_left">
                <h2 style={{fontSize: "30px", fontWeight: "500"}}>0</h2>
                <span>out of 5.0</span>
                <div className="rate_stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span>(0 reviews)</span>
              </div>
              <div className="rate_right">
                <button>Rate this Product</button>
              </div>
            </div>
           <p>There have been no reviews for this product yet.</p>
          </div>
          <div className="description">
            <h4>Description</h4>
            <span>{product?.description}</span>
          </div>
          <div className="description">       
            <h4>Related Products</h4>
            <div className="related2">
             
                {
                  dummyData.slice(0, 3).map((item) => {
                    return (
                      <div className="related_item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <h4>&#8358;{new Intl.NumberFormat('en-US').format(item?.price)}</h4>
                      </div>
                    )
                  })
                }
           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemSinglePage