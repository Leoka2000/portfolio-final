import React from 'react'
import {AiOutlineCoffee} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a target='_blank'  href='https://voluble-salamander-19402b.netlify.app/' className='individual-wrapper'>
      <span id='work-3'><AiOutlineCoffee/></span>
      <h1>Leo's Coffee</h1>
      <p>Online commerce store for selling coffee with a virtual shopping cart feature</p>
      <div className='key-wrapper'>
        <span>REST API</span>
        <span>Form valiation</span>
      </div>
      <a href='https://www.facebook.com/'><AiFillGithub/><p id='hover'>- Source code</p></a>
    </a>
  )
}

export default index