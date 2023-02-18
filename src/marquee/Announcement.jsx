import React from 'react'
import './styles.css'
import Marquee from 'react-fast-marquee'

const Announcement = () => {
  return (
      <div className='announcement'>
        <Marquee speed={60} gradient ={false} pauseOnHover>
        <div className='title-text1'>
          <span>Word Hunt</span>
          <span>&nbsp;&nbsp;me llamo samyak</span>
        </div>
        <div className = "title-text2">
          <span>Word Hunt</span>
          <span>&nbsp;&nbsp;me llamo samyak</span>
        </div>
        </Marquee>
      </div>
  )
}

export default Announcement
