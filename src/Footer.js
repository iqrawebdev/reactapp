import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container"
        //  style={{ marginLeft: "90px" }}
         >

          {/* Logo & About */}
          <div className="footer-column">
            <h2 className="footer-logo">CodeCraft</h2>
            <p>
              Providing creative and scalable solutions for websites and web apps.
              Focused on responsive design, clean code, and modern UI/UX.
            </p>
            <p className="footer-email">iqrabatool12233@gmail.com</p>
          </div>

          {/* Services */}
          <section id="services">
            <div className="footer-column" 
            // style={{ marginLeft: "150px" }}
            >
              <h3>My Services</h3>
              <ul>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile App</a></li>
                <li><a href="#services">Content Writing</a></li>
              </ul>
            </div>
          </section>
          <div className="footer-column">
            <h3>Explore Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
               <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          {/* Contact & Socials */}
          <div className="footer-column" 
          // style={{ marginLeft: "200px" }}
          >
            <h3>Follow Me</h3>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>

            <p>
              <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: '8px', color: '#FF7518' }} />
              0310-4218392
            </p>
          </div>

        </div> {/* ✅ footer-container closed */}

        <div className="footer-bottom">
          <p>All rights reserved © 2025 CodeCraft</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
