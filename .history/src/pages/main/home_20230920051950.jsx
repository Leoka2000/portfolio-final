import React from 'react'
import Navbar from '../../compontents/navbar/navbar'
import Hero from './hero/hero'
import Work from './work/work-parent'
import About from './about/about'
import Contact from '../contact/contact'

console.log(process.env.REACT_APP_API_KEY)
const Home = () => {
  return (
    <>
    
      <Hero/>
      <Work/>
      <About/>
      <Contact/>
    </>
  )
}

export default Home
