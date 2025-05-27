import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (path, sectionId) => {
    if (location.pathname !== path) {
      navigate(path);
      // Delay scroll until navigation completes
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // adjust delay if needed
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

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
            <li><span onClick={() => handleScroll('/', 'home')}>Home</span></li>
            <li><span onClick={() => handleScroll('/', 'collections')}>Collections</span></li>
            <li><span onClick={() => handleScroll('/', 'order')}>Place an Order</span></li>
            <li><span onClick={() => handleScroll('/', 'about')}>About Us</span></li>
            <li><span onClick={() => handleScroll('/', 'contact')}>Contact</span></li>
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
