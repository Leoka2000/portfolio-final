import React from 'react'
import './work.css'
import Bionexus from './projects/bionexus/index'
import CoffeeApp from './projects/coffee/index'
import ChatApp from './projects/chatapp/index'
import EasyTramitt from './projects/easy/index'
import CryptoApp from './projects/cryptoapp/index'



const Work = () => {
  return (
    <>
      <section id='work' className='work-section'>
        <header><h1>Selected work</h1></header>
        <main className='work-main'>
        <CryptoApp />
          <Bionexus />
          <CoffeeApp />
          <ChatApp />
          <EasyTramitt />
         

        </main>


      </section>
    </>
  )
}

export default Work
