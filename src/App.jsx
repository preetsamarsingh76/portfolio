import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Form from './components/Form/Form'
import Footer from './components/footer/Footer'


const App = () => {

 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
     <Projects/>
       <Services/>
       <Form/>
      <Footer/>
    </div>
  )
}

export default App

