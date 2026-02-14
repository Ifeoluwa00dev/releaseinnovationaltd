
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
              src="https://res.cloudinary.com/drkksaa3i/image/upload/v1770990478/Vanessa_4a23-9b6d-3c5551ada816_ayvdud.jpg" 
              alt="Akudolu Onyinye" 
              className="relative w-full rounded-lg shadow-2xl  transition-all duration-700"
            />
            <div className="absolute bottom-6 right-6 glass-effect p-6 rounded border border-amber-500/40 max-w-xs">
              <p className="gold-text font-serif italic text-lg mb-2">"Growth is not about doing more. It is about building systems strong enough to carry more."</p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-500 mb-6">Professional Identity</h3>
              <h4 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Market Strategist. <br/>Growth Architect.</h4>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                As the founder of <span className="text-white font-medium">Release Innovations Ltd</span>, I partner with founders and premium brands to align digital and physical growth channels.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                With over six years operating on the ground in Tradefair distribution, reseller networks, and market expansion, I help brands strengthen revenue, optimize market reach, and scale with authority rather than chaos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="border-l border-amber-500/30 pl-6 py-2">
                 <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-2">The Mission</h5>
                 <p className="text-zinc-500 text-sm">To de-risk Nigerian beauty brands by building systems that outlive the founder's daily input.</p>
               </div>
               <div className="border-l border-amber-500/30 pl-6 py-2">
                 <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-2">The Method</h5>
                 <p className="text-zinc-500 text-sm">Hard data, SKU intelligence, and aggressive retail penetration strategies.</p>
               </div>
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

            
          </div>
          
        </div>
        <div className= "mt-32 item-center">
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
  );
};

export default About;
