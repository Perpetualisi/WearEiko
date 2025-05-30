import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesignDropdownOpen, setIsDesignDropdownOpen] = useState(false);
  const [isBottomDropdownOpen, setIsBottomDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsDesignDropdownOpen(false);
    setIsBottomDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div></div><div></div><div></div>
          </div>

          <div className="center-group">
            <div className="navbar-logo">WearEiko</div>

            <ul className="nav-links-desktop">
              <li><Link to="/">HOME</Link></li>
              <li
                className="dropdown"
                onMouseEnter={() => setIsDesignDropdownOpen(true)}
                onMouseLeave={() => setIsDesignDropdownOpen(false)}
              >
                <span>OUR DESIGN ▾</span>
                {isDesignDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/collection" onClick={handleLinkClick}>Collections</Link>
                    </li>
                    <li>
                      <Link to="/order" onClick={handleLinkClick}>Place an Order</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/contact">MAKE AN INQUIRY</Link></li>
            </ul>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={handleLinkClick}>Home</Link>
            <div className="mobile-dropdown">
              <span onClick={() => setIsDesignDropdownOpen(!isDesignDropdownOpen)}>Our Design ▾</span>
              {isDesignDropdownOpen && (
                <div className="mobile-dropdown-menu">
                  <Link to="/collection" onClick={handleLinkClick}>Collections</Link>
                  <Link to="/order" onClick={handleLinkClick}>Place an Order</Link>
                </div>
              )}
            </div>
            <Link to="/about" onClick={handleLinkClick}>About Us</Link>
            <Link to="/contact" onClick={handleLinkClick}>Make an Inquiry</Link>
          </div>
        )}
      </nav>

      <div className="mobile-bottom-nav">
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <div className="mobile-bottom-dropdown">
          <span onClick={() => setIsBottomDropdownOpen(!isBottomDropdownOpen)}>Our Design ▾</span>
          {isBottomDropdownOpen && (
            <div className="mobile-bottom-dropdown-menu">
              <Link to="/collection" onClick={handleLinkClick}>Collections</Link>
              <Link to="/order" onClick={handleLinkClick}>Make an Order</Link>
            </div>
          )}
        </div>
        <Link to="/about" onClick={handleLinkClick}>About Us</Link>
        <Link to="/contact" onClick={handleLinkClick}>Make an Inquiry</Link>
      </div>
    </>
  );
};

export default Navbar;
