import React from 'react'
import "./auth.css"
import { Formik } from 'formik'
import { Link } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

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
    console.log(userData) 
    try {
      const result = await dispatch(registerUser(userData));
      if (result.payload) navigate("/");
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
            <input type="email" onChange={handleChange} id="username" name="email" placeholder='Email' />
          </div>
          <div className='form_inp'>
            <label htmlFor="username">Password</label>
            <input type="text" id="username" onChange={handleChange} name="password" placeholder='Password' />
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