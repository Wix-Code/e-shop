import React from 'react'
import "./video.css"

const Video = () => {
  return (
    <div className='video'>
      <video src='https://ebeosi.com.ng/public/Ebeosi20.mp4'
        autoPlay
      />
    </div>
  )
}

export default Video