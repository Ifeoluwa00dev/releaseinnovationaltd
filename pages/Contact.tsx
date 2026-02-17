import React, { useState } from 'react';
import { Instagram, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { BRAND_NAME } from '../constants';
import emailjs from '@emailjs/browser';

// Extend Window for tracking pixels
declare const fbq: Function;
declare const gtag: Function;

const C = {
  navy:      '#0a192f',
  forest:    '#1a392a',
  ivory:     '#fdfaf6',
  champagne: '#f0e6c8',
  gold:      '#c5a059',
  goldLight: '#dcc18d',
};

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pfjqfqd',
      'template_aoeof4c',
      e.currentTarget,
      'ezMGR7P7mJlhZRBQ1'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);

      // Track conversion — EmailJS success
      if (typeof fbq !== 'undefined') { fbq('track', 'Contact'); }
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'conversion',
          event_label: 'consultation_request',
        });
      }

      setIsSent(true);
      setTimeout(() => setIsSent(false), 4000);
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again or email us directly.');
    });
  };

  /* ── shared input style helpers ────────────────────────────── */
  const inputClass = "w-full px-4 py-4 outline-none transition-all text-sm";
  const inputStyle = {
    backgroundColor: C.champagne,
    color: C.navy,
    fontFamily: 'Montserrat, sans-serif',
    border: 'none',
  };
  const labelStyle = {
    display: 'block',
    color: C.navy,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.15em',
    fontSize: '0.625rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
    fontFamily: 'Montserrat, sans-serif',
  };

  return (
    <div style={{ backgroundColor: C.ivory }}>

      <section className="pt-20 py-24" style={{ backgroundColor: C.navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ── LEFT PANEL — contact info ─────────────────────── */}
            <div>
              <span
                className="uppercase tracking-[0.3em] font-bold text-xs mb-4 block"
                style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
              >
                Request Access
              </span>
              <h1
                className="text-5xl font-bold mb-8 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: C.ivory }}
              >
                Apply for Strategic{' '}
                <span style={{ color: C.gold }}>Brand Review.</span>
              </h1>
              <p
                className="text-lg font-light mb-12 leading-relaxed"
                style={{ color: 'rgba(253,250,246,0.70)', fontFamily: 'Montserrat, sans-serif' }}
              >
                We are not available for everybody. We partner exclusively with beauty founders
                who are ready to build beyond the hustle into structured, profitable legacies.
              </p>

              {/* Info blocks */}
              <div className="space-y-10">

                {/* Requirements note */}
                <div className="flex items-start space-x-5">
                  <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: C.gold }} />
                  <div>
                    <h4
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
                    >
                      The Requirements
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(253,250,246,0.55)', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      We are selective because structured growth requires a specific mindset.
                      We work with founders who are playing the long game.
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ border: `2px solid ${C.gold}` }}
                  >
                    <MapPin size={20} style={{ color: C.gold }} />
                  </div>
                  <div>
                    <h4
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
                    >
                      The Office
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(253,250,246,0.65)', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Metro homes, Kunle Asolo street, Before Lagos Business School, Lagos Nigeria.
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href="https://instagram.com/releaseinnovations?igsh=MWs5czR0aTh5c2Ftag%3D%3D&ytm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-5 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 transition-colors"
                    style={{ border: `2px solid ${C.gold}` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(197,160,89,0.12)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                  >
                    <Instagram size={20} style={{ color: C.gold }} />
                  </div>
                  <div>
                    <h4
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Instagram
                    </h4>
                    <p className="text-sm" style={{ color: 'rgba(253,250,246,0.65)', fontFamily: 'Montserrat, sans-serif' }}>
                      releaseinnovations
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-start space-x-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ border: `2px solid ${C.gold}` }}
                  >
                    <Phone size={20} style={{ color: C.gold }} />
                  </div>
                  <div>
                    <h4
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Phone
                    </h4>
                    <p className="text-sm" style={{ color: 'rgba(253,250,246,0.65)', fontFamily: 'Montserrat, sans-serif' }}>
                      +234 912 026 4481
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(253,250,246,0.65)', fontFamily: 'Montserrat, sans-serif' }}>
                      +234 816 203 3604
                    </p>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:releaseinnovationsltd@gmail.com"
                  className="flex items-start space-x-5 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 transition-colors"
                    style={{ border: `2px solid ${C.gold}` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(197,160,89,0.12)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                  >
                    <Mail size={20} style={{ color: C.gold }} />
                  </div>
                  <div>
                    <h4
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Email
                    </h4>
                    <p className="text-sm" style={{ color: 'rgba(253,250,246,0.65)', fontFamily: 'Montserrat, sans-serif' }}>
                      releaseinnovationsltd@gmail.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.link/dwvzlt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-5 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 transition-colors"
                    style={{ border: `2px solid ${C.gold}` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(197,160,89,0.12)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                  >
                    {/* WhatsApp SVG */}
                    <svg viewBox="0 0 24 24" width="20" height="20" fill={C.gold}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
                    >
                      WhatsApp
                    </h4>
                    <p className="text-sm" style={{ color: 'rgba(253,250,246,0.65)', fontFamily: 'Montserrat, sans-serif' }}>
                      +234 912 026 4481
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/release-innovations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-5 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 transition-colors"
                    style={{ border: `2px solid ${C.gold}` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(197,160,89,0.12)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                  >
                    <Linkedin size={20} style={{ color: C.gold }} />
                  </div>
                  <div>
                    <h4
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: C.gold, fontFamily: 'Montserrat, sans-serif' }}
                    >
                      LinkedIn
                    </h4>
                    <p className="text-sm" style={{ color: 'rgba(253,250,246,0.65)', fontFamily: 'Montserrat, sans-serif' }}>
                      Release Innovations
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* ── RIGHT PANEL — form ────────────────────────────── */}
            <div
              className="p-10 lg:p-12 shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: C.ivory, borderTop: `8px solid ${C.gold}` }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-30"
                style={{ background: `radial-gradient(circle, ${C.gold}, transparent)` }}
              />

              {isSent ? (
                <div className="text-center py-20 animate-fade-in">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
                    style={{ backgroundColor: C.gold }}
                  >
                    <svg className="w-10 h-10" style={{ color: C.navy }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: C.navy }}
                  >
                    Assessment Received
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: 'rgba(10,25,47,0.60)', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Your inquiry has been logged. Akudolu Onyinye will review your brand's data
                    and contact you if we are a mutual fit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={labelStyle}>Brand Name</label>
                      <input required type="text" name="brand_name" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Monthly Revenue (NGN)</label>
                      <select name="revenue" className={inputClass} style={inputStyle}>
                        <option>Under 5M</option>
                        <option>5M – 10M</option>
                        <option>10M – 20M</option>
                        <option>20M – 50M</option>
                        <option>50M+</option>
                      </select>
                    </div>
                  </div>

                  {/* Growth challenge */}
                  <div>
                    <label style={labelStyle}>Main Growth Challenge</label>
                    <textarea
                      required
                      name="growth_challenge"
                      rows={3}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="e.g. Scaling past Instagram, SKU pricing, distribution leaks…"
                    />
                  </div>

                  {/* Specific goal */}
                  <div>
                    <label style={labelStyle}>Specific Goal for Engagement</label>
                    <textarea
                      required
                      name="specific_goal"
                      rows={2}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="What exactly do you want to build?"
                    />
                  </div>

                  {/* Why ready */}
                  <div>
                    <label style={labelStyle}>Why do you believe your brand is ready for structured growth?</label>
                    <textarea
                      required
                      name="why_your_brand_should_grow"
                      rows={3}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={labelStyle}>Budget Range for Strategic Consulting (NGN)</label>
                      <select name="budget_range" className={inputClass} style={inputStyle}>
                        <option>Under 30M</option>
                        <option>30M – 50M</option>
                        <option>50M – 100M</option>
                        <option>100M+</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Current Sales Channels</label>
                      <select name="sales_channels" className={inputClass} style={inputStyle}>
                        <option>Instagram only</option>
                        <option>Websites</option>
                        <option>Retail Stores</option>
                        <option>Distributors</option>
                        <option>Export</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label style={labelStyle}>Your Full Name</label>
                      <input required type="text" name="from_name" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Official Email</label>
                      <input required type="email" name="from_email" className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  {/* Hidden submission date */}
                  <input type="hidden" name="submit_date" value={new Date().toLocaleString()} />

                  <button
                    type="submit"
                    className="w-full py-5 font-bold uppercase tracking-widest text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl"
                    style={{
                      backgroundColor: C.navy,
                      color: C.gold,
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.forest; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.navy; }}
                  >
                    Submit Brand Assessment
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;