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

  useEffect(() => {
    setShowOptions(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-zinc-200 selection:text-black">
      <ScrollToTop />
      <Navbar />

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

      {/* --- REPOSITIONED FLOATING CONTACT TOGGLE --- */}
      {/* Note the 'bottom' values: 
          - Mobile (bottom-24): Keeps it above the sticky bottom nav 
          - Desktop (md:bottom-8): Keeps it clean at the bottom
      */}
      <div className="fixed bottom-24 md:bottom-8 right-6 z-[999] flex flex-col items-end gap-3">
        
        {/* Animated Options Menu */}
        <div className={`flex flex-col gap-3 transition-all duration-300 transform ${
          showOptions ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'
        }`}>
          <ContactLink 
            href="https://wa.me/2349050252476" 
            label="WHATSAPP" 
            icon="💬" 
            color="bg-[#25D366]" 
          />
          <ContactLink 
            href="tel:+2349050252476" 
            label="CALL" 
            icon="📞" 
            color="bg-zinc-800" 
          />
          <ContactLink 
            href="mailto:weareiko@gmail.com" 
            label="EMAIL" 
            icon="✉️" 
            color="bg-zinc-800" 
          />
        </div>

        {/* Main Toggle Button (Luxury Black Theme) */}
        <button
          onClick={() => setShowOptions(!showOptions)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-xl transition-all duration-500 ${
            showOptions ? 'bg-zinc-900 rotate-90 text-white' : 'bg-black text-white hover:scale-110'
          }`}
        >
          {showOptions ? '✕' : '💬'}
        </button>
      </div>

      <Footer />
    </div>
  );
};

const ContactLink = ({ href, label, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 group"
  >
    <span className="bg-black/90 text-white text-[9px] font-bold tracking-[0.2em] px-3 py-1 rounded-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity uppercase">
      {label}
    </span>
    <div className={`w-11 h-11 ${color} text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110`}>
      {icon}
    </div>
  </a>
);

export default App;