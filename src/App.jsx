import React, { useState, useEffect, useCallback, memo } from 'react';
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

/**
 * @file App.jsx
 * @description Root component featuring a smart floating action button (FAB) 
 * contextually positioned for mobile-first luxury navigation.
 */

const App = () => {
  const [showOptions, setShowOptions] = useState(false);
  const location = useLocation();

  // Close menu and reset view on route change
  useEffect(() => {
    setShowOptions(false);
  }, [location]);

  // Memoized toggle to prevent unnecessary re-renders
  const toggleOptions = useCallback(() => {
    setShowOptions(prev => !prev);
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-zinc-200 selection:text-black font-sans antialiased bg-white">
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

      {/* --- FLOATING CONTACT ACTION SYSTEM --- 
          Logic:
          - Desktop (md:bottom-8): Traditional corner placement.
          - Mobile (bottom-24): Vertically offset to stay above the 64px Mobile Nav Dock.
      */}
      <aside className="fixed bottom-24 md:bottom-10 right-6 z-[999] flex flex-col items-end gap-4">
        
        {/* Animated Options Stack */}
        <div 
          className={`flex flex-col gap-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            showOptions 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-12 opacity-0 scale-75 pointer-events-none'
          }`}
        >
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

        {/* Main Trigger Button */}
        <button
          onClick={toggleOptions}
          aria-expanded={showOptions}
          aria-label="Contact options"
          className={`w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center text-xl transition-all duration-500 ${
            showOptions 
              ? 'bg-zinc-900 rotate-90 text-white' 
              : 'bg-black text-white hover:scale-110 active:scale-90'
          }`}
        >
          {showOptions ? (
            <span className="text-2xl font-light">✕</span>
          ) : (
            <span className="animate-pulse-slow">💬</span>
          )}
        </button>
      </aside>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}} />
    </div>
  );
};

/**
 * Atomized Contact Link Component
 */
const ContactLink = memo(({ href, label, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full"
  >
    {/* Label Tooltip (Desktop Only for cleanliness) */}
    <span className="hidden md:block bg-black/90 text-white text-[9px] font-black tracking-[0.2em] px-3 py-2 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 uppercase">
      {label}
    </span>
    
    {/* Icon Circle */}
    <div className={`w-12 h-12 ${color} text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:rotate-12 group-hover:-translate-y-1`}>
      <span className="text-lg">{icon}</span>
    </div>
  </a>
));

ContactLink.displayName = 'ContactLink';

export default App;