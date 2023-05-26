import React from 'react'
import {FaBusinessTime} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a target='_blank' href='https://bionexusjr.com' className='individual-wrapper'>
    <span id='work-2'><FaBusinessTime/></span>
    <h1>BioNexusJr</h1>
    <p>Landing page of BioNexusJr, Hungary's first junior enterprise. Integrated with i18next's API for implementing a translation feature.</p>
    <div className='key-wrapper'>
    <span>React</span>
      <span>i18next</span>
      <span>Form validation</span>
    </div>
    <a href='https://www.facebook.com/'><AiFillGithub/><p id='hover'>- Source code</p></a>
  </a>
  )
}

export default index
