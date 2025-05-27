import React from 'react';
import './Footer.css';

const Footer = () => {
  // Scroll to section by ID with smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#collections" onClick={(e) => { e.preventDefault(); scrollToSection('collections'); }}>
                Collections
              </a>
            </li>
            <li>
              <a href="#order" onClick={(e) => { e.preventDefault(); scrollToSection('order'); }}>
                Place an Order
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
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
