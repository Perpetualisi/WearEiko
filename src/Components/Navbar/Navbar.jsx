import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTshirt, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isDesignDropdownOpen, setIsDesignDropdownOpen] = useState(false);
  const [isBottomDropdownOpen, setIsBottomDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDesignDropdownOpen(false);
    setIsBottomDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* GHOST SPACERS: Adjusted mobile height from 120px to 80px */}
      <div className={`hidden md:block transition-all duration-500 ${scrolled ? "h-[100px]" : "h-[160px]"}`} />
      <div className="md:hidden h-[80px]" /> 

      <header className="relative z-[100]">
        <nav
          className={`fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all duration-500 ${
            scrolled 
              ? "py-3 shadow-md" 
              : "py-4 md:py-8" // Reduced mobile padding from py-8 to py-4
          }`}
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center px-6">
            <Link 
              to="/" 
              className="text-xl md:text-3xl font-bold tracking-[0.3em] font-serif text-black uppercase transition-transform hover:scale-105"
            >
              WearEiko
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-12 lg:gap-20 mt-6 text-[10px] font-bold tracking-[0.25em] text-zinc-400">
              <li>
                <Link to="/" className={`hover:text-black transition-colors ${location.pathname === "/" ? "text-black border-b border-black pb-1" : ""}`}>
                  HOME
                </Link>
              </li>

              <li
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsDesignDropdownOpen(true)}
                onMouseLeave={() => setIsDesignDropdownOpen(false)}
              >
                <span className={`flex items-center gap-1 transition-colors pb-1 ${isDesignDropdownOpen || location.pathname.includes('collection') || location.pathname.includes('order') ? "text-black border-b border-black" : "hover:text-black"}`}>
                  OUR DESIGN <span className="text-[7px] translate-y-[1px]">▼</span>
                </span>
                
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-300 ${
                  isDesignDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}>
                  <ul className="bg-white border border-zinc-100 shadow-2xl py-3 min-w-[220px] rounded-sm">
                    <li>
                      <Link to="/collection" className="block px-8 py-3 hover:bg-zinc-50 hover:text-black transition-colors text-center">Collections</Link>
                    </li>
                    <li>
                      <Link to="/order" className="block px-8 py-3 hover:bg-zinc-50 hover:text-black transition-colors text-center">Place an Order</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link to="/about" className={`hover:text-black transition-colors ${location.pathname === "/about" ? "text-black border-b border-black pb-1" : ""}`}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`hover:text-black transition-colors ${location.pathname === "/contact" ? "text-black border-b border-black pb-1" : ""}`}>
                  MAKE AN INQUIRY
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* MOBILE BOTTOM NAV */}
        <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-white border border-zinc-200 flex justify-around items-center py-4 px-2 z-50 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <Link to="/" className={`flex flex-col items-center gap-1.5 text-[9px] font-bold tracking-widest ${location.pathname === '/' ? 'text-black' : 'text-zinc-400'}`}>
            <FaHome size={18} />
            <span>HOME</span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsBottomDropdownOpen(!isBottomDropdownOpen)}
              className={`flex flex-col items-center gap-1.5 text-[9px] font-bold tracking-widest transition-colors ${isBottomDropdownOpen || location.pathname.includes('collection') || location.pathname.includes('order') ? 'text-black' : 'text-zinc-400'}`}
            >
              <FaTshirt size={18} />
              <span>DESIGN</span>
            </button>

            {isBottomDropdownOpen && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white border border-zinc-100 shadow-2xl rounded-2xl p-2 min-w-[160px] animate-in fade-in slide-in-from-bottom-4 duration-300">
                <Link to="/collection" className="block px-5 py-4 hover:bg-zinc-50 text-xs font-bold rounded-xl text-center text-black">COLLECTIONS</Link>
                <div className="h-[1px] bg-zinc-50 w-[80%] mx-auto" />
                <Link to="/order" className="block px-5 py-4 hover:bg-zinc-50 text-xs font-bold rounded-xl text-center text-black">ORDER NOW</Link>
              </div>
            )}
          </div>

          <Link to="/about" className={`flex flex-col items-center gap-1.5 text-[9px] font-bold tracking-widest ${location.pathname === '/about' ? 'text-black' : 'text-zinc-400'}`}>
            <FaInfoCircle size={18} />
            <span>ABOUT</span>
          </Link>

          <Link to="/contact" className={`flex flex-col items-center gap-1.5 text-[9px] font-bold tracking-widest ${location.pathname === '/contact' ? 'text-black' : 'text-zinc-400'}`}>
            <FaEnvelope size={18} />
            <span>INQUIRY</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;