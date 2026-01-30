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
      {/* Desktop Ghost Spacer */}
      <div className={`hidden md:block transition-all duration-500 ${scrolled ? "h-[80px]" : "h-[120px]"}`} />
      
      {/* --- TOP BRANDING BAR --- */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-zinc-100 py-5 md:py-6 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col items-center px-6">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-bold tracking-[0.4em] font-serif text-black uppercase"
          >
            WearEiko
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-12 mt-6 text-[10px] font-bold tracking-[0.25em] text-zinc-400">
            <DesktopLink to="/" current={location.pathname}>HOME</DesktopLink>
            
            <li 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsDesignDropdownOpen(true)}
              onMouseLeave={() => setIsDesignDropdownOpen(false)}
            >
              <span className={`flex items-center gap-1 transition-colors pb-1 ${isDesignDropdownOpen || location.pathname.includes('collection') || location.pathname.includes('order') ? "text-black border-b-2 border-black" : "hover:text-black"}`}>
                OUR DESIGN <span className="text-[7px]">▼</span>
              </span>
              {isDesignDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="bg-white border border-zinc-100 shadow-2xl py-2 min-w-[200px] rounded-lg">
                    <Link to="/collection" className="block px-6 py-3 hover:bg-zinc-50 hover:text-black text-center">Collections</Link>
                    <Link to="/order" className="block px-6 py-3 hover:bg-zinc-50 hover:text-black text-center">Place an Order</Link>
                  </div>
                </div>
              )}
            </li>

            <DesktopLink to="/about" current={location.pathname}>ABOUT US</DesktopLink>
            <DesktopLink to="/contact" current={location.pathname}>MAKE AN INQUIRY</DesktopLink>
          </ul>
        </div>
      </header>

      {/* --- MOBILE STICKY BOTTOM NAV (Luxury Black Theme) --- */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-xl border-t border-zinc-200 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <div className="flex justify-around items-center h-16 px-4 relative">
          
          <MobileLink to="/" icon={<FaHome size={18} />} label="HOME" active={location.pathname === '/'} />

          <div className="relative">
            <button
              onClick={() => setIsBottomDropdownOpen(!isBottomDropdownOpen)}
              className={`flex flex-col items-center gap-1 transition-all ${isBottomDropdownOpen || location.pathname.includes('collection') || location.pathname.includes('order') ? 'text-black scale-110' : 'text-zinc-400'}`}
            >
              <FaTshirt size={18} />
              <span className="text-[8px] font-black tracking-widest">DESIGN</span>
            </button>

            {isBottomDropdownOpen && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col gap-2 w-44 animate-in fade-in slide-in-from-bottom-5 duration-300">
                <Link to="/collection" className="bg-black text-white px-4 py-4 rounded-xl text-[10px] font-bold tracking-widest text-center shadow-2xl uppercase">Collections</Link>
                <Link to="/order" className="bg-black text-white px-4 py-4 rounded-xl text-[10px] font-bold tracking-widest text-center shadow-2xl uppercase">Order Now</Link>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black mx-auto" />
              </div>
            )}
          </div>

          <MobileLink to="/about" icon={<FaInfoCircle size={18} />} label="ABOUT" active={location.pathname === '/about'} />
          <MobileLink to="/contact" icon={<FaEnvelope size={18} />} label="INQUIRY" active={location.pathname === '/contact'} />
        </div>
      </nav>
    </>
  );
};

const DesktopLink = ({ to, current, children }) => (
  <li>
    <Link to={to} className={`hover:text-black transition-colors pb-1 ${current === to ? "text-black border-b-2 border-black" : ""}`}>
      {children}
    </Link>
  </li>
);

const MobileLink = ({ to, icon, label, active }) => (
  <Link to={to} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-black scale-110' : 'text-zinc-400'}`}>
    {icon}
    <span className="text-[8px] font-black tracking-widest">{label}</span>
  </Link>
);

export default Navbar;