import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/2.png';

const Navbar: React.FC<{ onSchedule: () => void }> = ({ onSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home',     path: '/' },
    { name: 'About',    path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact',  path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-sm shadow-lg"
      style={{
        backgroundColor: 'rgba(10, 25, 47, 0.95)',
        borderBottom: '1px solid rgba(197, 160, 89, 0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Release Innovations LTD"
                className="w-40 sm:w-40 md:w-48 lg:w-56 h-auto"
              />
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-3 py-2 text-sm font-medium uppercase tracking-widest transition-colors duration-200"
                style={{
                  color: isActive(link.path) ? '#c5a059' : '#fdfaf6',
                  fontFamily: 'Montserrat, sans-serif',
                }}
                onMouseEnter={e => { if (!isActive(link.path)) (e.target as HTMLElement).style.color = '#dcc18d'; }}
                onMouseLeave={e => { if (!isActive(link.path)) (e.target as HTMLElement).style.color = '#fdfaf6'; }}
              >
                {link.name}
              </Link>
            ))}

            {/* Schedule button */}
            <button
              onClick={onSchedule}
              className="px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:translate-y-[-2px] shadow-lg"
              style={{
                backgroundColor: '#c5a059',
                color: '#0a192f',
                fontFamily: 'Montserrat, sans-serif',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#dcc18d'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#c5a059'; }}
            >
              Schedule
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none transition-colors"
              style={{ color: '#c5a059' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden animate-fade-in-down"
          style={{
            backgroundColor: '#0a192f',
            borderBottom: '1px solid rgba(197, 160, 89, 0.2)',
          }}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium tracking-widest text-center transition-colors duration-200"
                style={{
                  color: isActive(link.path) ? '#c5a059' : '#fdfaf6',
                  borderBottom: '1px solid rgba(197, 160, 89, 0.1)',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {link.name}
              </Link>
            ))}

            <div className="p-4 space-y-3">
              {/* Schedule / modal */}
              <button
                onClick={() => { setIsOpen(false); onSchedule(); }}
                className="block w-full text-center py-3 font-bold uppercase tracking-widest text-sm transition-all"
                style={{
                  backgroundColor: '#c5a059',
                  color: '#0a192f',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Schedule Consultation
              </button>

              {/* CTA link */}
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;