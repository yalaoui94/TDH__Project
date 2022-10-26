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
            <h3>Developpement Web</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Réalisation de site vitrine</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Réalisation de plateforme d'administration </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Réalisation de site E-commerce </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Réalisation d'application décentralisée.</p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Conception des applications mobiles</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Conception des jeux</p>
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
              <p>Ateliers, interventions ou conférences, pour mieux comprendre le Web developpement</p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Mentora et suivie de formation pour les débutants</p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Proposez des axes de progrétion pour vos éventuels projets </p>

            </li>
          </ul>

        </article>
        {/*La Fin de UI /UX*/}

        {/*RESEAU ADMINISATRATION */}
        <article className='service'>
          <div className='service__head'>
            <h3>Reseau Administration</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Assurer la sauvegarde des données</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Configurer le matériel et installer les logiciels d’administration du réseau</p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Former les utilisateurs et les assister en cas de panne (hotline) </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Etablir un diagnostique puis procéder à la réparation des panne </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Analyser les besoins de l’entreprise en la matière mais aussi les attentes des utilisateurs pour pouvoir établir les exigences de performance du réseau. </p>

            </li>
          </ul>

        </article>
        {/* FIN RESEAU ADMINISATRATION*/}
      </div>
    </section>
  )
}

export default Service