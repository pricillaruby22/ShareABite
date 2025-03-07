import React, { useState } from 'react';
import './Styles/Aboutus.css';
import aboutimg from '../Images/about.png'
import vectorimg from '../Images/Vector.png'
import aboutcontentimg1 from '../Images/aboutcontentimg1.png'
import aboutcontentimg2 from '../Images/aboutcontentimg2.png'
import aboutcontentimg3 from '../Images/aboutcontentimg3.png'

const Aboutus = () => {
    return (
        <div className="about-us-container">
            <center>
                 <img src={vectorimg} alt="aboutbackground" className="vectorimg"/>
            </center>
            <center>
                
                <img src={aboutimg} alt="aboutus-img" className="about-img" />
            
            </center>
            <center>
                    <img src={aboutcontentimg1} alt="about1" className="about1Img"/>
                    <img src={aboutcontentimg2} alt="about2" className="about2Img"/>
                    <img src={aboutcontentimg3} alt="about3" className="about3Img"/>
            </center> 
            
        </div>
    )
}
export default Aboutus;