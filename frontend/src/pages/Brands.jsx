import React from 'react'
import "./brand.css"
import { brandsData } from '../dummy/data'
import { Link } from 'react-router-dom'

const Brands = () => {
  return (
    <div className='brands'>
      <div className="brand_div">
        <h2>All Brands</h2>
        <div className="brand_cat">
          <Link to="/"><p>Home    /</p></Link>
          <span>"All Brands"</span>
        </div>
      </div>
      <div className="brand">
        {
          brandsData.map((data, id) => {
            return (
              <div key={id} className="brand-logo">
                <img src={data.image} alt={data.name} />
                <h4>{data.name}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Brands