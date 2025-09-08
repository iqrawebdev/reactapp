import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import File from './Header';
import Footer from './Footer';
import Contact from './Contact';
function App() {

  return (
    <div style={{
      display: "flex",
      flexDirection: 'column',
      minHeight: '100vh'
    }}>

     <Router>
       <File />
        <div style={{ flex: 1 }}>

           <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Routes></div>
      <Footer/>
    </Router>
</div>

  );
}

export default App;
