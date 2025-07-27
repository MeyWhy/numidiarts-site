import React from 'react'
import Hero from './Hero';
import Presentation from './Presentation';
import NextEvent from './NextEvent';
import Commissions from './Commissions';
import Media from './Media';
function Home() {
  return (
    <div>
         <Hero/>
    <NextEvent/>
    <Presentation/>
    <Commissions/>
    <Media/>
    <div className='h-12'></div>

    </div>
  )
}

export default Home
