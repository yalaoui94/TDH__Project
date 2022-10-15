import React from 'react'
import './Service.css'
import { BiCheck } from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5> What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        {/*Le Début de UI /UX  */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Desin</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>

            </li>
          </ul>

        </article>
        {/*La Fin de UI /UX  */}

        {/*Le Début Web Developpement */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Developpement</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>

            </li>
          </ul>

        </article>
        {/*La Fin Web Developpement*/}

        {/*RESEAU ADMINISATRATION */}
        <article className='service'>
          <div className='service__head'>
            <h3>Reseau Administration</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod </p>

            </li>
          </ul>

        </article>
        {/* FIN RESEAU ADMINISATRATION*/}
      </div>
    </section>
  )
}

export default Service