import React, { useContext } from 'react'
import { dummyData } from '../dummy/data'
import "./wishlist.css"
import { MdDelete } from "react-icons/md";
import { createStore } from '../libs/context'
import { Link } from 'react-router-dom'

const Wishlist = () => {

   const { addToCart, wishlist } = useContext(createStore)
  return (
    <div className='wishlist'>
      <h3>Wishlist</h3>
      {
        wishlist.length === 0 ? <div className='no_compare'>
        <img src="https://ebeosi.com.ng/public/assets/img/nothing.svg" alt="" />
        <h3>Your Wishlist is empty</h3></div> :
        <div className="wish">
          {
            wishlist.map((item) => {
              return (
                <div className='card' key={item.id}>
                  <div className="card_img">
                    <img src={item.image} alt="" onClick={() => setOpen(!open)} />
                    <div className="card_wish">
                      <p><MdDelete /></p>
                    </div>
                    <button onClick={()=>addToCart(item)}>Add to cart</button>
                    <h5>{item.instock}</h5>
                  </div>
                  <Link to={`/product/${item.id}`}>
                    <span>{item.name.slice(0, 40)}...</span>
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