import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './subpages/Navbar'
import Rout from './Rout'
import Footer from './subpages/Footer'
import ResponsiveNavbar from './subpages/ResponsiveNavbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Rout />
        <Footer />
        <ResponsiveNavbar />
      </div>
    </>
  )
}

export default App
