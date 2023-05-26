import React from 'react'
import {SiBitcoin} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

const index = () => {
  return (
    <a target='_blank'  href='https://crypto-deploy2-6w8l1e4ho-leoka2000.vercel.app/' className='individual-wrapper'>
      <span id='work-1'><SiBitcoin/></span>
      <h1>CryptoApp</h1>
      <p>By consuming the CoinGecko API, the app provides live updates on different cryptocurrency informations</p>
      <div className='key-wrapper'>
        <span>CoinGecko API</span>
        <span>Form validation</span>
        <span>Firebase</span>
      </div>
      <a href='https://www.facebook.com/'><AiFillGithub/><p id='hover'>- Source code</p></a>
    </a>
  )
}

export default index