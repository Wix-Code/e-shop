import React, { useContext, useEffect } from 'react'
import { dummyData } from '../dummy/data'
import "./wishlist.css"
import { MdDelete } from "react-icons/md";
import { createStore } from '../libs/context'
import { addToCart } from '../slices/cartSlice';
import { deleteFromWishlist, fetchWishlist } from '../slices/wishlistSlice';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Wishlist = () => {

  //const { addToCart, wishlist, deleteFromWishlist } = useContext(createStore)
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWishlist()); // Fetch wishlist when component mounts
  }, [dispatch]);



  return (
    <div className='wishlist'>
      <h3>Wishlist</h3>
      {
        wishlist?.length === 0 ? <div className='no_compare'>
        <img src="https://ebeosi.com.ng/public/assets/img/nothing.svg" alt="" />
        <h3>Your Wishlist is empty</h3></div> :
        <div className="wish">
          {
            wishlist?.map((item) => {
              return (
                <div className='card' key={item._id}>
                  <div className="card_img">
                    <img src={item?.img || item?.img[0]} alt={item?.title} />
                    <div className="card_wish">
                      <p onClick={() => dispatch(deleteFromWishlist({ productId: item._id }))}><MdDelete /></p>
                    </div>
                    <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
                    {item.inStock === "true" ? <h5>outStock</h5> : <h5>inStock</h5>}
                  </div>
                  <Link to={`/product/${item._id}`}>
                    <span>{item?.title?.slice(0, 40)}...</span>
                  </Link>
                  <h3>&#8358;{new Intl.NumberFormat('en-US').format(item?.price)}</h3>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Wishlist