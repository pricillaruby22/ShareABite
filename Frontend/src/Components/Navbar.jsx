import React, { useState } from 'react';
import './Styles/Navbar.css';
import logo from '../Images/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="logo-image" className="logo" />
                <p className="web-name">ShareABite</p>
                
                <div className="navbar-container">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <button>Login</button>
                </div>
           </nav>
        </div>
    );
}
export default Navbar;