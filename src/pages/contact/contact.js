import React from 'react'
import './contact.css'
import Form from './inputs/index'

const Contact = () => {
  return (
    <section id='contact' className='contact-session'>
      <header className='contact-header'>
        <h1>Let's Talk about Your Project.</h1>
        <p>Something on your mind? Get in touch and let's chat!</p>

      </header>
<main className='contact-main'>
<Form/>
</main>

      
    </section>
  )
}

export default Contact
