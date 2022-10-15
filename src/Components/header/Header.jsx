import React from 'react'
import './Header.css'
import CTA from './CTA'
import ANA from '../../assets/ana.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hicham Yalaoui</h1>
        <h5 className="text-light">Fullstack Developper</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="ana">
          <img src={ANA} alt="ana" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header> 
  )
}

export default Header