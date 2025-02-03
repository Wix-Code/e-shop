import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Brands from './pages/Brands'
import Home from './pages/Home'
import Store from './pages/Store'
import Cart from './pages/Cart'
import ItemSinglePage from './pages/ItemSinglePage'
import Compare from './pages/Compare'
import Wishlist from './pages/Wishlist'
import PrivateRoute from './pages/UserDashBoard'
import About from './pages/About'

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ItemSinglePage />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/*" element={<PrivateRoute />} />
    </Routes>
  )
}

export default Rout