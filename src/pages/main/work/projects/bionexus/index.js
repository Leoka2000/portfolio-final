import React from 'react'
import {FaBusinessTime} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a href='https://lustrous-kangaroo-8bc907.netlify.app/' className='individual-wrapper'>
    <span id='work-2'><FaBusinessTime/></span>
    <h1>Bionexus</h1>
    <p>I am the co-founder of BioNexus, the first junior enterprise in Hungary. I decided to put my programming skills in action and make the company's website. The project integrates the I-18next library for internationalization</p>
    <div className='key-wrapper'>
      <span>I-18next</span>
      <span>Form validation</span>
      <span>Firebase</span>
    </div>
    <a href='https://www.facebook.com/'><AiFillGithub/><p id='hover'>- Source code</p></a>
  </a>
  )
}

export default index
