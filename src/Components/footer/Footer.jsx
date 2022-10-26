import React from 'react'
import './Footer.css'
import {FaFacebook} from'react-icons/fa'
import {BsLinkedin} from'react-icons/bs'
import {BsGithub} from'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Hicham Yalaoui</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.facebook.com/johnman.yalaoui"><FaFacebook/></a>
        <a href="https://github.com/yalaoui94"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/hicham-yalaoui-49a898133/"><BsLinkedin/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy;Hicham production. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer