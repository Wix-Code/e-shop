import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Compare from '../pages/Compare'
import Wishlist from '../pages/Wishlist'


export const dashlinks = [
  {
    id: 1,
    path: '/compare',
    name: "Compare",
    path: '/compare',
    element: <Compare />
  },
  {
    id: 2,
    name: "Wishlist",
    path: '/wishlist',
    element: <Wishlist />
  },
]

const PrivateRoute = () => {
  return (
    <Routes>
      {
        dashlinks.map(link => (
          <Route key={link.id} path={link.path} element={link.elment} />
        ))
      }
    </Routes>
  )
}

export default PrivateRoute