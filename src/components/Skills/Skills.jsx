import React from 'react'
import './skills.css'
const Skills = () => {
  return (
    <div id='skills'>
      <div className='skills'>
        <div className='myskills'>
            <h1><span>My Skills</span></h1>
            <p>Mastering the latest web technologies</p>
        </div>
        </div>
        <div className='skills-box'>
        <div className='box1'>
            <img src="https://ih1.redbubble.net/image.2570473597.2651/st,small,507x507-pad,600x600,f8f8f8.jpg" style={{height:"150px"}}alt="" />
            <p>HTML</p>
            <hr style={{width:"70%"}}/>
        </div>
        <div  className='box2'>
            <img src="https://i.pinimg.com/originals/b7/c2/e5/b7c2e508920a1168b94dea8675fa311d.png" style={{height:"150px", width:"150px"}}alt="" />
            <p>CSS</p>
            <hr style={{width:"80%"}}/>
        </div>
        <div  className='box3'>
            <img src="https://www.tc-web.it/wp-content/uploads/2018/07/javascript_logo.jpg" style={{height:"150px"}}alt="" />
            <p>JAVASCRIPT</p>
            <hr style={{width:"60%"}}/>
        </div>
        <div  className='box4'>
            <img src="https://logowik.com/content/uploads/images/bootstrap-new725.logowik.com.webp" style={{height:"150px", width:"150px"}}alt="" />
            <p>BOOTSTRAP</p>
            <hr style={{width:"80%"}}/>
        </div>
        <div  className='box5'> 
            <img src="https://www.pngall.com/wp-content/uploads/15/React-Logo-PNG-Images.png" style={{height:"150px", width:"150px"}}alt="" />
            <p>REACT</p>
            <hr style={{width:"65%"}}/>
        </div>
        <div  className='box6'>
            <img src="https://tse2.mm.bing.net/th/id/OIP.qSHjvlKmg4IUmF7QnN3UZwHaHa?r=0&cb=thfc1ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" style={{height:"150px"}}alt="" />
            <p>TAILWIND CSS</p>
            <hr style={{width:"80%"}}/>
        </div>
      
      
    </div>
    </div>
  )
}

export default Skills
