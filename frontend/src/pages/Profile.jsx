import React from 'react'
import "./profile.css"
import { FaPlus } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className='profile'>
      <h3>Manage Profile</h3>
      <div className="mana_pro">
        <div className="profile1">
          <h4>Basic Info</h4>
          <div className="pro_data">
            <div className="pro_inp">
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder='Your Name'/>
            </div>
            <div className="pro_inp">
              <label htmlFor="">Your Phone</label>
              <input type="text" placeholder='Your Phone'/>
            </div>
            <div className="pro_inp">
              <label htmlFor="">Your Password</label>
              <input type="password" placeholder='Your Password'/>
            </div>
            <div className="pro_inp">
              <label htmlFor="">Your Email</label>
              <input type="text" placeholder='Your Email'/>
            </div>
          </div>
          <div className="pro_btn">
            <button>Update Profile</button>
          </div>
        </div>
        <div className="profile1">
          <h4>Address</h4>
          <div className="pro_add">
            <FaPlus />
            <h4>Add New Address</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile