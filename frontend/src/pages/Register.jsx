import React from 'react'
import { Formik } from "formik"
import "./auth.css"

const Register = () => {
  return (
    <Formik>
      <form action="">
        <h2>Create an account.</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="username">Email</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="username">Password</label>
          <input type="text" id="username" name="username" />
        </div>
      </form>
    </Formik>
  )
}

export default Register