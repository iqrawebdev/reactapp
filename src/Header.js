import React from 'react';
import { Link } from 'react-router-dom';

function File() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif" }}>
            <header style={{
                background: "#282c34", color: "white", padding: "20px", textAlign: "center", display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h1>My Website</h1>
                <nav>
                   <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Contact</Link>

                </nav>
            </header>
 </div>
    )
}
export default File;
