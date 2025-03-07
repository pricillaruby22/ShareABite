import React, { useState } from 'react';
import './Styles/Homepage.css';
import Navbar from './Navbar';
import homevideo from '../Images/Homepagevideo.mp4'
import Aboutus from './Aboutus';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <video
                src={homevideo}
                autoPlay
                loop
                muted
                playsInline
                className="video"
            />
            <div className="overlay"></div>
            <div className="content-container">
                    <h1>Share a bite, Feed a Life.</h1>
                    <p>Join us in reducing food waste and sharing meals with those in need.</p>
                    <button className="denote-btn">Denote Now</button>
                    <button className="findfood-btn">Find Food</button>
            </div>
            
            
            
        </div>
    );
}
export default Homepage;