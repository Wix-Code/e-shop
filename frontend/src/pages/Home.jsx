import React from 'react'
import './home.css'
import Featured from '../subpages/Featured'
import Banner from '../subpages/Banner'
import Video from '../subpages/Video'
import Drinks from '../subpages/Drinks'
import Baby from '../subpages/Baby'
import Best from '../subpages/Best'

const Home = () => {
  return (
    <div className='home'>
      <Video />
      <Featured />
      <Banner />
      <Best />
      <Banner />
      <Drinks />
      <Baby />
    </div>
  )
}

export default Home