import React from 'react'
import { dashlinks } from '../pages/UserDashBoard'
import { Link } from 'react-router-dom'
import "./sidebar.css"


const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sides">
        <div className="side1">
          <img src="https://ebeosi.com.ng/public/assets/img/avatar-place.png" alt="" />
          <h4>Ogbonna Ugochukwu</h4>
          <span>ogbonna428alex@gmail.com</span>
        </div>
        <div className="side2">
        {
          dashlinks.map((item) => {
            return (
              <div key={item.path} className='side'>
                <Link to={item.path}>
                  <div className="side_btn">
                    {item.icon}
                    <button>{item.name}</button>
                  </div>
                </Link>
              </div>
            )
          })
        }
        </div>
        <div className="side3">
          <button>Sign Out</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar