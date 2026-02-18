import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Layers, Layout, Shield } from 'lucide-react';
import { SERVICES } from '../constants';

const C = {
  navy:      '#0a192f',
  forest:    '#1a392a',
  ivory:     '#fdfaf6',
  champagne: '#f0e6c8',
  gold:      '#c5a059',
  goldLight: '#dcc18d',
};

const iconMap: Record<number, React.ReactNode> = {
  0: <Target  size={40} style={{ color: C.gold }} />,
  1: <Layers  size={40} style={{ color: C.gold }} />,
  2: <Shield  size={40} style={{ color: C.gold }} />,
  3: <Layout  size={40} style={{ color: C.gold }} />,
};

const Services: React.FC = () => {
  return (
    <div style={{ backgroundColor: C.ivory }}>

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <section className="pt-20 py-24 text-center" style={{ backgroundColor: C.forest }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
            style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
          >
            Our Offering
          </span>
          <h1
            className="text-5xl font-bold mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
          >
            Structural Intelligence for{' '}
            <span style={{ color: C.gold }}>Scale.</span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg font-light leading-relaxed"
            style={{ color: 'rgba(253,250,246,0.80)', fontFamily: 'Montserrat, sans-serif' }}
          >
            We don't just consult — We build the system that makes selling predictable, measurable,
            and scalable. We align your physical market expertise with digital dominance.
          </p>
        </div>
      </section>


      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map((service: { id: string | number; title: string; description: string; points: string[] }, index: number) => (
              <div
                key={service.id}
                className="group relative p-12 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: 'rgba(10,25,47,0.06)',
                  border: '1px solid rgba(197,160,89,0.15)',
                  backgroundColor: 'white',
                  borderTop: `4px solid ${C.gold}`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = C.gold;
                  (e.currentTarget as HTMLElement).style.borderTopColor = C.gold;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(197,160,89,0.15)';
                  (e.currentTarget as HTMLElement).style.borderTopColor = C.gold;
                }}
              >
                {/* Large number watermark */}
                <div
                  className="absolute -top-6 -right-6 text-9xl font-bold select-none pointer-events-none transition-all duration-300"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    color: 'rgba(197,160,89,0.07)',
                  }}
                >
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="mb-8 transition-transform duration-300 group-hover:scale-110">
                  {iconMap[index] ?? <Target size={40} style={{ color: C.gold }} />}
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-lg font-light leading-relaxed mb-8"
                  style={{ color: '#6B7280', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.points.map((point: string, i: number) => (
                    <li key={i} className="flex items-start space-x-4">
                      <span
                        className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ border: `1px solid ${C.gold}` }}
                      >
                        <svg
                          className="w-3 h-3"
                          style={{ color: C.gold }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span
                        className="font-medium text-sm leading-relaxed"
                        style={{ color: C.navy, fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── METRICS ──────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: C.navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
              style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
            >
              Proven Results
            </span>
            <h3
              className="text-4xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
            >
              Metrics of Success
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '50–200%',  label: 'Distributor Growth',   desc: 'Increase in product movement after structured strategy.' },
              { metric: '100%',     label: 'Brand Clarity',        desc: 'Unified digital + physical messaging creating premium perception.' },
              { metric: 'States',   label: 'Market Expansion',     desc: 'Successful rollout across multiple high-profile beauty fairs.' },
              { metric: 'High-ROI', label: 'Digital Conversion',   desc: 'Optimised e-commerce and content strategy for repeat buys.' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.10)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'; }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: C.gold }}
                >
                  {stat.metric}
                </div>
                <div
                  className="text-xs uppercase tracking-widest font-bold mb-4"
                  style={{ color: C.ivory, fontFamily: 'Montserrat, sans-serif' }}
                >
                  {stat.label}
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'rgba(253,250,246,0.45)', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── WHO WE WORK WITH ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: C.champagne }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
              style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
            >
              Selective Partnership
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
            >
              Who We Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: 'New Entrants',
                text: 'Launching a new cosmetic brand with a robust market-ready structure from day one.',
              },
              {
                label: 'Scaling Brands',
                text: 'Existing brands with untapped potential ready for market expansion beyond Instagram.',
              },
              {
                label: 'Premium Brands',
                text: 'Exclusive brands that must scale without diluting authority or market perception.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-lg text-center bg-white shadow-sm transition-shadow hover:shadow-xl"
                style={{ border: `1px solid rgba(197,160,89,0.20)` }}
              >
                <h4
                  className="font-bold mb-4 uppercase tracking-widest text-xs"
                  style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.label}
                </h4>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: 'rgba(10,25,47,0.65)', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CLOSING QUOTE / CTA ──────────────────────────────────── */}
      <section className="py-24 text-center" style={{ backgroundColor: C.navy }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 italic"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
          >
            "I don't just create strategies; I build systems that turn visibility into measurable revenue."
          </h2>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105"
            style={{ backgroundColor: C.gold, color: C.navy, fontFamily: 'Montserrat, sans-serif' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.goldLight; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.gold; }}
          >
            Apply for Strategic Brand Review
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;