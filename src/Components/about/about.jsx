import React from 'react'
import './About.css'
import ANA from '../../assets/ana.png'
import { FiAward } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>More Informations</h5>
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
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years working</small>

            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>

            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>

            </article>
          </div>

          <p> 

             J'ai découvert la programmation quand j'avais 16 ans, en voulant crée un site et quelques années plus tard, en 2019, j'ai voulu apprendre réellement la programmation informatique.

             Fasciné par les nouvelles technologies, la programmation et l'entreprenariat me permet de lier ces mondes.

             Après une formation à Efficom sup de Lille, je me suis spécialisé après mon master au développement avec l'école Open Classroom.

             Depuis, j'ai développé plusieurs projets web pour des startups ou des entrepreneurs.

             J'ai également formé des centaines de personnes à la programmation web et aux fondamentaux de l'entreprenariat.

             Aujourd'hui je travaille avec plusieurs écoles et organisme de formation en tant qu'intervenant ou mentor.
            .</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About