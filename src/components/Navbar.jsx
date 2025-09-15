import React, { useState,useRef } from 'react'
import './Navbar.css'
import logo from '../assets/logo1.png'
import menuclose from '../assets/menu close.webp'
import menuopen from '../assets/menu open.jpg'


const Navbar = () => {
   
  const[menu,setMenu]=useState("home");
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";

  }
   const closeMenu=()=>{
    menuRef.current.style.right="-350px";
   }

  return (
    <div className='Navbar'>
     <img src={logo} alt="" width={80} />
     <img src={menuopen} onClick={openMenu} alt="" width={40} className='nav-mob-open' />
     <ul ref={menuRef} className='nav-menu'>
    <img src={menuclose} onClick={closeMenu} alt=""  className='nav-mob-close' width={40}/>
       <li><a href=''>About Me</a></li>
       <li> <a href='#skills'>Skills</a></li>
       <li><a href='#services'>Services</a></li>
       <li><a href='#projects'>Projects</a></li>
     </ul>
     
     <div className='connect'><a href='#connect'>Connect With Me</a></div>
    </div>
  )
}

export default Navbar

