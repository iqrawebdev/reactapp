import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import File from './Header';
import Footer from './Footer';
import Contact from './Contact';
function App() {

  return (
     <Router>
       <File />
           <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>


  );
}

export default App;
