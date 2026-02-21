import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Globe2, Sparkles, TrendingUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { METRICS, TESTIMONIALS, PAIN_POINTS } from '../constants';
import heroVideo from '../assets/images/vaness.mp4';
import { C } from '../constants'
/* ─── colour tokens (brand palette) ─────────────────────────── */


const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: C.ivory, color: C.navy }}>

      {/* ── HERO ──────────────────────────────────────────────────── */}
     <section
  className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
>
  {/* ambient glow blobs */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div
      className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-50"
      style={{ backgroundColor: C.gold }}
    />
    <div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-50"
      style={{ backgroundColor: C.forest }}
    />
  </div>

  {/* background video overlay */}
  <div className="absolute inset-0 z-0">
    {/* light gradient so text stays readable */}
    <div
      className="absolute inset-0 z-10"
      style={{
        background: `linear-gradient(135deg, ${C.navy}99 0%, ${C.forest}88 100%)`,
      }}
    />
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover opacity-60"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>
  </div>

  <div className="relative z-20 text-center max-w-5xl mx-auto w-full animate-fade-in-up">

    {/* Available badge */}
    <div
      className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold"
      style={{
        backgroundColor: 'rgba(255,255,255,0.10)',
        border: '1px solid rgba(255,255,255,0.30)',
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      <span className="relative flex h-2 w-2">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ backgroundColor: 'white' }}
        />
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ backgroundColor: 'white' }}
        />
      </span>
      <span className="hidden sm:inline">Now Accepting New Brand Partnerships</span>
      <span className="sm:hidden">Now Accepting Partnerships</span>
    </div>

    <span
      className="text-xs font-extrabold uppercase tracking-[0.45em] mb-6 block px-2"
      style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
    >
      Business Development &amp; Strategic Advisory Firm for Cosmetic Brands.
    </span>

    <h1
      className="text-4xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] px-2"
      style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
    >
      Growth Is Not{' '}
      <span className="italic font-extrabold" style={{ color: C.gold }}>Accidental.</span>
      <br />
      It Is Engineered.
    </h1>

    <p
      className="text-base sm:text-xl font-extrabold mb-10 leading-relaxed max-w-2xl mx-auto px-2"
      style={{ color: 'rgba(253,250,246,0.80)', fontFamily: 'Montserrat, sans-serif' }}
    >
      We design the systems that turn visibility into sustainable, measurable growth
      for new, existing, and premium cosmetic brands.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
      <Link
        to="/contact"
        className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 font-extrabold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 shadow-xl hover:scale-105 text-center"
        style={{
          backgroundColor: C.gold,
          color: C.navy,
          fontFamily: 'Montserrat, sans-serif',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.goldLight; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.gold; }}
      >
        Apply for Strategic Brand Review
      </Link>

      <Link
        to="/about"
        className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 font-extrabold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 text-center"
        style={{
          color: C.ivory,
          border: `1px solid rgba(197,160,89,0.7)`,
          background: 'rgba(197,160,89,0.12)',
          fontFamily: 'Montserrat, sans-serif',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = C.gold;
          el.style.color = C.navy;
          el.style.background = C.gold;
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = 'rgba(197,160,89,0.7)';
          el.style.color = C.ivory;
          el.style.background = 'rgba(197,160,89,0.12)';
        }}
      >
        Our Philosophy
      </Link>
    </div>
  </div>
</section>


      {/* ── THE PROBLEM ──────────────────────────────────────────── */}
      
