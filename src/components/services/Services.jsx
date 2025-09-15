import React from 'react'
import './Services.css'
import webdesign from '../../assets/webdesign.jpg'
import webdev from '../../assets/webdev.jpg'
import frontend from '../../assets/frontend.jpg'
const Services = () => {
  return (
    <div id='services'>
      <div className='servicesh'>
        <h1 style={{marginTop:50,marginBottom:20}}>My Services</h1>
        <p style={{fontWeight:700,fontSize:20}}>"Showcasing Creative and High-Impact Web Solutions"</p>
        </div>
      <div className='servicesb'>
      <div className='service1'>
        <img src={webdesign} alt="" width={300} style={{marginLeft:20, marginTop:30,marginRight:20}} />
      
      
      <h1 style={{marginLeft:20}}>Web Designing</h1>
        <p style={{width:280, marginLeft:20,marginTop:10,fontSize:20}}>Creative,User-focused,designs with an eye for detail.</p>
        <p style={{marginLeft:20}}>UI,UX,Photoshop,Figma</p>
        
      </div>
      <div className='service2'>
        <img src={webdev} alt=""  width={300}/>
    
      
        <h1>Web Development</h1>
        <p style={{ marginTop:10,fontSize:20,width:280} }>Modern,Responsive and Scalable Websites</p>
        <p>HTML,CSS,JAVASCRIPT</p>
      </div>
      <div className='service3'>
        <img className='imgl' src={frontend} alt=""  width={300} />
         <h1 style={{marginBottom:10}}>Frontend Development</h1>
       <p style={{fontSize:20}}>Pixel-perfect,smooth and Fast UI/UX</p>
       <p>React,Tailwind,Bootstrap</p>
      </div>
      </div>
    </div>
  )
}

export default Services
