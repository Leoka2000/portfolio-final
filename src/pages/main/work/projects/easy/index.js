import React from 'react'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a href='https://beamish-babka-ea7d99.netlify.app/' className='individual-wrapper'>
      <span id='work-5'><MdTravelExplore/></span>
      <h1>Easy Tramitt</h1>
      <p>My friend has a start up for helping Brazilian students in achieving scholarships abroad. This was my first website, I made it to help her and promote the business</p>
      <div className='key-wrapper'>
        <span>Form validation</span>
        <span>Firebase</span>
      </div>
      <a href='https://www.facebook.com/'><AiFillGithub/><p id='hover'>- Source code</p></a>
    </a>
  )
}

export default index