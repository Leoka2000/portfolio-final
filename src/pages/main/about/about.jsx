import React from 'react'
import './about.css'
import ThingsIDo from './thingsido/index'
import Skills from './skills/index'

const about = () => {
  return (
    <section id='about' className='about-section'>
      <ThingsIDo/>
      <Skills/>
    </section>
  )
}

export default about
