import React from 'react';
// Import the CSS file where your styles are defined

export default function Navbar() {
    return (
        <div className="nav-container">
            <img className="logo" src="https://fcc-did.pages.dev/images/fcc%20logo%20high%20res.png" alt="Logo" />
            <nav className="nav-bar">
                <ul>
                    <li><a href ="#">Home</a></li>
                    <li><a href="#">Horizon</a></li>
                    <li><a href="#">Schedule</a></li>
                    <li><a href="#">Sponsors</a></li> {/* Corrected spelling of "Sponsors" */}
                    <li><a href="#">Terms</a></li>
                </ul>
            </nav>
        </div>
    );
}
