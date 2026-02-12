
import React from 'react';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Strategic Growth Architect" subtitle="Akudolu Onyinye" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute -inset-4 border border-amber-500/20 rounded-lg"></div>
            <img 
              src="https://picsum.photos/800/1000?grayscale&v=1" 
              alt="Akudolu Onyinye" 
              className="relative w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-6 right-6 glass-effect p-6 rounded border border-amber-500/40 max-w-xs">
              <p className="gold-text font-serif italic text-lg mb-2">"Growth is not about doing more. It is about building systems strong enough to carry more."</p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6 underline underline-offset-8 decoration-amber-500/30">Executive Bio</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                As the founder of <span className="text-white font-medium">Release Innovations Ltd</span>, I partner with founders and premium brands to align digital and physical growth channels.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                With over six years operating on the ground in Tradefair distribution, reseller networks, and market expansion, I help brands strengthen revenue, optimize market reach, and scale with authority rather than chaos.
              </p>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-xl border border-amber-500/10">
              <h4 className="text-xs font-bold uppercase tracking-widest gold-text mb-6">Core Expertise</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-300">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 gold-bg rounded-full"></span>
                  <span>Tradefair & Market Expansion</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 gold-bg rounded-full"></span>
                  <span>Distribution Architecture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 gold-bg rounded-full"></span>
                  <span>Digital Strategy & E-Com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 gold-bg rounded-full"></span>
                  <span>Revenue Protection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 gold-bg rounded-full"></span>
                  <span>Premium Positioning</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Philosophy</h3>
              <div className="space-y-4 text-zinc-400 border-l-2 border-amber-500/40 pl-6">
                <p>As brands evolve, so must their structure. The systems that once supported growth may no longer be sufficient for expansion, authority, or premium positioning.</p>
                <p> At a certain level, refinement becomes essential - not because a brand is weak, but because it is ready for more intentional standard of operation</p>
                <p>Strategic alignment between distribution, digital infrastructure, pricing intelligence, and market expansion ensures that growth remains sustainable and brand value remains protected.</p>
                <p className="text-white font-serif italic">This is the work I do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
