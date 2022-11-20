import React from 'react'
import './Service.css'
import { BiCheck } from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5> What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        {/*Le Début de developpement web  */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Developpement</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Realization of showcase websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Realization of administration platform </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Realization of e-commerce store </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Realization of decentralized application </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Design & build  mobile applications</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Build & deploy games</p>
            </li>
          </ul>

        </article>
        {/*La Fin de developpement web */}

        {/*Le Début de consulting */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Consulting</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accompagnement tout au long de votre projet sur vos actions techniques, conseils et supervision.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Workshops, interventions or conferences, to better understand Web development</p>

            </li>



            <li>
              <BiCheck className='service__list-icon' />
              <p>Propose areas of progress for projects </p>

            </li>
          </ul>

        </article>
        {/*La Fin de UI /UX*/}

        {/*RESEAU ADMINISATRATION */}
        <article className='service'>
          <div className='service__head'>
            <h3>Administration Network</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>data backup</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Configure hardware and install network administration software</p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Train users and assist them in the event of a breakdown (hotline) </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Diagnose and repair the faults </p>

            </li>


          </ul>

        </article>
        {/* FIN RESEAU ADMINISATRATION*/}
      </div>
    </section>
  )
}

export default Service