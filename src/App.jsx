import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Collection from './Components/Collection';
import MakeAnOrder from './Components/MakeAnOrder';
import ThankYou from './Components/ThankYou'; 
import Footer from './Components/Footer/Footer';
import ScrollToTop from './ScrollToTop';

const App = () => {
  const [showOptions, setShowOptions] = useState(false);
  const location = useLocation();

  // Close the contact menu automatically when the user changes pages
  useEffect(() => {
    setShowOptions(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-pink-100 selection:text-pink-900">
      <ScrollToTop />
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/order" element={<MakeAnOrder />} />
          <Route path="/thank-you" element={<ThankYou />} /> 
        </Routes>
      </main>

      {/* PREMIUM FLOATING CONTACT TOGGLE */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
        {/* Animated Options Menu */}
        <div className={`flex flex-col gap-3 transition-all duration-300 transform ${
          showOptions ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'
        }`}>
          <ContactLink 
            href="https://wa.me/2349050252476" 
            label="WhatsApp" 
            icon="💬" 
            color="bg-green-500" 
          />
          <ContactLink 
            href="tel:+2349050252476" 
            label="Call" 
            icon="📞" 
            color="bg-blue-500" 
          />
          <ContactLink 
            href="mailto:www.weareiko@gmail.com" 
            label="Email" 
            icon="✉️" 
            color="bg-pink-600" 
          />
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setShowOptions(!showOptions)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-500 ${
            showOptions ? 'bg-zinc-800 rotate-90' : 'bg-black hover:bg-zinc-800'
          }`}
        >
          {showOptions ? '✕' : '💬'}
        </button>
      </div>

      <Footer />
    </div>
  );
};

// Reusable Sub-component for Contact Options
const ContactLink = ({ href, label, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 group"
  >
    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold tracking-widest shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
    <div className={`w-12 h-12 ${color} text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110`}>
      {icon}
    </div>
  </a>
);

export default App;