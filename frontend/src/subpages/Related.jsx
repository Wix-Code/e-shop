import React from 'react'
import "./related.css"
import { dummyData } from '../dummy/data'

const Related = () => {
  return (
    <div className='related'>
      <div className="related1">
        <h3>Related Products</h3>
      </div>
      <div className="related2">
        {
          dummyData.slice(0, 4).map((item) => {
            return (
              <div className="related_item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <h3>&#8358;{new Intl.NumberFormat('en-US').format(item?.price)}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Related