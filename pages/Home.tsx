
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { METRICS, TESTIMONIALS, PAIN_POINTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/95 to-black z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Market Strategy"
          />
        </div>
        
        <div className="relative z-20 text-center max-w-5xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.5em] gold-text mb-6 block animate-fade-in">
            Distribution Intelligence • Growth Architecture
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1]">
            Scaling Nigerian Beauty From <span className="gold-text italic underline decoration-amber-500/30">Instagram Hustle</span> To Retail Powerhouses.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            We help beauty founders move from erratic social media sales to structured, scalable distribution systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <Link to="/services" className="px-12 py-5 gold-bg text-black font-bold uppercase tracking-widest text-sm rounded shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-105 transition-all">
              The Architecture
            </Link>
            <Link to="/contact" className="px-12 py-5 border border-amber-500/30 text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-amber-500/10 transition-all">
              Apply for Strategic Review
            </Link>
            
          </div>
        </div>
      </section>
      

      {/* The Problem Section */}
      <section className="py-32 bg-zinc-950 border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest gold-text mb-4 block">The Industry Reality</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                Most Nigerian Cosmetic Brands <br/><span className="text-zinc-500">Are Built On Sand.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Founders often mistake high engagement for high scalability. If your business stops when your Instagram app is closed, you don't have a brand—you have a digital hustle.
              </p>
            </div>
            <div className="glass-effect p-10 rounded-3xl border border-red-500/10 relative">
              <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest flex items-center">
                <span className="w-8 h-px bg-red-500 mr-4"></span>
                Critical Fail Points
              </h3>
              <ul className="space-y-6">
                {PAIN_POINTS.map((point, i) => (
                  <li key={i} className="flex items-start group">
                    <span className="text-red-500/50 mr-4 font-mono">0{i+1}</span>
                    <span className="text-zinc-300 group-hover:text-white transition-colors">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Philosophy Section */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-4xl font-serif font-light text-zinc-300 leading-relaxed italic">
            "We don’t consult to 'help' — We engineer the systems that make your growth predictable and your market dominance inevitable."
          </p>
          <div className="mt-10">
            <p className="font-bold uppercase tracking-[0.3em] gold-text text-lg">Akudolu Onyinye</p>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Market Strategist • Growth Architect</p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Impact & Intelligence" subtitle="System Benchmarks" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {METRICS.map((metric) => (
              <div key={metric.id} className="glass-effect p-10 rounded-lg border-t-2 border-t-amber-500/50 hover:border-amber-500 transition-all group">
                <span className="text-4xl font-serif font-bold gold-text block mb-2">{metric.value}</span>
                <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-[0.2em]">{metric.label}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      

      {/* Testimonials */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Proof of Strategy" subtitle="Testimonial" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.id} className="relative p-12 glass-effect rounded-3xl italic text-zinc-300 leading-relaxed text-xl border border-amber-500/10">
                <p>"{t.quote}"</p>
                <footer className="mt-8 not-italic flex items-center justify-between border-t border-amber-500/10 pt-8">
                  <div>
                    <cite className="gold-text font-bold block text-sm uppercase tracking-widest">{t.author}</cite>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{t.role}</span>
                  </div>
                  <div className="h-px w-12 bg-amber-500/20"></div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-32 bg-zinc-950 border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
            Access Is Limited. <br/><span className="text-zinc-500">Excellence Is Required.</span>
          </h2>
          <p className="text-zinc-400 mb-12 text-lg">I only work with founders who are ready to transition from hustle to a legacy business model.</p>
      
        </div>
      </section>
    </div>
  );
};

export default Home;
