import React, { useState } from 'react'
import "./auth.css"
import { Link } from 'react-router-dom'

const Register = () => {

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => { 
    e.preventDefault();
    //const errors = await Yup.Schema.validate(userData)
    console.log(userData)  
  }

  return (
    <div className="auth">
      <form onSubmit={handleSubmit} action="">
        <h2>Create an account.</h2>
        <div className='form_inp'>
          <label htmlFor="username">First Name</label>
          <input type="text" name="fname" placeholder='First Name' onChange={handleChange} />
        </div>
        <div className='form_inp'>
          <label htmlFor="username">Last Name</label>
          <input type="text" name="lname" placeholder='Last Name' onChange={handleChange} />
        </div>
        <div className='form_inp'>
          <label htmlFor="username">Email</label>
          <input type="text" name="email" placeholder='Email' onChange={handleChange} />
        </div>
        <div className='form_inp'>
          <label htmlFor="username">Password</label>
          <input type="text" name="password" placeholder='Password' onChange={handleChange} />
        </div>
        <div className='form_inp'>
          <label htmlFor="username">Confirm Password</label>
          <input type="text" name="confirmPassword" placeholder='Confirm Password' onChange={handleChange} />
        </div>
        <button type="submit">Create Account</button>
        <div className="google">
          <button>Sign Up with Google</button>
        </div>
        <div className="have">
          <p>Already have an account?</p>
          <Link to="/login">
            <span>Log In</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register