// import React from 'react'
// import './App.css';
// import Content from './Home';
// import File from './Header';
// import About from './About';
// import Service from './Service';
// import Project from './Projects';
// import Footer from './Footer'
// import Details from './Details';
// function Portfolio(){

//   return(
//     <div>
//     <File />
//      <Content />
//      <About/><br/><br/>
//      <Service/>
//      <Project/><br/><br/>
//      <Details/><br/>
//      <Footer/>
//     </div>
//   )

// }
// export default Portfolio;


import React from 'react';
import './App.css';
import File from './Header';
import Content from './Home';
import About from './About';
import Service from './Service';
import Project from './Projects';
import Details from './Details';
import Footer from './Footer';

function Portfolio() {
  return (
    <div>
      <File />
      <Content />
      <About />
      <Service />
      <Project />
      <Details />
      <Footer />
    </div>
  );
}
export default Portfolio;
