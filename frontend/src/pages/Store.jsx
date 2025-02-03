import React, { useState } from 'react'
import "./store.css"
import { dummyData } from '../dummy/data'
import Card from '../subpages/Card'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';

const Store = () => {

  const [dropDown, setDropDown] = useState(false);
  const [dropPrice, setDropPrice] = useState(false);
  const [dropSize, setDropSize] = useState(false);
  const [dropFlavour, setDropFlavour] = useState(false);

  return (
    <div className='store'>
      <div className='store1'>
        <div className="store1_cate">
          <div onClick={() => setDropDown (!dropDown)} className="store_drop">
            <h4>Categories</h4>
            <button>{dropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
          </div>
          {
            dropDown &&
            <div className="store_dropdown">
              <div>Electronics</div>
              <div>Clothing</div>
              <div>Home & Garden</div>
              <div>Sports & Outdoors</div>
              <div>Toys & Gifts</div>
            </div>
          }
        </div>
        <div className="store1_cate">
          <div onClick={() => setDropPrice (!dropPrice)} className="store_drop">
            <h4>Categories</h4>
            <button>{dropPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
          </div>
          {
            dropPrice &&
            <div className="store_dropdown">
              <div>Electronics</div>
              <div>Clothing</div>
              <div>Home & Garden</div>
              <div>Sports & Outdoors</div>
              <div>Toys & Gifts</div>
            </div>
          }
        </div>
        <div className="store1_cate">
          <div onClick={() => setDropSize (!dropSize)} className="store_drop">
            <h4>Categories</h4>
            <button>{dropSize ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
          </div>
          {
            dropSize &&
            <div className="store_dropdown">
              <div>Electronics</div>
              <div>Clothing</div>
              <div>Home & Garden</div>
              <div>Sports & Outdoors</div>
              <div>Toys & Gifts</div>
            </div>
          }
        </div>
      </div>
      <div className="store2">
        <div className="store_nav">
          <Link to="/"><span>Home /</span></Link>
          <h4>"All Categories"</h4>
        </div>
        <div className="store_cat">
          <h2>All products</h2>
          <div className="store_pro">
            <div className="store_search1"></div>
            <div className="store_sort"></div>
          </div>
        </div>
        <div className="store_grid">
          {
            dummyData.map((item) => {
              return (
                <Card item={item} key={item.id} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Store