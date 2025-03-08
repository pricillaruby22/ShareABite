import React from "react";
import './Styles/Contactus.css';
import contactusImg from '../Images/contactusImg.png';

const Contactus = () => {
    return(
        <div> 
            <div className='grid-container'>
                <div className='Account-section'>
                    <img src={contactusImg} alt='Contactus-image' className='contactus-img' />
                </div>
                <div>
                    <br /><br /><br /><br />
                    <center>
                        <p className="contactus-heading">Contact Us</p>
                        <p className="contactus-heading2">We are here for you! How can we help?</p>
                    </center>
                    <br /><br />
                    <input type='text' placeholder='Enter your name' className='input-field'/><br /><br />
                    <input type='text' placeholder='Enter your email or phone number' className='input-field'/><br /><br />
                    <select placeholder='How did you find us?' className='input-field-select'>
                        <option className="option-field" value="" disabled selected>How did you find us?</option>
                        <option className="option-field" value="email" >Email</option>
                        <option className="option-field" value="linkedin" >Linkedin</option>
                        <option className="option-field" value="instragram" >Instragram</option>
                    </select>
                    <br /><br />
                    <input type='text' placeholder='Message' className='input-field-message'/><br /><br /><br />
                    <center><button className='send-btn'>Send</button></center>
                </div>
            </div>
        </div>
    );
};

export default Contactus;