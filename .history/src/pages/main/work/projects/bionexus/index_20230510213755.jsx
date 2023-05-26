import React from 'react'
import {FaBusinessTime} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a target='_blank' href='https://lustrous-kangaroo-8bc907.netlify.app/' className='individual-wrapper'>
    <span id='work-2'><FaBusinessTime/></span>
    <h1>BioNexusJr</h1>
    <p>As the co-founder and Chief Technology Officer of BioNexusJr, the first junior enterprise in Hungary, this project was created to serve as a landing page.</p>
    <div className='key-wrapper'>
    <span>React</span>
      <span>I-18next</span>
      <span>Form validation</span>
    </div>
    <a href='https://www.facebook.com/'><AiFillGithub/><p id='hover'>- Source code</p></a>
  </a>
  )
}

export default index
