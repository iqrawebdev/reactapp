import React from 'react';

function Footer() {
    return (
        <div>
            <footer style={{ background: "#282c34",
        color: "white",
        padding: "15px",
        textAlign: "center",
        position: "fixed",   // 👈 fix at bottom
        bottom: 0,
        left: 0,
        width: "100%"}}>
                <p>© 2025 My Website | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Footer;