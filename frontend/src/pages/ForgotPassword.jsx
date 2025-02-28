import React from 'react'
import "./auth.css"
import { Formik } from 'formik'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <Formik>
      <div className="auth">
        <form action="">
          <h2>Forgot Password?</h2>
          <div className='form_inp'>
            <label htmlFor="username">Email</label>
            <input type="text" id="username" name="username" placeholder='Email' />
          </div>
          <div className="forgot">
            <Link to="/login"><span>Back to login</span></Link>
          </div>
          <button type="submit">Send Password Reset Link</button>
        </form>
      </div>
    </Formik>
  )
}

export default ForgotPassword