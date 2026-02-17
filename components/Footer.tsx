import React from 'react';
import { BRAND_NAME } from '../constants';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const socials = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: Instagram
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/yourcompany',
    icon: Linkedin
  },
  // {
  //   name: 'Twitter',
  //   url: 'https://twitter.com/yourusername',
  //   icon: Twitter
  // }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-amber-500/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold gold-text mb-4">
              {BRAND_NAME}
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Transitioning business owners from outdated structures into elevated, scalable business models.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest gold-text mb-6">
              Location
            </h4>
            <p className="text-zinc-400">
              Metro homes, Kunle Asolo street, Before Lagos Business School, Lagos Nigeria.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest gold-text mb-6">
              Inquiries
            </h4>
            <p className="text-zinc-400 space-y-2">
              <a
                href="https://wa.me/2349120264481"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-amber-400"
              >
                WhatsApp: +234 912 026 4481
              </a>

              <a
                href="mailto:releaseinnovationsltd@gmail.com"
                className="block hover:text-amber-400"
              >
                Email: releaseinnovationsltd@gmail.com
              </a>
            </p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest gold-text mb-6">
              Contact Us
            </h4>
            <div className="flex space-x-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-amber-500/20 text-zinc-400 hover:text-amber-500 hover:border-amber-500 transition-all"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-amber-500/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-zinc-500 uppercase">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
