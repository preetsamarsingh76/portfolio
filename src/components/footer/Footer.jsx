import React from 'react'
import './Footer.css'
import git from '../../assets/git.png'
import  linked from '../../assets/linked.webp'
const Footer = () => {
  return (
    <div>
      <div className='footer'>
        &copy; 2025<p>Preet Samar Singh</p>. All rights are reserved.
      </div>
      <div className='logob'>
       < a href='https://github.com/preetsamarsingh76'> <button >
        <img className='l1'style={{height:30,borderRadius:20}}src={git} alt="" />
     </button></a>
    <a href='https://www.linkedin.com/in/preet-samar-46539b34a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app '> <button>
        <img className='l2'style={{height:30,width:60,borderRadius:20}} src={linked} alt="" />
        </button></a>
      </div>
    </div>
  )
}

export default Footer
