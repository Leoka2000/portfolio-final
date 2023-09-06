import React from 'react'
import './work.css'
import Bionexus from './projects/bionexus/index'
import CoffeeApp from './projects/coffee/index'
import ChatApp from './projects/chatapp/index'
import EasyTramitt from './projects/easy/index'
import CryptoApp from './projects/cryptoapp/index'
import Inventory from './projects/inventory'
import MegyaMelo from './projects/megyamelo'



const Work = () => {
  return (
    <>
      <section id='work' className='work-section'>
        <header><h1>Selected work</h1></header>
        <main className='work-main'>
          <MegyaMelo/>
       <Inventory/>
        <EasyTramitt />
          <Bionexus />
          <CoffeeApp />
          <ChatApp />
          <CryptoApp />
        
         

        </main>


      </section>
    </>
  )
}

export default Work
