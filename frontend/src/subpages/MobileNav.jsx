import React from 'react'
import "./mobilenav.css"
import { FaTimes } from 'react-icons/fa'
import { NavLinks } from '../dummy/data'
import { Link } from 'react-router-dom'
import { dashlinks } from '../pages/UserDashBoard'

const MobileNav = ({openSideBar, setOpenSideBar}) => {
  return (
    <div className='mobile'>
      <button onClick={() => setOpenSideBar(false)}><FaTimes /></button>
      <div className="mobile_side">
        <div className="mobi">
          {
            NavLinks.map((link) => {
              return (
                <div key={link.name}>
                  <Link to={link.to}><h4 onClick={() => setOpenSideBar(false)}>{link.name}</h4></Link>
                </div>
              )
            })
          }
        </div>
        <hr />
        <div className="mobil">
          {
            dashlinks.map((link) => {
              return (
                <div key={link.name}>
                  <Link to={link.to}><h4 onClick={() => setOpenSideBar(false)}>{link.name}</h4></Link>
                </div>
              )
            })
          }
        </div>
        <hr />
        <div className="mobil_btn">
          <h4 onClick={() => setOpenSideBar(false)}>Log Out</h4>
        </div>
      </div>
    </div>
  )
}

export default MobileNav