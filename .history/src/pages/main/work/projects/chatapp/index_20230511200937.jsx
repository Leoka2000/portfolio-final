import React from 'react'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a target='_blank'  href='https://idyllic-horse-830bac.netlify.app/' className='individual-wrapper'>
    <span id='work-4'><BsFillChatDotsFill/></span>
    <h1>Chat app</h1>
    <p>Live chat app application with utilization of Web Sockets</p>
    <div className='key-wrapper'>
      <span>Socket.IO</span>
      <span>Express</span>
      <span>Node.js</span>
    </div>
    <a target='_blank' href="https://github.com/Leoka2000/chat-app-front-end" className="github-link">
          <AiFillGithub />
          <p id="hover">- Front end source</p>
        </a>
        <a  target='_blank' href="https://github.com/Leoka2000/chat-app-back-end" className="github-link">
          <AiFillGithub />
          <p id="hover">- Back end source</p>
        </a>
  </a>
  )
}

export default index
