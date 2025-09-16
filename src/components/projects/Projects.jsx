import React from 'react'
import './Projects.css'
import bgchanger from '../../assets/bgchanger.png'
import currency from '../../assets/currency.png'
import news from '../../assets/news.png'
import Password from '../../assets/password.png'
import recipe from '../../assets/recipe.png'
import texteditor from '../../assets/texteditor.png'
const Projects = () => {
  return (
    <div id='projects'>
      <div className='intro'>
        <h1>My Projects</h1>
        <p>"Innovative And Creative Solutions To Enhance Your Digital Experience</p>
        </div>
        <div className='boxes'>
        <div className='boxp1'>
         <img src={Password} alt="" height={100} width={400} />
         <h2 style={{WebkitTextFillColor:'orange'}}>Password generator</h2>
         <p>Generate strong and secure passwords effortlessely.</p>
         <a href='https://github.com/preetsamarsingh76/password-generator.git'><button>View Project</button></a>
        </div>
        <div className='boxp2'>
         <img src={ currency} alt=""height={20} width={250} style={{marginLeft:40}} />
         <h2 style={{WebkitTextFillColor:'purple'}}>Currency Convertor</h2>
         <p>Covert currencies instantly with real-time rates.</p>
         <a href='https://github.com/preetsamarsingh76/currency-convertor.git'><button>View Project</button></a>
        </div>
        
        <div className='boxp3'>
         <img src={texteditor} alt="" height={100} width={400}/>
         <h2 style={{WebkitTextFillColor:'lightgreen'}}>Text Editor</h2>
         <p>Lightweight editor for simple text editing tasks .</p>
         <a href="https://github.com/preetsamarsingh76/Text-Editor.git"><button>View Project</button></a>
        </div>
        <div className='boxp4'>
         <img src={bgchanger} alt=""height={100} width={400} />
         <h2 style={{WebkitTextFillColor:'pink'}}>Background Changer</h2>
         <p>Customize your apps look with one click.</p>
         <a href='https://github.com/preetsamarsingh76/bgchanger.git'><button>View Project</button></a>
        </div>
        <div className='boxp5'>
         <img src={recipe}alt=""height={100} width={400} />
         <h2 style={{WebkitTextFillColor:'brown'}}>Recipe Finder Website</h2>
         <p>Developed a Recipe Finder website that enables users to search and explore recipes by dish name.</p>
         <a href='https://github.com/preetsamarsingh76/FoodRecipe.git'><button>View Project</button></a>
        </div>
        <div className='boxp6'>
         <img src={news} alt=""height={100} width={400} />
         <h2 style={{WebkitTextFillColor:'darkgrey'}}>News App</h2>
         <p>Users can browse articles by categories such as technology, sports, health, and business, with a clean and user-friendly interface.</p>
         <a href='https://github.com/preetsamarsingh76/News-project.git
         '><button>View Project</button></a>
         </div>
        </div>
    </div>
  )
}

export default Projects
