import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>WearEiko</h2>
          <p>Elegant and timeless fashion pieces.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collection">Collections</Link></li>
            <li><Link to="/order">Place an Order</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📞 <a href="tel:+2349050252476">+234 905 025 2476</a></p>
          <p>✉️ <a href="mailto:weareiko@gmail.com">weareiko@gmail.com</a></p>
          <p>🟢 <a href="https://wa.me/2349050252476" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WearEiko. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
