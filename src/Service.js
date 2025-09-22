import React from 'react';
import {
  FaLaptopCode,FaCode,FaMobileAlt,FaPen,FaLayerGroup,FaPencilRuler
} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
 


function Service(){
    return(
      <section id='services' style={{ marginTop: '-40px' }}>
  <div>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 className="tagline">
        <FontAwesomeIcon icon={faTools} style={{ marginRight: '10px', color: '#FF7518' }} />
        My Experties
      </h1>
      <h1 style={{ fontSize: "45px" }}>SERVICES I OFFER</h1>
      {/* <p>I’m a passionate Web Developer with experience in:</p> */}
    </div>

    <div className="services-section" style={{marginTop:"-40px"}}>
      <div className="service-card">
        <FaLaptopCode size={40} color="#FF7518" />
        <h3>Responsive Website Design</h3>
        <p>Clean, modern, and user-friendly interfaces using HTML, CSS, JavaScript, and React.</p>
      </div>

      <div className="service-card">
        <FaCode size={40} color="#FF7518" />
        <h3>Web Application Development</h3><p>Dynamic, interactive apps with seamless user experience and functionality.</p>
      </div>

      <div className="service-card">
        <FaMobileAlt size={40} color="#FF7518" />
        <h3>Mobile-Friendly Design</h3>
        <p>Fully responsive layouts that look great on all screen sizes.</p>
      </div>

      <div className="service-card">
        <FaPen size={40} color="#FF7518" />
        <h3>Content Writing</h3>
        <p>Clear, engaging, and SEO-friendly content for websites and blogs.</p>
      </div>

      <div className="service-card">
        <FaLayerGroup size={40} color="#FF7518" />
        <h3>Front-End Development</h3>
        <p>Building fast, modern UIs using React, HTML, CSS, and JavaScript.</p>
      </div>
<div className="service-card">
        <FaPencilRuler size={40} color="#FF7518" />
        <h3>UI/UX Design</h3>
        <p>Designing intuitive user interfaces and smooth user experiences.</p>
      </div>
    </div>
  </div>
</section>

    )
}
export default Service