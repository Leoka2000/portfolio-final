import React, { useState } from 'react'
import './navbar.css'
import { BiDownArrowAlt } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Leo from '../../assets/Leo.png'
import { Link } from 'react-scroll'



function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <header className='nav-navbar'>
        <img src={Leo} />
        {/* <span>
          <div></div>
          <p>AVALIABLE FOR FREELANCE WORK</p>
        </span>*/}
        <div className='dropdown-menu'>
          <button onClick={() => { setDropDown(!dropDown) }}>{dropDown ? (<p>Close</p>) : (<p>Menu</p>)}{dropDown ? (<AiOutlineClose />) : (<BiDownArrowAlt />)}</button>
          {dropDown ? (
            <nav className='nav-dropdown'>
              <div className='dropdown'>
                <a><Link onClick={() => { setDropDown(!dropDown) }} to="work" spy={true} smooth={true} offset={100} duration={500}>Work</Link></a>
                <a><Link onClick={() => { setDropDown(!dropDown) }} to="about" spy={true} smooth={true} offset={100} duration={500}>About</Link></a>
                <a><Link onClick={() => { setDropDown(!dropDown) }} to="contact" spy={true} smooth={true} offset={100} duration={500}>Contact</Link></a>
              </div>
            </nav>) : ("")}
        </div>
      </header>
    </>
  )
}

export default Navbar
