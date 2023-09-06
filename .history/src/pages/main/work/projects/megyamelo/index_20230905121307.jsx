import React from 'react'
import {SiBitcoin} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a target='_blank'  href='https://www.megyamelo.com' className='individual-wrapper'>
      <span id='work-1'><SiBitcoin/></span>
      <h1>Megy a Meló</h1>
      <p>Application developed to help students of Hungarian univeristies to get jobs. It is currently being used by a variaety of students of different institutions in the country</p>
      <div className='key-wrapper'>
      <span>Angular</span>
      <span>TypeScript</span>
      <span>i18next</span>
        <span>EmailJS</span>
      </div>
      <a target='_blank' href='https://github.com/Leoka2000/CryptoApp'><AiFillGithub/><p id='hover'>- Source code</p></a>
    </a>
  )
}

export default index