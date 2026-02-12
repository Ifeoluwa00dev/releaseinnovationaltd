
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/2.png';

const Navbar: React.FC<{ onSchedule: () => void }> = ({ onSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-black/90 border-b border-amber-500/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col">
            <Link to="/" className="text-xl sm:text-2xl font-serif font-bold tracking-wider gold-text">
              <img src={logo} alt="Release Innovations LTD"
              className="w-24 md:w-32 lg:w-48 h-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-amber-500 ${
                  isActive(link.path) ? 'text-amber-500' : 'text-zinc-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={onSchedule}
              className="px-6 py-2 gold-bg text-black text-sm font-bold uppercase tracking-widest rounded transition-transform active:scale-95 hover:brightness-110"
            >
              Schedule
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-500 p-2 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium tracking-widest uppercase ${
                isActive(link.path) ? 'text-amber-500' : 'text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onSchedule();
            }}
            className="w-full px-6 py-3 gold-bg text-black text-sm font-bold uppercase tracking-widest rounded"
          >
            Schedule Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
