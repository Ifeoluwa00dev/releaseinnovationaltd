import React , { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
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

// Animated counter hook
function useCounter(target: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

// Single stat card
function StatCard({
  metric, label, desc, percentage, delay
}: {
  metric: string; label: string; desc: string; percentage: number; delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(percentage, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center p-8 transition-colors"
      style={{ border: '1px solid rgba(255,255,255,0.10)' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.gold; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'; }}
    >
      {/* Metric value */}
      <motion.div
        className="text-4xl font-bold mb-2"
        style={{ fontFamily: 'Cormorant Garamond, serif', color: C.gold }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {metric}
      </motion.div>

      {/* Label */}
      <div
        className="text-xs uppercase tracking-widest font-bold mb-4"
        style={{ color: C.ivory, fontFamily: 'Montserrat, sans-serif' }}
      >
        {label}
      </div>

      {/* Skill bar */}
      <div
        className="w-full rounded-full mb-4 overflow-hidden"
        style={{ height: '3px', background: 'rgba(255,255,255,0.10)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${C.gold}, ${C.goldLight})` }}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${count}%` } : {}}
          transition={{ duration: 2, delay: delay + 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Percentage label */}
      <div
        className="text-xs mb-3 font-bold"
        style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
      >
        {inView ? count : 0}%
      </div>

      {/* Description */}
      <p
        className="text-xs leading-relaxed"
        style={{ color: 'rgba(253,250,246,0.45)', fontFamily: 'Montserrat, sans-serif' }}
      >
        {desc}
      </p>
    </motion.div>
  );
}


const Services: React.FC = () => {
  return (
    <div style={{ backgroundColor: C.ivory }}>

      {/* ── HEADER ───────────────────────────────────────────────── */}
<section
  className="pt-40 pb-32 py-24 text-center relative overflow-hidden"
  style={{
    backgroundImage: `url('https://res.cloudinary.com/drkksaa3i/image/upload/v1771440639/sarah-elizabeth-O3gOgPB4sRU-unsplash_e3klym.jpg')`, // swap with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
>
  {/* gradient overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: `linear-gradient(135deg,
        ${C.forest}f5 0%,
        ${C.forest}cc 50%,
        ${C.navy}e6 100%
      )`,
    }}
  />

  {/* decorative skew strip */}
  <div
    className="absolute top-0 right-0 w-1/2 h-full -skew-x-12 translate-x-1/2 opacity-10 z-0"
    style={{ backgroundColor: C.gold }}
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        When our framework is applied 
      </span>
      <h3
        className="text-4xl font-bold"
        style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
      >
        Every core area of your business is fully covered
      </h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { metric: 'SKU Optimization',     label: '',  desc: 'All products tracked and prioritized for profitability',                percentage: 100, delay: 0 },
        { metric: 'Market Expansion',      label: 'Market Expansion',    desc: 'Physical and digital channel mapped for growth.',           percentage: 70, delay: 0.3 },
        { metric: 'Distribution & Reseller Systems',     label: 'Brand Clarity',       desc: 'Structured partnerships, scalable reach',       percentage: 90, delay: 0.15 },
        { metric: 'Content Alignment', label: '',  desc: 'Every post, campaign, and activation tied to sales goals.',             percentage: 95, delay: 0.45 },
        { metric: 'Revenue & Margin Intelligence', label: '',  desc: 'Tracking, analysis, and optimization built in',             percentage: 100, delay: 0.45 },
      ].map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>


<div className="text-center mb-4 pt-16">
      <span
        className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
        style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
      >
        Note: These percentages reflect framework coverage, not guaranteed results
      </span>
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