import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import './hero.css'
import { Link } from 'react-scroll'

const hero = () => {
  return (
    <>
      <section className='hero-section'>
        <h1>Hi, I'm Leo, a web developer</h1>
        <p>I’m specialized in front end, with my main tool being react. I build things for the web</p>
        <div className='icons-wrapper'>
          <a href='https://www.linkedin.com/in/leoreus/'><AiFillGithub/></a>
          <a href='https://github.com/Leoka2000'><AiOutlineMail/> </a>
          <a><AiFillLinkedin/></a>
        </div>
        <button className='hero-btn'> <Link to="contact" spy={true} smooth={true} offset={100} duration={500}>Hire me</Link></button>
      </section>
    </>
  )
}

export default hero
