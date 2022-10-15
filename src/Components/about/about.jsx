import React from 'react'
import'./About.css'
import ANA from '../../assets/ana.png'
import {FiAward} from 'react-icons/fi'
import{FiUsers} from'react-icons/fi'
import{VscFolderLibrary} from'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>En Savoir Plus</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ANA} alt="mon image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>

            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>

            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>

            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut quaerat dolor exercitationem, repellendus temporibus atque laudantium sunt dignissimos alias ipsum. Quisquam quo molestias aperiam a, perspiciatis voluptatem maxime? Voluptates.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About