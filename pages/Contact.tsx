
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { BRAND_NAME } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', service: 'Consultation' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Connect with Authority" subtitle="Let's Talk Strategy" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-8 italic">"Growth is not accidental. It is engineered."</h3>
            <p className="text-zinc-400 text-lg mb-12">
              Ready to redesign your operational structure? Partner with me to align your physical markets with digital ecosystems.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 gold-border border-2 flex items-center justify-center rounded-full text-amber-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest gold-text mb-2">The Office</h4>
                  <p className="text-zinc-300">Metro homes. Lagos Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 gold-border border-2 flex items-center justify-center rounded-full text-amber-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest gold-text mb-2">Direct Inquiries</h4>
                  <p className="text-zinc-300">Onyivanny17@gmail.com</p>
                  <p className="text-zinc-300">08162033604</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 md:p-12 rounded-3xl border border-amber-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
            
            {isSent ? (
              <div className="text-center py-20 animate-fade-in">
                <div className="w-20 h-20 gold-bg rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Message Received</h3>
                <p className="text-zinc-400">Your inquiry has been logged. Akudolu Onyinye will review and contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => {
  handleSubmit(e);
  // Track form submission
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Contact');
  }
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      'event_category': 'conversion',
      'event_label': 'consultation_request'
    });
  }
}} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all placeholder:text-zinc-600"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all placeholder:text-zinc-600"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Service of Interest</label>
                  <select className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all appearance-none">
                    <option>Market Expansion</option>
                    <option>Brand Positioning</option>
                    <option>Revenue Protection</option>
                    <option>E-commerce Architecture</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all placeholder:text-zinc-600"
                    placeholder="Tell us about your brand goals..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 gold-bg text-black font-bold uppercase tracking-widest text-lg rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-xl"
                >
                  Request Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
