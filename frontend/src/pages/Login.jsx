import React from 'react'
import "./auth.css"
import { Formik } from 'formik'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Formik>
      <div className="auth">
        <form action="">
          <h2>Welcome Back !</h2>
          <div className='form_inp'>
            <label htmlFor="username">Email</label>
            <input type="text" id="username" name="username" placeholder='Email' />
          </div>
          <div className='form_inp'>
            <label htmlFor="username">Password</label>
            <input type="text" id="username" name="username" placeholder='Password' />
          </div>
          <div className="forgot">
            <Link to="/forgot-password"><span>Forgot Password?</span></Link>
          </div>
          <button type="submit">Log In</button>
          <div className="google">
            <button>Log In with Google</button>
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