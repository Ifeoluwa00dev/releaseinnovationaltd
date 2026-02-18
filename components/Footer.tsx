import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND_NAME } from '../constants';

const C = {
  navy:    '#0a192f',
  forest:  '#1a392a',
  gold:    '#c5a059',
  goldLight: '#dcc18d',
  ivory:   '#fdfaf6',
};

const Footer: React.FC = () => {
  return (
    <footer
      className="pt-16 pb-8 border-t"
      style={{ backgroundColor: C.navy, borderTopColor: 'rgba(197,160,89,0.20)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-4 tracking-wider"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.gold }}
            >
              {BRAND_NAME}
            </h3>
            

            {/* Social icons */}
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/releaseinnovations?igsh=MWs5czR0aTh5c2Ftag%3D%3D&ytm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full transition-colors duration-300"
                style={{ backgroundColor: C.forest }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.forest; }}
              >
                <Instagram size={18} style={{ color: C.ivory }} />
              </a>
              <a
                href="https://linkedin.com/company/release-innovations"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full transition-colors duration-300"
                style={{ backgroundColor: C.forest }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.forest; }}
              >
                <Linkedin size={18} style={{ color: C.ivory }} />
              </a>
            </div>
          </div>

          {/* Contact details */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-[0.2em] mb-6"
              style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact 
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm"
                style={{ color: 'rgba(253,250,246,0.55)', fontFamily: 'Montserrat, sans-serif' }}>
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: C.gold }} />
                <span>Metro homes, Kunle Asolo street, Before Lagos Business School, Lagos Nigeria.</span>
              </li>
              <li className="flex items-center space-x-3 text-sm"
                style={{ color: 'rgba(253,250,246,0.55)', fontFamily: 'Montserrat, sans-serif' }}>
                <Phone size={16} className="flex-shrink-0" style={{ color: C.gold }} />
                <a
                  href="https://wa.me/2349120264481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.goldLight; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(253,250,246,0.55)'; }}
                >
                   +234 816 203 3604
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm"
                style={{ color: 'rgba(253,250,246,0.55)', fontFamily: 'Montserrat, sans-serif' }}>
                <FaWhatsapp size={16} className="flex-shrink-0" style={{ color: C.gold }} />
                <a
                  href="https://wa.me/2349120264481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.goldLight; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(253,250,246,0.55)'; }}
                >
                  +234 912 026 4481 
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm"
                style={{ color: 'rgba(253,250,246,0.55)', fontFamily: 'Montserrat, sans-serif' }}>
                <Mail size={16} className="flex-shrink-0" style={{ color: C.gold }} />
                <a
                  href="mailto:releaseinnovationsltd@gmail.com"
                  className="transition-colors"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.goldLight; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(253,250,246,0.55)'; }}
                >
                  releaseinnovationsltd@gmail.com
                </a>
              </li>
            </ul>
          </div>

          
          

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-[0.2em] mb-6"
              style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home',     path: '/' },
                { label: 'About',    path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Contact',  path: '/contact' },
                { label: 'Reviews', path: '/reviews'}
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(253,250,246,0.55)', fontFamily: 'Montserrat, sans-serif' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.goldLight; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(253,250,246,0.55)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderTop: '1px solid rgba(197,160,89,0.10)' }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.3em]"
            style={{ color: 'rgba(253,250,246,0.30)', fontFamily: 'Montserrat, sans-serif' }}
          >
            &copy; {new Date().getFullYear()} {BRAND_NAME}. Engineered for Excellence.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy', 'Terms'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] uppercase tracking-widest transition-colors"
                style={{ color: 'rgba(253,250,246,0.30)', fontFamily: 'Montserrat, sans-serif' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(253,250,246,0.30)'; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;