<section className="pt-12 pb-6" style={{ backgroundColor: C.ivory }}>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-6">
      <span
        className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
        style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
      >
        Common Barriers
      </span>
      <p  className="text-sm leading-relaxed"
              style={{ color: 'rgba(10,25,47,0.65)', fontFamily: 'Montserrat, sans-serif' }}> We know the hurdles brands encounters, because  we've worked with them and studied the pattern </p>
      <h2
        className="text-4xl md:text-5xl font-bold mb-6"
        style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
      >
        Here Are Some Common Barriers to Growth
      </h2>
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-16" style={{ backgroundColor: 'rgba(197,160,89,0.3)' }} />
        <div className="w-2 h-2 rotate-45" style={{ backgroundColor: C.gold }} />
        <div className="h-px w-16" style={{ backgroundColor: 'rgba(197,160,89,0.3)' }} />
      </div>
    </div>

    {/* Barriers */}
    <div className="flex flex-col gap-0">
      {[
        {
          number: '01',
          title: 'Influencer Partnerships Wahala',
          summary: 'Many beauty brands collaborate with influencers or MUAs based on popularity rather than conversion power.',
          points: [
            'Collaborations are rarely tracked for actual revenue generated.',
            'Performance is measured only by likes, views, or comments.',
            'Investment spent on influencing becomes guesswork.',
          ],
        },
        {
          number: '02',
          title: 'Untracked Products & Sales',
          summary: 'Too many brands are flying blind, with no real way to track which products are actually moving or which stalls are performing.',
          points: [
            'No visibility on which products are true best-sellers or slow-movers.',
            'No data on which stalls or locations are high-performing.',
            'Stock sits on shelves, sometimes literally gathering dust, while capital remains locked in unsold inventory.',
          ],
        },
        {
          number: '03',
          title: 'Depending on Social Media Alone',
          summary: 'Many brands are vulnerable to algorithm changes and unpredictable reach.',
          points: [
            'If an account gets flagged, sales can collapse overnight.',
            'Algorithm shifts can wipe out months of organic growth.',
            'No backup channel means no safety net for your revenue.',
            'Relying only on  \"DM to order\" puts your business at the mercy of platforms you don\'t own, making growth unpredictable and risky '
          ],
        },
      ].map((barrier, i) => (
        <div
          key={i}
          className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-0 transition-all duration-300"
          style={{ borderBottom: '1px solid rgba(197,160,89,0.15)' }}
        >
          {/* left — large number */}
          <div
            className="hidden md:flex items-start justify-center pt-10 pb-10"
            style={{ borderRight: '1px solid rgba(197,160,89,0.15)' }}
          >
            <span
              className="text-6xl font-bold leading-none select-none transition-all duration-300 group-hover:opacity-100"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: 'rgba(197,160,89,0.2)',
              }}
            >
              {barrier.number}
            </span>
          </div>

          {/* right — content */}
          <div className="py-10 md:pl-12 flex flex-col gap-4">

            {/* mobile number */}
            <span
              className="md:hidden text-3xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: 'rgba(197,160,89,0.4)' }}
            >
              {barrier.number}
            </span>

            {/* title */}
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
            >
              {barrier.title}
            </h3>

            {/* gold divider */}
            <div className="w-10 h-px" style={{ backgroundColor: C.gold }} />

            {/* summary */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(10,25,47,0.65)', fontFamily: 'Montserrat, sans-serif' }}
            >
              {barrier.summary}
            </p>

            {/* bullet points */}
            <ul className="flex flex-col gap-2 mt-2">
              {barrier.points.map((point, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: C.gold }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(10,25,47,0.55)', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      


<section className="pt-12 pb-8" style={{ backgroundColor: C.navy }}>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-12">
      <span
        className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
        style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
      >
        Our Solutions
      </span>
      <h2
        className="text-4xl md:text-5xl font-bold mb-6"
        style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
      >
        We Understand Your Growth Challenges
      </h2>
      <p
        className="text-sm max-w-xl mx-auto mb-6"
        style={{ color: 'rgba(253,250,246,0.60)', fontFamily: 'Montserrat, sans-serif' }}
      >
         and we structure the solutions.
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-16" style={{ backgroundColor: 'rgba(197,160,89,0.3)' }} />
        <div className="w-2 h-2 rotate-45" style={{ backgroundColor: C.gold }} />
        <div className="h-px w-16" style={{ backgroundColor: 'rgba(197,160,89,0.3)' }} />
      </div>
    </div>

    {/* Solutions */}
    <div className="flex flex-col gap-0">
      {[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          ),
          title: 'Influencer Pairing & Revenue Tracking',
          summary: 'We identify MUAs and influencers with real purchasing authority in your target market.',
          points: [
            'Each product is paired intentionally, not randomly.',
            'Every collaboration is tracked using performance codes and real sales data.',
          ],
          tags: ['No guesswork.', 'No assumptions.', 'Only measurable, real results.'],
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
            </svg>
          ),
          title: 'Comprehensive SKU & Performance Intelligence',
          summary: 'In this market, information is everything. Our advanced tracking system provides complete visibility, from warehouse to retail floor.',
          points: [
            'We monitor every single unit to ensure your hottest products are always where your customers are.',
            'Smart SKU tracking identifies best-sellers, slow-movers, and high-performing stalls.',
            'Every data point becomes real, trackable profit.',
          ],
          tags: ['No guesswork.', 'Only actions that drive revenue.'],
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          ),
          title: 'Sales System Setup (SSS)',
          summary: "We don't just build websites, we build revenue engines. Our systems move brands from informal social selling to structured, trackable sales channels.",
          points: [
            '24/7 Commerce: Campaigns run even when your shop is closed.',
            'Own Your Business: Keep customer lists and sales data independent of algorithms.',
            'Professional Digital Storefront: Transform from a social page into a polished storefront.',
            'Automated Growth: Build systems that work for you even while you sleep.',
          ],
          tags: [],
        },
      ].map((solution, i) => (
        <div
          key={i}
          className="group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-0 transition-all duration-300"
          style={{ borderBottom: '1px solid rgba(197,160,89,0.15)' }}
        >
          {/* left — icon column */}
          <div
            className="hidden md:flex items-start justify-center pt-10"
            style={{ borderRight: '1px solid rgba(197,160,89,0.15)' }}
          >
            <div style={{ color: C.gold }}>
              {solution.icon}
            </div>
          </div>

          {/* right — content */}
          <div className="py-10 md:pl-12 flex flex-col gap-4">

            {/* mobile icon */}
            <div className="md:hidden" style={{ color: C.gold }}>
              {solution.icon}
            </div>

            {/* title */}
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
            >
              {solution.title}
            </h3>

            {/* gold divider */}
            <div className="w-10 h-px" style={{ backgroundColor: C.gold }} />

            {/* summary */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(253,250,246,0.60)', fontFamily: 'Montserrat, sans-serif' }}
            >
              {solution.summary}
            </p>

            {/* bullet points */}
            <ul className="flex flex-col gap-2">
              {solution.points.map((point, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: C.gold }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(253,250,246,0.50)', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* tags */}
            {solution.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-2">
                {solution.tags.map((tag, k) => (
                  <span
                    key={k}
                    className="text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                    style={{
                      border: `1px solid rgba(197,160,89,0.30)`,
                      color: C.gold,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ── METRICS ──────────────────────────────────────────────── */}
      {/* <section className="py-32" style={{ backgroundColor: C.navy }}>
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
      </section> */}


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
            "We don't consult to 'help', We engineer the systems that make your growth
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
      {/* <section className="py-24" style={{ backgroundColor: C.ivory }}>
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
      </section> */}

    </div>
  );
};

export default Home;