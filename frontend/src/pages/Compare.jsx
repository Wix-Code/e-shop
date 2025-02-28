import React, { useContext } from 'react'
import "./compare.css"
import { dummyData } from '../dummy/data'
import { createStore } from '../libs/context';
import { useDispatch, useSelector } from 'react-redux';
import { resetCompare } from '../slices/compareSlice';
import { addToCart } from '../slices/cartSlice';

const Compare = () => {

  //const { addToCart, compare, resetCompare } = useContext(createStore);
  const cart = useSelector((state) => state.cart.cart);
  const compare = useSelector((state) => state.compare.compare);
  const dispatch = useDispatch();

  return (
    <div className='compare'>
      <div className="compare_reset">
        <h3>Compare Products</h3>
        <h5 onClick={()=>dispatch(resetCompare())}>Reset Compare List</h5>
      </div>
      {
        compare.length === 0 ?
          <div className='no_compare'>
            <img src="https://ebeosi.com.ng/public/assets/img/nothing.svg" alt="" />
            <h3>Your comparison list is empty</h3></div> :
        <div className="compare1">
          {
            compare.map((item) => {
              return (
                <div key={item.id} className='compare2'>
                  <div className="compare_img">
                    <p>Name</p>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="compare_img">
                    <p>Image</p>
                    <img src={item.image} alt="" />
                  </div>
                  <div className="compare_img">
                    <p>Price</p>
                    <h4>&#8358;{new Intl.NumberFormat('en-US').format(item.price)}</h4>
                  </div>
                  <div className="compare_img">
                    <p>Brand</p>
                    <span>DeRok</span>
                  </div>
                  <div className="compare_img">
                    <p>Brand</p>
                    <span>DeRok</span>
                  </div>
                  <div className="compare_btn">
                    <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Compare