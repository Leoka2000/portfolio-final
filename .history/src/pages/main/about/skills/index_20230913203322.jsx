import React from 'react'
import CV from '../../../../assets/LeoCV.pdf'
import './index.css'



const index = () => {
    return (
        <div className='right'>
            <h1>Skills</h1>
            <p>Angular / HTML / CSS / TypeScript / React / Laravel.PHP / MySQL / Next.js / Node.js / Express.js</p>
            <a href={CV} download className='right-btn'>Download CV</a>
        </div>
    )
}

export default index