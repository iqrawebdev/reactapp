import React, { useState } from 'react';
import profileImg from './images/img9.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function About() {
 

  return (
    <section id="about" >
      <div
        className="home-section"
        style={{
          background: "none",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // padding: '40px 100px',
          gap: '50px',
          flexWrap: 'wrap'
        }}
      >
        {/* Left: Profile Image */}
        <div
          style={{
            flex: 1.2,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <img
            src={profileImg}
            alt="Profile"
            style={{
              maxWidth: '600px',
              width: '100%',
              height: '600px',   
              objectFit: "cover"
            }}
          />
        </div>

        {/* Right: About Content */}
        <div className="home-content" style={{ flex: 1 }}>
          <span
            className="tagline"
            style={{ display: 'inline-block', marginBottom: '10px' }}
          >
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{ marginRight: '10px', color: '#FF7518' }}
            />
            About Me
          </span>

          <h1>Bringing Ideas to Life Through Code &amp; Design</h1>

          <p style={{ textAlign: 'justify' }}>
            I'm a passionate and detail-oriented web developer with experience in
            designing and developing responsive websites and web applications.
            I specialize in crafting clean UI/UX designs and turning them into
            functional and high-performing web solutions. My aim is to deliver
            user-friendly digital experiences that not only look great but also
            perform exceptionally.
          </p>

          {/* Feature Points */}
          <div className="features-wrapper">
            <div className="feature-item">
              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
              <span>Responsive Web Design</span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
              <span>Modern Frontend Tech</span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
              <span>UI/UX Focused Design</span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
              <span>Quick Delivery</span>
            </div>
          </div>

          <br />

           <button onClick={() => {
  document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}}>
  View Details
</button>
        </div>
      </div>
    </section>
  );
}

export default About;





