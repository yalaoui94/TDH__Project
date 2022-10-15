import React from 'react'
import './Footer.css'
import {FaFacebook} from'react-icons/fa'
import {BsLinkedin} from'react-icons/bs'
import {BsGithub} from'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>TDH</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiece">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://linkdin.com"><BsLinkedin/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy;TDH production. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer