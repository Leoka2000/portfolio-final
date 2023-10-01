import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Leo from '../../assets/Leo.png';
import { Link } from 'react-scroll';

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    }

    if (dropDown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove event listener when dropdown is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropDown]);

  return (
    <>
      <header className='nav-navbar'>
        <img src={Leo} alt="Leo" />
        <div className='dropdown-menu' ref={dropdownRef}>
          <button onClick={() => setDropDown(!dropDown)}>
            {dropDown ? <p>Close</p> : <p>Menu</p>}
            {dropDown ? <AiOutlineClose /> : <BiDownArrowAlt />}
          </button>
          {dropDown ? (
            <nav className='nav-dropdown'>
              <div className='dropdown'>
                <a>
                  <Link
                    onClick={() => setDropDown(!dropDown)}
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                  >
                    Work
                  </Link>
                </a>
                <a>
                  <Link
                    onClick={() => setDropDown(!dropDown)}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                  >
                    About
                  </Link>
                </a>
                <a>
                  <Link
                    onClick={() => setDropDown(!dropDown)}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                  >
                    Contact
                  </Link>
                </a>
              </div>
            </nav>
          ) : (
            ''
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
