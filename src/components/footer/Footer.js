import React from 'react';
import logo from '../../logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{backgroundColor:'black', color:'white'}}>
        <div >
        <div className='first'>
            <div style={{marginTop:'40px'}}><img style={{width:'150px'}} src={logo} alt="" srcset=""/></div>
            <div style={{marginTop:'40px', marginLeft:'600px', display:'flex'}} className='first-right'>
                <div>
                <p>About Online Food</p>
                <p>Read Our Blog</p>
                <p>Sing up to Delivery</p>
                <p>Add your Restaurant</p>
                </div>
                <div style={{marginLeft:'40px'}}>
                <p>Get Help</p>
                <p>Read FAQ</p>
                <p>View all Cities</p>
                <p>Restaurant near me</p> 
                </div>
            </div>
        </div>
        </div>
        <div style={{display:'flex'}}>
            <div style={{marginLeft:'20px'}}><small>Coperight © 2020 online food</small></div>
            <div style={{display:'flex', marginLeft:'600px'}}>
                <p>Privacy Policy</p>
                <p style={{marginLeft:'20px'}}>Terms of use</p>
                <p style={{marginLeft:'20px'}}>Pricing </p>
            </div>
       
        </div>

            
        </div>
    );
};

export default Footer;