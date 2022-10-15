import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Experience from './Components/experience/Experience'
import About from './Components/about/about'
import Services from './Components/services/Service'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonials from './Components/testimonials/Testimonials'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </>

  )
}

export default App