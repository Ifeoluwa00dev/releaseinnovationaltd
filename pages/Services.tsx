
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Engineered Growth Solutions" subtitle="What We Offer" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="group relative glass-effect p-12 rounded-2xl border border-amber-500/10 hover:border-amber-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-6 -right-6 text-9xl font-serif font-bold text-amber-500/5 transition-colors group-hover:text-amber-500/10">
                0{index + 1}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 group-hover:gold-text transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 mb-8 text-lg font-light leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 gold-border border rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 gold-text" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-zinc-300 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 glass-effect rounded-3xl border border-amber-500/20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full gold-bg"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Who I Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-400">
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h4 className="gold-text font-bold mb-3 uppercase tracking-widest text-xs">New Entrants</h4>
              <p>Launching a new cosmetic brand with a robust market-ready structure.</p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h4 className="gold-text font-bold mb-3 uppercase tracking-widest text-xs">Scaling Brands</h4>
              <p>Existing brands with untapped potential ready for market expansion.</p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h4 className="gold-text font-bold mb-3 uppercase tracking-widest text-xs">Premium Brands</h4>
              <p>Exclusive brands that must scale without diluting authority.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
