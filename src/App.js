import React from 'react'
import './App.css';
import Content from './Home';
import File from './Header';
import About from './About';
import Service from './Service';
import Project from './Projects';
import Footer from './Footer'
function Portfolio(){

  return(
    <div>
    <File />
     <Content />
     <About/>
     <Service/>
     <Project/><br/><br/>
     <Footer/>
    </div>
  )

}
export default Portfolio;