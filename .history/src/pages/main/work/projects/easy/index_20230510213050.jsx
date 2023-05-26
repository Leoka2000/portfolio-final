import React from 'react'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a href='https://beamish-babka-ea7d99.netlify.app/' className='individual-wrapper'>
      <span id='work-5'><MdTravelExplore/></span>
      <h1>ScholarSearch</h1>
      <p>This is a scholarship searching application made for EasyTrammit, a startup that help students get scholarhips abroad</p>
      <div className='key-wrapper'>
        <span>Form validation</span>
        <span>Firebase</span>
      </div>
      <a href='https://www.facebook.com/'><AiFillGithub/><p id='hover'>- Source code</p></a>
    </a>
  )
}

export default index