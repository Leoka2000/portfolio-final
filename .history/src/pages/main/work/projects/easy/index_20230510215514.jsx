import React from 'react'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import video from '../../../../../assets/ScholarSearch.mp4'

const index = () => {
  return (
    <a target='_blank'  href='https://beamish-babka-ea7d99.netlify.app/' className='individual-wrapper'>
      <span id='work-5'><MdTravelExplore/></span>
      <h1>ScholarSearch</h1>
      <p>This is a full stack application that was made for EasyTramitt, a startup that help students from Brazil to get scholarhips abroad.</p>
      <div className='key-wrapper'>
        <span>Laravel / PHP</span>
        <span>React</span>
        <span>REST API</span>
      </div>
      <a href='https://www.facebook.com/'><AiFillGithub/><p id='hover'>- Source code</p></a>
    </a>
  )
}

export default index