import React from 'react'
import {SiBitcoin} from 'react-icons/si'
import logo from '../../../../../assets/megyamelo.jpg'

const Index = () => {
  return (
    <a target='_blank'  href='https://www.megyamelo.com' className='individual-wrapper'>
      <span id='work-1'><img src={logo}/></span>
      <h1>Megy a Meló</h1>
      <p>Application developed to help students of Hungarian univeristies to get jobs. It is currently being used by a variaety of students of different institutions in the country</p>
      <div className='key-wrapper'>
      <span>Angular</span>
      <span>Firebase</span>
      <span>i18next</span>
        <span>EmailJS</span>
        
      </div>
    </a>
  )
}

export default Index