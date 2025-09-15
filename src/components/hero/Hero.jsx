import React from 'react'
import './Hero.css'
import samar from '../../assets/samar.png'
import resume from '../../assets/Resume.pdf'
const Hero = () => {
  return (
    <div className='hero'>
     <img src={samar} alt="" />
     <h1><span>Hello, I'm Preet Samar Singh</span></h1>
      <p>A passionate Frontend Developer skilled in building responsive and user-friendly web applications. I specialize in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and React to craft modern interfaces that blend design and functionality. My focus is on creating clean, scalable, and visually appealing solutions that enhance user experience.</p>
      <div className='hero-action'>
         <div className='hero-connect'><a href='#connect'>Connect With Me</a></div>
         <div className='hero-resume'>  <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a></div>
      </div>
      </div>
  )
}

export default Hero
