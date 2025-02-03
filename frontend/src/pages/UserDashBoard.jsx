import SideBar from "../subpages/SideBar"
import Wishlist from "./Wishlist"
import { Route, Routes } from 'react-router-dom'
import "./userdashboard.css"
import Compare from "./Compare"
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import Profile from "./Profile"
import { FaCodeCompare } from "react-icons/fa6"

export const UserDashBoard = ({children}) => {
  return (
    <div className="user_dash">
      <SideBar />
      <div className="user_dash_body">
        {children}
      </div>
    </div>
  )
}


export const dashlinks = [
  {
    path: '/compare',
    name: "Compare",
    element: <Compare />,
    icon: <FaCodeCompare />
  },
  {
    name: "Wishlist",
    path: '/wishlist',
    element: <Wishlist />,
    icon: <FaRegHeart />
  },
  {
    name: "Wishlist",
    path: '/wishlist',
    element: <Wishlist />,
    icon: <FaRegHeart />
  },
  {
    name: "Manage Profile",
    path: '/profile',
    element: <Profile />,
    icon: <FaRegUser />
  },
]

const PrivateRoute = () => {
  return (
    <UserDashBoard>
      <Routes>
        {dashlinks.map((link) => (
          <Route key={link.path} path={link.path} element={link.element} />
        ))}
      </Routes>
    </UserDashBoard>
  )
}
export default PrivateRoute