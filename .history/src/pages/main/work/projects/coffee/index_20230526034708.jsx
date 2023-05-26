import React from 'react'
import {AiOutlineCoffee} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a target='_blank'  href='https://melodious-rabanadas-153006.netlify.app/' className='individual-wrapper'>
      <span id='work-3'><AiOutlineCoffee/></span>
      <h1>Leo's Coffee</h1>
      <p>Online commerce store for selling coffee with a virtual shopping cart feature</p>
      <div className='key-wrapper'>
        <span>TypeScript</span>
        <span>Form valiation</span>
      </div>
      <a href='https://github.com/Leoka2000/e-commerce-website'><AiFillGithub/><p id='hover'>- Source code</p></a>
    </a>
  )
}

export default index