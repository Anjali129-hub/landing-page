import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features  from './components/Features'
import  CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App