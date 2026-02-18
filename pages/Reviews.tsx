import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { C } from '../constants';
import { TESTIMONIALS} from '../constants'

const Reviews: React.FC = () => {
  return (
    <div>
      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
<section
  className="py-32 overflow-hidden relative"
  style={{
    backgroundImage: `url('https://images.nappy.co/photo/HNuSZewwSTsVZw50X2UOH.jpg?width=1260')`, // swap with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // parallax feel, remove if unwanted
  }}
>
  {/* dark gradient overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: `linear-gradient(135deg, 
        ${C.navy}f2 0%, 
        ${C.navy}cc 40%, 
        rgba(26,57,42,0.85) 100%
      )`,
    }}
  />

  {/* decorative skew strip */}
  <div
    className="absolute top-0 right-0 w-1/2 h-full -skew-x-12 translate-x-1/2 opacity-10 z-0"
    style={{ backgroundColor: C.gold }}
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <SectionHeading title="Proof of Strategy" subtitle="What People Say About Working With Onyi" light />
    <p
      className="relative p-4 rounded-xl italic leading-relaxed text-xl"
      style={{
        color: 'rgba(253,250,246,0.85)',
        fontFamily: 'Cormorant Garamond, serif',
      }}
    >
      Clients, peers, and partners recognize the clarity, insight, and premium quality she brings to every project.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      {TESTIMONIALS.map((t: { id: string | number; quote: string; author: string; role: string }) => (
        <blockquote
          key={t.id}
          className="relative p-12 rounded-3xl italic leading-relaxed text-xl"
          style={{
            background: 'rgba(253,250,246,0.06)',
            border: `1px solid rgba(197,160,89,0.15)`,
            color: 'rgba(253,250,246,0.85)',
            fontFamily: 'Cormorant Garamond, serif',
            backdropFilter: 'blur(8px)', // frosted glass effect on top of image
          }}
        >
          <p>"{t.quote}"</p>
          <footer
            className="mt-8 not-italic flex items-center justify-between pt-8"
            style={{ borderTop: '1px solid rgba(197,160,89,0.15)' }}
          >
            <div>
              <cite
                className="font-bold block text-sm uppercase tracking-widest not-italic"
                style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
              >
                {t.author}
              </cite>
              <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{ color: 'rgba(253,250,246,0.40)', fontFamily: 'Montserrat, sans-serif' }}
              >
                {t.role}
              </span>
            </div>
            <div
              className="h-px w-12"
              style={{ backgroundColor: 'rgba(197,160,89,0.25)' }}
            />
          </footer>
        </blockquote>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}

export default Reviews
