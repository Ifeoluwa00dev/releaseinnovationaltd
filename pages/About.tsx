import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const C = {
  navy:      '#0a192f',
  forest:    '#1a392a',
  ivory:     '#fdfaf6',
  champagne: '#f0e6c8',
  gold:      '#c5a059',
  goldLight: '#dcc18d',
};

const About: React.FC = () => {
  return (
    <div style={{ backgroundColor: C.ivory }}>

      {/* ── EXECUTIVE BIO ────────────────────────────────────────── */}
      <section className="pt-20 py-24" style={{ backgroundColor: C.navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Photo column */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-lg"
                style={{ border: `1px solid rgba(197,160,89,0.25)` }}
              />
              <img
                src="https://res.cloudinary.com/drkksaa3i/image/upload/v1771322960/IMG-20260216-WA0017_rwo7cr.jpg"
                alt="Akudolu Onyinye"
                className="relative w-full rounded-lg shadow-2xl transition-all duration-700 hover:grayscale-0"
                style={{ border: `4px solid ${C.gold}` }}
              />
              {/* Years badge */}
              <div
                className="absolute -bottom-6 -right-6 p-8 hidden md:block"
                style={{ backgroundColor: C.gold }}
              >
                <span
                  className="block text-4xl font-bold leading-none"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
                >
                  6+
                </span>
                <span
                  className="block text-xs font-bold uppercase tracking-widest mt-1"
                  style={{ color: C.navy, fontFamily: 'Montserrat, sans-serif' }}
                >
                  Years Expertise
                </span>
              </div>
            </div>

            {/* Copy column */}
            <div>
              <span
                className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
                style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
              >
                Founder &amp; Lead Architect
              </span>
              <h1
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
              >
                Akudolu Onyinye
              </h1>
              <h2
                className="text-xl mb-6 italic"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: C.gold }}
              >
                Market Strategist. Growth Architect.
              </h2>
              <p
                className="text-lg font-light leading-relaxed mb-6"
                style={{ color: 'rgba(253,250,246,0.75)', fontFamily: 'Montserrat, sans-serif' }}
              >
                As the founder of <strong style={{ color: C.ivory }}>Release Innovations Ltd</strong>,
                I partner with founders and premium brands to align digital and physical growth channels.
              </p>
              <p
                className="text-lg font-light leading-relaxed mb-10"
                style={{ color: 'rgba(253,250,246,0.75)', fontFamily: 'Montserrat, sans-serif' }}
              >
                With over six years operating on the ground in Tradefair distribution, reseller
                networks, and market expansion, I help brands strengthen revenue, optimize market
                reach, and scale with authority rather than chaos.
              </p>

              {/* Competency pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: <Briefcase size={18} style={{ color: C.gold }} />, text: 'Market Strategist' },
                  { icon: <Zap        size={18} style={{ color: C.gold }} />, text: 'Growth Architect' },
                  { icon: <ShieldCheck size={18} style={{ color: C.gold }} />, text: 'Distribution Intelligence' },
                  { icon: <Award      size={18} style={{ color: C.gold }} />, text: 'Revenue Protection' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-4"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }}
                  >
                    {item.icon}
                    <span
                      className="text-sm font-semibold tracking-wide uppercase"
                      style={{ color: C.ivory, fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-block px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all"
                style={{ backgroundColor: C.gold, color: C.navy, fontFamily: 'Montserrat, sans-serif' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.goldLight; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.gold; }}
              >
                Schedule a Strategy Session
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ── MISSION QUOTES ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span
            className="uppercase tracking-[0.3em] font-bold text-xs mb-8 block"
            style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
          >
            Our Mission
          </span>
          <div className="space-y-12">
            <h3
              className="text-2xl md:text-3xl italic leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
            >
              "To identify where Nigerian beauty brands are losing revenue and fix it .both in-store and digitally ,so they can recover lost income and scale sustainably for the long term."
            </h3>
            <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: C.gold }} />
            <h3
              className="text-2xl md:text-3xl italic leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
            >
              "To help Nigerian beauty brands grow sustainably by creating systems that work consistently, even when the founder isn’t involved every day."
            </h3>
          </div>
        </div>
      </section>


      {/* ── CORE EXPERTISE ───────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: C.champagne }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Mission / Method */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: 'The Mission',
                  text: 'To de-risk Nigerian beauty brands by building systems that outlive the founder\'s daily input.',
                },
                {
                  label: 'The Method',
                  text: 'Hard data, SKU intelligence, and aggressive retail penetration strategies.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="pl-6 py-2"
                  style={{ borderLeft: `2px solid ${C.gold}` }}
                >
                  <h5
                    className="text-sm font-bold uppercase tracking-widest mb-2"
                    style={{ color: C.navy, fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.label}
                  </h5>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(10,25,47,0.60)', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Expertise list */}
            <div
              className="p-8 rounded-xl"
              style={{
                backgroundColor: 'rgba(10,25,47,0.05)',
                border: `1px solid rgba(197,160,89,0.20)`,
              }}
            >
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
              >
                Core Expertise
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Tradefair & Market Expansion',
                  'Distribution Architecture',
                  'Digital Strategy & E-Com',
                  'Revenue Protection',
                  'Premium Positioning',
                ].map((skill, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: C.gold }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: C.navy, fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ── TEAM ─────────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: C.forest }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
              style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
            >
              The Team
            </span>
            <h3
              className="text-4xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
            >
              Engineers of Brand Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member: { name: string; image: string; role: string; description: string }, i: number) => (
              <div
                key={i}
                className="p-10 text-center"
                style={{
                  backgroundColor: C.navy,
                  border: `1px solid rgba(197,160,89,0.15)`,
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-xl"
                  style={{ border: `2px solid ${C.gold}`, filter: 'grayscale(30%)' }}
                />
                <h4
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: C.gold }}
                >
                  {member.name}
                </h4>
                <p
                  className="text-xs uppercase tracking-[0.3em] font-bold mb-4"
                  style={{ color: C.goldLight, fontFamily: 'Montserrat, sans-serif' }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm leading-loose max-w-xs mx-auto"
                  style={{ color: 'rgba(253,250,246,0.65)', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── PROPRIETARY METHODS ──────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: C.ivory }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
              style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
            >
              Proprietary Methods
            </span>
            <h3
              className="text-4xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
            >
              Predictable Growth Frameworks
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Hard Data',            desc: 'We use real numbers to guide decisions, so every strategy is precise and measurable.' },
              { title: 'SKU Intelligence',      desc: 'Track and optimize products to focus on the most profitable items and reduce slow-moving stock.' },
              { title: 'Retail Penetration',    desc: 'Expand your brand into key stores, trade hubs, and markets where your products sell best.' },
              { title: 'Market Rollout',        desc: 'Step-by-step plans to enter new locations efficiently and profitably' },
              { title: 'Event Activation',      desc: 'Strategically use trade fairs and events to increase visibility and attract high-value customers.' },
              { title: 'Digital Optimisation',  desc: 'Grow online reach and sales through social media, marketplaces, and direct-to-consumer channels.' },
              { title: 'Distributor Mapping', desc: 'Identify, structure, and manage partners to scale your distribution network effectively.'},
               { title: 'Content Alignment', desc: 'Provide content ideas that directly support your growth plan, ensuring every post, video, or campaign drives results.'},
              { title: 'Continuous Tracking', desc: 'Measure progress, refine strategies, and adjust plans to ensure consistent and sustainable growth.'},
 

            ].map((method, i) => (
              <div
                key={i}
                className="bg-white p-8 border-l-4 shadow-sm transition-all hover:shadow-md"
                style={{ borderLeftColor: C.gold }}
              >
                <h4
                  className="text-lg font-bold mb-2 uppercase tracking-wide"
                  style={{ color: C.navy, fontFamily: 'Montserrat, sans-serif' }}
                >
                  {method.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#6B7280', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {method.desc}
                </p>

                <p className="text-sm leading-relaxed"
                  style={{ color: '#6B7280', fontFamily: 'Montserrat, sans-serif' }}>
                    …and more tailored strategies designed specifically for your brand.
                  </p>


              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── PHILOSOPHY ───────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: C.navy }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
          >
            Our Philosophy
          </h3>
          <div
            className="space-y-4 pl-6 text-lg leading-relaxed"
            style={{
              borderLeft: `2px solid rgba(197,160,89,0.40)`,
              color: 'rgba(253,250,246,0.60)',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            <p>
              As brands evolve, so must their structure. The systems that once supported growth
              may no longer be sufficient for expansion, authority, or premium positioning.
            </p>
            <p>
              At a certain level, refinement becomes essential — not because a brand is weak,
              but because it is ready for a more intentional standard of operation.
            </p>
            <p>
              Strategic alignment between distribution, digital infrastructure, pricing intelligence,
              and market expansion ensures that growth remains sustainable and brand value remains protected.
            </p>
            <p
              className="italic font-bold"
              style={{ color: C.gold, fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem' }}
            >
              This is the work We do.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;