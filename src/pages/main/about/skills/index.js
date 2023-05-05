import React from 'react'
import CV from '../../../../assets/LeoCV.pdf'
import './index.css'



const index = () => {
    return (
        <div className='right'>
            <h1>Skills</h1>
            <p>HTML / CSS / JS / React / Next.js / Node.js / Express.js / Figma</p>
            <a href={CV} download className='right-btn'>Download CV</a>
        </div>
    )
}

export default index