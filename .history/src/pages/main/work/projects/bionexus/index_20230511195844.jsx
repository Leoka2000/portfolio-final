import React from 'react'
import {FaBusinessTime} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a target='_blank' href='https://bionexusjr.com/' className='individual-wrapper'>
    <span id='work-2'><FaBusinessTime/></span>
    <h1>BioNexusJr's landing page</h1>
    <p>Landing page for Hungary's first junior enterprise - BioNexusJr. Integrated with i18next's API for implementing a translation feature between English and Hungarian</p>
    <div className='key-wrapper'>
    <span>React</span>
      <span>i18next</span>
      <span>Firebase</span>
    </div>
    <a href='https://github.com/Leoka2000/BioNexus-s-Website'><AiFillGithub/><p id='hover'>- Source code</p></a>
  </a>
  )
}

export default index
