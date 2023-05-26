import React from 'react'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a href='https://idyllic-horse-830bac.netlify.app/' className='individual-wrapper'>
    <span id='work-4'><BsFillChatDotsFill/></span>
    <h1>Chat app</h1>
    <p>Live chat app application with utilization of Web Sockets</p>
    <div className='key-wrapper'>
      <span>Socket.IO</span>
      <span>Express</span>
      <span>Node.js</span>
    </div>
    <a href='https://www.facebook.com/'><AiFillGithub/><p id='hover'>- Source code</p></a>
  </a>
  )
}

export default index
