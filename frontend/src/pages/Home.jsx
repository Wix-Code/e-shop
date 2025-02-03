import React from 'react'
import './home.css'
import Featured from '../subpages/Featured'
import Banner from '../subpages/Banner'
import Video from '../subpages/Video'

const Home = () => {
  return (
    <div className='home'>
      <Video />
      <Featured />
      <Featured />
      <Banner />
    </div>
  )
}

export default Home