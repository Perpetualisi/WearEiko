import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-serif tracking-widest uppercase">
              WearEiko
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Defining fashion identity through a blend of African heritage and modern elegance. Crafted with purpose in Benin City.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-pink-500 transition-colors">About Our Story</Link></li>
              <li><Link to="/collection" className="hover:text-pink-500 transition-colors">The Collection</Link></li>
              <li><Link to="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/order" className="hover:text-pink-500 transition-colors">Custom Bridal</Link></li>
              <li><Link to="/order" className="hover:text-pink-500 transition-colors">Bespoke Styling</Link></li>
              <li><Link to="/order" className="hover:text-pink-500 transition-colors">Fabric Sourcing</Link></li>
            </ul>
          </div>

          {/* Newsletter/Social */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/weareiko" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                TW
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest">
          <p>© {currentYear} WearEiko. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;