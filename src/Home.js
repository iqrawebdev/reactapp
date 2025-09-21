import React from 'react';
import profileImg from './images/img1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear} from '@fortawesome/free-solid-svg-icons';


function Content(){
    return(
      <section id="home">
         <div className="home-section">
      <div className="home-content">
       
                <span className="tagline">
                   <FontAwesomeIcon icon={faUserGear} style={{ marginRight: '10px', color: '#FF7518' }} />
                  I AM Developer</span>
        <h1>Creative Web Design <br /> & <span className="highlight">Development Solutions</span></h1>
        <p>
          I specialize in building modern, responsive, and user-friendly websites that help businesses grow online.
          From clean UI/UX design to fully functional web solutions, I deliver quality with creativity.
        </p>
 </div>
      <div className="home-image">
        <img src={profileImg} alt="Profile" />
      </div>
     
    </div>
 </section>
    )
}
export default Content;
