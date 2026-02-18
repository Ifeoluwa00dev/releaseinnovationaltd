import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Globe2, Sparkles, TrendingUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { METRICS, TESTIMONIALS, PAIN_POINTS } from '../constants';
import { C } from '../constants'
/* ─── colour tokens (brand palette) ─────────────────────────── */


const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: C.ivory, color: C.navy }}>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
        style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.forest} 100%)` }}
      >
        {/* ambient glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: C.gold }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: C.forest }}
          />
        </div>

        {/* background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover opacity-10 grayscale"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in-up">
          <span
            className="text-xs font-semibold uppercase tracking-[0.45em] mb-6 block"
            style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
          >
            Business Development &amp; Strategic Advisory Firm for Cosmetic Brands.
          </span>

          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
          >
            Growth Is Not{' '}
            <span className="italic" style={{ color: C.gold }}>Accidental.</span>
            <br />
            It Is Engineered.
          </h1>

          <p
            className="text-lg sm:text-xl font-light mb-10 leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(253,250,246,0.80)', fontFamily: 'Montserrat, sans-serif' }}
          >
           
            We design the systems that turn visibility into sustainable, measurable growth
            for new, existing, and premium cosmetic brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-xl hover:scale-105"
              style={{
                backgroundColor: C.gold, color: C.navy,
                fontFamily: 'Montserrat, sans-serif',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.goldLight; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.gold; }}
            >
              Apply for Strategic Brand Review
            </Link>

            <Link
              to="/about"
              className="px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300"
              style={{
                color: C.ivory, border: `1px solid rgba(253,250,246,0.30)`,
                fontFamily: 'Montserrat, sans-serif',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = C.gold; el.style.color = C.gold;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(253,250,246,0.30)'; el.style.color = C.ivory;
              }}
            >
              Our Philosophy
            </Link>
          </div>
        </div>
      </section>


      {/* ── THE PROBLEM ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left copy */}
            <div>
              <span
                className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
                style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
              >
                Common Growth Challenges Nigerian Brands Face
              </span>
              <h2
                className="text-4xl font-bold mb-8 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
              >
                We know the hurdles brands encounter, because we’ve worked with them and studied the patterns.
                
              </h2>
              <p
                className="mb-8 text-lg leading-relaxed"
                style={{ color: '#4B5563', fontFamily: 'Montserrat, sans-serif' }}
              >
                 Here are the most common barriers to growth:
              </p>

              <ul className="space-y-4">
                {PAIN_POINTS.map((point: string, i: number) => (
                  <li key={i} className="flex items-center space-x-3 font-medium"
                    style={{ color: C.navy, fontFamily: 'Montserrat, sans-serif' }}>
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: C.gold }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right panel */}
            {/* <div
              className="p-12 relative overflow-hidden"
              style={{ backgroundColor: C.navy }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full"
                style={{ backgroundColor: 'rgba(197,160,89,0.10)' }}
              />
              <h3
                className="text-3xl mb-6 italic"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: C.gold }}
              >
                We Understand Your Growth Challenges — And We Structure the Solution.
              </h3>
              

              
              
            </div> */}
          </div>
        </div>
      </section>


      


{/* ── METRICS ──────────────────────────────────────────────── */}
      <section className="py-32" style={{ backgroundColor: C.navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <SectionHeading title="And We Structure the Solution" subtitle="We Understand Your Growth Challenges" light />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
    {METRICS.map((metric: { id: string | number; icon: React.ReactNode; value: string; label: string; description: string }) => (
      <div
        key={metric.id}
        className="p-10 rounded-lg transition-all duration-300 cursor-default"
        style={{
          background: 'rgba(253,250,246,0.05)',
          border: '1px solid rgba(197,160,89,0.20)',
          borderTopColor: C.gold,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = C.goldLight; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = C.gold; }}
      >
        <div className="mb-6">{metric.icon}</div>
        <span
          className="text-4xl font-bold block mb-2"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: C.gold }}
        >
          {metric.value}
        </span>
        <h3
          className="text-sm font-bold mb-4 uppercase tracking-[0.2em]"
          style={{ color: C.ivory, fontFamily: 'Montserrat, sans-serif' }}
        >
          {metric.label}
        </h3>
        <p
          className="text-xs leading-relaxed"
          style={{ color: 'rgba(253,250,246,0.50)', fontFamily: 'Montserrat, sans-serif' }}
        >
          {metric.description}
        </p>
      </div>
    ))}
  </div>
</div>
      </section>


      {/* ── SOLUTIONS GRID ───────────────────────────────────────── */}
      {/* <section className="py-24" style={{ backgroundColor: C.ivory }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="uppercase tracking-[0.3em] font-bold text-xs mb-4"
              style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
            >
              Methodologies
            </h2>
            <h3
              className="text-4xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
            >
              Predictable Growth Frameworks
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BarChart3 size={28} style={{ color: C.gold }} />, title: 'Sales System Setup',   desc: 'Moving from informal DM selling into structured, trackable sales engines.' },
              { icon: <TrendingUp size={28} style={{ color: C.gold }} />, title: 'Profit Optimisation',  desc: 'Focusing on high-margin SKUs and data-driven inventory management.' },
              { icon: <Globe2     size={28} style={{ color: C.gold }} />, title: 'Market Expansion',     desc: 'Step-by-step roadmaps for retail placement and state-level rollouts.' },
              { icon: <Sparkles  size={28} style={{ color: C.gold }} />, title: 'Brand Positioning',    desc: 'Engineered premium perception to protect authority and brand value.' },
            ].map((sol, i) => (
              <div
                key={i}
                className="bg-white p-8 border-b-2 border-transparent transition-all duration-300 shadow-sm hover:shadow-xl"
                style={{ borderBottomColor: 'transparent' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = C.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent'; }}
              >
                <div className="mb-6">{sol.icon}</div>
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
                >
                  {sol.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#6B7280', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {sol.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* ── PHILOSOPHY QUOTE ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: C.champagne }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-2xl md:text-4xl font-light leading-relaxed italic"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
          >
            "We don't consult to 'help' — We engineer the systems that make your growth
            predictable and your market dominance inevitable."
          </p>
          <div className="mt-10">
            <p
              className="font-bold uppercase tracking-[0.3em] text-lg"
              style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
            >
              Akudolu Onyinye
            </p>
            <p
              className="text-xs uppercase tracking-widest mt-2"
              style={{ color: '#6B7280', fontFamily: 'Montserrat, sans-serif' }}
            >
              Market Strategist • Growth Architect
            </p>
          </div>
        </div>
      </section>


      


      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: C.ivory }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: C.forest }}
          >
            Ready to move from hustle to{' '}
            <span style={{ color: C.gold }}>Scalable Systems?</span>
          </h2>
          <p
            className="max-w-xl mx-auto mb-10 text-lg font-light"
            style={{ color: 'rgba(34, 31, 26, 0.75)', fontFamily: 'Montserrat, sans-serif' }}
          >
             Access is limited to beauty founders ready to build beyond the hustle.
We partner with those committed to creating a structured, profitable, and lasting business -a true legacy.
<br />
Ready to make growth predictable? Book your strategy session now.

          </p>

          
        </div>
      </section>

    </div>
  );
};

export default Home;