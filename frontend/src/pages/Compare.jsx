import React, { useContext } from 'react'
import "./compare.css"
import { dummyData } from '../dummy/data'
import { createStore } from '../libs/context';

const Compare = () => {

  const { addToCart, compare } = useContext(createStore);

  return (
    <div className='compare'>
      <div className="compare_reset">
        <h3>Compare Products</h3>
        <h5 onClick={() => window.location.reload()}>Reset Compare List</h5>
      </div>
      {
        compare.length === 0 ?
        <h4>No items to compare</h4> :
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
                    <button onClick={()=>addToCart(item)}>Add to cart</button>
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