import React, { useState } from 'react'
import "./auth.css"
import { Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../slices/authSlice'
import { toast } from 'react-toastify'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => { 
    e.preventDefault();
    console.log(userData) 
    try {
      const result = await dispatch(loginUser(userData));
      if (result.payload.success === true) {
        toast(result.payload.message)
        navigate("/")
      } else {
        toast.error(result.payload.message)
        //setUserData({ email: "", password: "" })
      };
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Formik>
      <div className="auth">
        <form action="" onSubmit={handleSubmit}>
          <h2>Welcome Back !</h2>
          <div className='form_inp'>
            <label htmlFor="username">Email</label>
            <input type="email" onChange={handleChange} required name="email" placeholder='Email' />
          </div>
          <div className='form_inp'>
            <label htmlFor="username">Password</label>
            <input type="text" id="username" required onChange={handleChange} name="password" placeholder='Password' />
          </div>
          <div className="forgot">
            <Link to="/forgot-password"><span>Forgot Password?</span></Link>
          </div>
          <button type="submit">Log In</button>
          <div className="google">
            <button type='submit'>Log In with Google</button>
          </div>
          <div className="have">
            <p>Don't have an account?</p>
            <Link to="/registration">
              <span>Register Now</span>
            </Link>
          </div>
        </form>
      </div>
    </Formik>
  )
}

export default Login