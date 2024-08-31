import React from 'react';
import './Footer.css';
import logo from '../assets/footerlogo.png'; 
import facebookIcon from '../assets/facebook-icon.png'; 
import instagramIcon from '../assets/instagram-icon.png'; 
import linkedinIcon from '../assets/linkedin-icon.png'; 
import twitterIcon from '../assets/twitter-icon.png'; 

const Footer = () => { 
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Every Element Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: infoeveryelement@gmail.com </p>
          <p>Phone: +91 8688360300 </p>
          <p>Address:Plot no : 6 , Road no -9 , padmavathinagar , Hasthinapur , Hyderabad , 500079</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=100011648256218" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Every Element. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
