import React from 'react';
import proj2 from './images/img.png';
import proj1 from './images/image.png';
import proj3 from './images/img4.jpg';
import proj4 from './images/img8.jpg';
import proj5 from './images/Capture.PNG';
import proj6 from './images/img5.jpeg'
function Project(){
    return(
      <section id="projects" >
        <div>
<section className="projects-section">
      <h2 className="section-title">MY PROJECTS</h2>
      <p className='paragraph' >I have created several web development projects using React, JavaScript, and CSS, such as a responsive portfolio website, a  to-do list app,  a complete e-commerce store, a secure login form, and a high-conversion landing page.I build clean, scalable, and modern websites that deliver great user experiences.</p><br/><br/>
      <div className="projects-grid">
        
        <div className="project-card">
          <img src={proj1} alt="Project 1" className="project-img" />
          <h3>Portfolio Website</h3>
          <p>A personal portfolio site to showcase my skills and projects.</p>
          <span className="tech-used">HTML | CSS | React</span>
        </div>

        <div className="project-card">
          <img src={proj2} alt="Project 2" className="project-img" />
          <h3>E-commerce Store</h3>
          <p>An online store with cart, product pages, and checkout system.</p>
          <span className="tech-used">React | Firebase | CSS</span>
        </div>
        <div className="project-card">
  <img src={proj3} alt="Project 3" className="project-img" />
  <h3>Weather App</h3>
  <p>A simple weather application that fetches real-time data using OpenWeatherMap API.</p>
  <span className="tech-used">HTML | CSS | JavaScript | API</span>
</div>

 <div className="project-card">
    <img src={proj4} alt="Project 4" className="project-img" />
    <h3>To-Do List App</h3>
    <p>A simple task management app with add/delete features using HTML, CSS, and JS.</p>
    <span className="tech-used">HTML | CSS | JavaScript</span>
  </div>

 <div className="project-card">
  <img src={proj5} alt="Project 5" className="project-img"  />
  <h3>Login & Signup Form</h3>
  <p> A responsive authentication form with real-time validation, password strength, and error handling for better user experience. </p>
  <span className="tech-used">HTML | CSS | JavaScript</span>
 </div>

<div className="project-card">
  <img src={proj6} alt="Project 6" className="project-img" />
  <h3>Product Landing Page</h3>
  <p>A single-page product landing site with features, images, pricing, testimonials, and a call-to-action button.</p>
  <span className="tech-used">React | CSS | LocalStorage</span>
</div>

       
      </div>
    </section>
          </div>
        </section>
    )
}
export default Project;