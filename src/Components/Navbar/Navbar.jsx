import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTshirt, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

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
            <Link to="/" onClick={handleLinkClick}>
              <div className="icon-link">
                <FaHome />
                <span>Home</span>
              </div>
            </Link>

            <div className="mobile-dropdown">
              <div className="icon-link" onClick={() => setIsDesignDropdownOpen(!isDesignDropdownOpen)}>
                <FaTshirt />
                <span>Our Design ▾</span>
              </div>
              {isDesignDropdownOpen && (
                <div className="mobile-dropdown-menu">
                  <Link to="/collection" onClick={handleLinkClick}>Collections</Link>
                  <Link to="/order" onClick={handleLinkClick}>Place an Order</Link>
                </div>
              )}
            </div>

            <Link to="/about" onClick={handleLinkClick}>
              <div className="icon-link">
                <FaInfoCircle />
                <span>About Us</span>
              </div>
            </Link>

            <Link to="/contact" onClick={handleLinkClick}>
              <div className="icon-link">
                <FaEnvelope />
                <span>Make an Inquiry</span>
              </div>
            </Link>
          </div>
        )}
      </nav>

      <div className="mobile-bottom-nav">
        <Link to="/" onClick={handleLinkClick}>
          <div className="icon-link">
            <FaHome />
            <span>Home</span>
          </div>
        </Link>

        <div className="mobile-bottom-dropdown">
          <div className="icon-link" onClick={() => setIsBottomDropdownOpen(!isBottomDropdownOpen)}>
            <FaTshirt />
            <span>Our Design ▾</span>
          </div>
          {isBottomDropdownOpen && (
            <div className="mobile-bottom-dropdown-menu">
              <Link to="/collection" onClick={handleLinkClick}>Collections</Link>
              <Link to="/order" onClick={handleLinkClick}>Make an Order</Link>
            </div>
          )}
        </div>

        <Link to="/about" onClick={handleLinkClick}>
          <div className="icon-link">
            <FaInfoCircle />
            <span>About Us</span>
          </div>
        </Link>

        <Link to="/contact" onClick={handleLinkClick}>
          <div className="icon-link">
            <FaEnvelope />
            <span>Inquiry</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
