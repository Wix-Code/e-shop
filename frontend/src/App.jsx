import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './subpages/Navbar'
import Rout from './Rout'
import Footer from './subpages/Footer'
import ResponsiveNavbar from './subpages/ResponsiveNavbar'
import { createStore } from './libs/context'

function App() {
  const { viewProduct, data } = useContext(createStore)

  return (
    <>
      <div>
        <Navbar />
        <Rout />
        <Footer />
          <div className="cardd">
            {
              viewProduct && (
                <div className="card_open">
                {data.map((item) => {
                   return (
                     <img src={item.image} alt="" />
                   )
                 })}
                </div>
              )
            }
          </div>
        <ResponsiveNavbar />
      </div>
    </>
  )
}

export default App
