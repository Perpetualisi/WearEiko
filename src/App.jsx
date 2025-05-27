import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Collection from './Components/Collection';
import MakeAnOrder from './Components/MakeAnOrder'; 
import './App.css';

const App = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/order" element={<MakeAnOrder />} /> 
      </Routes>

      <div className="contact-toggle-container">
        <div
          className="main-toggle"
          onClick={() => setShowOptions(!showOptions)}
          title="Contact Options"
        >
          💬
        </div>
        {showOptions && (
          <div className="contact-options">
            <a
              href="https://wa.me/2349050252476"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-option"
              title="Chat on WhatsApp"
            >
              🟢 WhatsApp
            </a>
            <a href="tel:+2349050252476" className="contact-option" title="Call Now">
              📞 Call
            </a>
            <a
              href="mailto:weareiko@gmail.com"
              className="contact-option"
              title="Send Email"
            >
              ✉️ Email
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
