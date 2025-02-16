import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}

export default App
