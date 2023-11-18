import React from 'react'
import CV from '../../../../assets/LeoCV.pdf'
import './index.css'



const index = () => {
    return (
        <div className='right'>
            <h1>Skills</h1>
            <p>Angular / React / Redux / TypeScript / JavaScript / HTML / CSS / Laravel.PHP / MySQL / Next.JS / Node.JS / Express.JS</p>
            <a href={CV} download className='right-btn'>Download CV</a>
        </div>
    )
}

export default index