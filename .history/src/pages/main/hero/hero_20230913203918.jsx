import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import './hero.css'
import CV from '../../../assets/LeoCV'

const hero = () => {
  return (
    <>
      <section className='hero-section'>
        <h1>Hi, I'm Leo, a front-end developer</h1>
        <p>I build things for the web primarily using React. Currently living in Hungary</p>
        <div className='icons-wrapper'>
          <a target='_blank' href="https://github.com/Leoka2000"><AiFillGithub/></a>
          <a target='_blank' href='https://www.linkedin.com/in/leoreus/'> <AiFillLinkedin/></a>
         <a href='mailto:Lucianoe36@outlook.com'><AiOutlineMail/> </a>
        </div>
        <a href={CV} download className='right-btn'>Download CV</a>
      </section>
    </>
  )
}

export default hero
