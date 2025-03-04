import React from 'react'
import "./purchase.css"
import { dummyData } from '../dummy/data'

const Purchase = () => {
  return (
    <div className='purchase'>
      <h3>Purchase History</h3>
      <div className="purchase_img">
        <img src="https://ebeosi.com.ng/public/assets/img/nothing.svg" alt="" />
        <h3>Nothing found</h3>
      </div>
      <div className="purchase_table">
        {
          dummyData.map((item) => {
            return (
              <div key={item.id} className='purchase_row'>
                <div className="purchase_cell">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="purchase_del">
                  <h4>{item.name}</h4>
                  <p>&#8358;{new Intl.NumberFormat('en-US').format(item.price)}</p>
                  <p>Qty: 1</p>
                  <span>Delivered</span>
                  <button>Write a review</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Purchase