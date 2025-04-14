import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook , FiInstagram} from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Outlet, NavLink, Link , useLocation} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-4 mt-auto w-full">
    <div className="footer-content mx-auto">
        <div className="footer-row">
<h1 className='nunito footer-header'> Ascent Investments Ltd.</h1>
<p className='nunito footer-para'>Advanced trading platform for digital assets, stocks, crypto, and forex. 
    Invest with confidence with Ascent Investment.</p>

<ul className='social-icons'>
    <li className='social-box'>
      <FiFacebook color="#b3bac2"/>  
    </li>
    <li className='social-box'>
      <FiInstagram color="#b3bac2"/>  
    </li>
    <li className='social-box'>
      <FaXTwitter color="#b3bac2"/>  
    </li>
</ul>
        </div>
        <div className="footer-row">
        <h1 className='nunito footer-header'> Useful Links</h1>
        <ul className='pages'>
    <li>
      <p className='nunito footer-para'>&gt;  Home</p>  
    </li>
    <li>
    <p className='nunito footer-para'>&gt;  About Us</p>  

    </li>
    <li>
 <Link to={ "/contact"}>
      <p className='nunito footer-para'>
      &gt;  Contact Us
      </p>
 </Link>
    </li>
    <li>
    <p className='nunito footer-para'>&gt;  FAQ</p>  
 
    </li>
    
</ul>
        </div>
        <div className="footer-row">
        <h1 className='nunito footer-header'> Contact Details</h1>
<div style={{flexDirection:'row', display:'flex', alignItems:'center', marginBottom:'10px'}}>
    <AiFillHome color='#fff'/>
    <h2 className='nunito ' style={{fontSize:'16px', fontWeight:700, color:'white', marginLeft:'10px', }}> Head Office</h2>
</div>
<p className='nunito footer-para'>27 Old Gloucester Street, London, United Kingdom, WC1N 3AX</p>

<div style={{flexDirection:'row' , display:'flex', alignItems:'center', marginTop:'25px',  marginBottom:'10px'}}>
    <MdEmail color='#fff'/>
    <h2 className='nunito ' style={{fontSize:'16px', fontWeight:700, color:'white', marginLeft:'10px',}}> Email Address</h2>
</div>
<p className='nunito footer-para'> contact@ascentinvestmentsltd.com</p>
        </div>
      
    </div>
    <div className='footerdiv'>
    <p className='footertext nunito'> &copy; Copyright 2024 Ascent Investments Ltd. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer