
import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-amber-500/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold gold-text mb-4">{BRAND_NAME}</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Transitioning business owners from outdated structures into elevated, scalable business models.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest gold-text mb-6">Location</h4>
            <p className="text-zinc-400">
              Emmanuel Court, Kunle Asolo Street.<br />
              Metro homes. Lagos Nigeria
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest gold-text mb-6">Inquiries</h4>
            <p className="text-zinc-400">
              <span className="block mb-2">Phone: 08162033604</span>
              <span>Email: Onyivanny17@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="border-t border-amber-500/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-zinc-500 uppercase">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
