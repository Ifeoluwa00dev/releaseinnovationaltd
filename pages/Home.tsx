
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { METRICS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/90 to-black z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Strategic Planning"
          />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <span className="text-sm sm:text-base font-bold uppercase tracking-[0.4em] gold-text mb-6 block animate-fade-in">
            Release Innovations LTD
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            Growth Is Not Accidental.<br />
            <span className="gold-text italic">It Is Engineered.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            I design the systems that turn visibility into sustainable, measurable growth for cosmetic and lifestyle brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="px-10 py-4 gold-bg text-black font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">
              Let's Talk Strategy
            </Link>
            <Link to="/services" className="px-10 py-4 border border-amber-500/30 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-amber-500/10 transition-all">
              Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Impact by Design" subtitle="Testimonials & Results" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {METRICS.map((metric) => (
              <div key={metric.id} className="glass-effect p-8 rounded-lg border-l-4 border-l-amber-500">
                <span className="text-3xl font-serif font-bold gold-text block mb-2">{metric.value}</span>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">{metric.label}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-4xl font-serif font-light text-zinc-300 leading-relaxed italic">
            "I don’t just consult — I build the system that makes selling predictable, measurable, and scalable."
          </p>
          <p className="mt-10 font-bold uppercase tracking-widest gold-text text-lg">— Akudolu Onyinye</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Clients Say" subtitle="Success Stories" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.id} className="relative p-10 glass-effect rounded-2xl italic text-zinc-300 leading-loose text-lg border border-amber-500/10">
                <span className="absolute -top-6 -left-2 text-8xl text-amber-500/10 font-serif leading-none">“</span>
                <p>"{t.quote}"</p>
                <footer className="mt-8 not-italic border-t border-amber-500/10 pt-6">
                  <cite className="gold-text font-bold block">— {t.author}</cite>
                  <span className="text-xs uppercase tracking-widest text-zinc-500">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-32 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-black mb-8">
            Ready to transition into an elevated model?
          </h2>
          <Link to="/contact" className="inline-block px-12 py-5 bg-black text-amber-500 font-bold uppercase tracking-widest text-lg rounded-full hover:bg-zinc-900 transition-colors shadow-2xl">
            Request Strategy Oversight
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
