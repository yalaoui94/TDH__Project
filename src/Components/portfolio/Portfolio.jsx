import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
            <h3>Management systeme Apps</h3>
            <div className="portfolio__item-cta">
          </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
            <h3>E-commerce Apps</h3>
            <div className="portfolio__item-cta">
          </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
            <h3>Social media company</h3>
            <div className="portfolio__item-cta">
          </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
            <h3>Crypto monezy Apps</h3>
            <div className="portfolio__item-cta">
          </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
            <h3>Dashbord Apps</h3>
            <div className="portfolio__item-cta">
          </div>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
            <h3>Marketplace Apps</h3>
            <div className="portfolio__item-cta">
          </div>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio