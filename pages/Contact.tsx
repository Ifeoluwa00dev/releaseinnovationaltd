
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { BRAND_NAME } from '../constants';
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', service: 'Consultation' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  // Send email via EmailJS
  emailjs.sendForm(
    'service_pfjqfqd',  // Replace with YOUR Service ID
    'template_aoeof4c', // Replace with YOUR Template ID
    e.currentTarget,
    'ezMGR7P7mJlhZRBQ1'   // Replace with YOUR Public Key
  )
  .then((result) => {
    console.log('Email sent successfully:', result.text);
    
    // Track conversion
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact');
    }
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        'event_category': 'conversion',
        'event_label': 'consultation_request'
      });
    }
    
    // Show success message
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose?.(); // Close modal if exists
    }, 3000);
  })
  .catch((error) => {
    console.error('Email send failed:', error);
    alert('Failed to send message. Please try again or email directly.');
  });
};

  return (
    <div className="pt-32 pb-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Strategic Engagement" subtitle="Earned Access" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="inline-block px-4 py-1 border border-amber-500/30 rounded-full mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] gold-text">Selection Criteria</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">I Am Not Available <br/><span className="text-zinc-600">For Everyone.</span></h3>
            <p className="text-zinc-400 text-xl mb-12 font-light leading-relaxed">
              I partner exclusively with founders who have moved past the "testing" phase and are ready for professional, aggressive market scaling.
            </p>

            <div className="space-y-12">

               <div className="flex items-start space-x-6">
                <div className="mt-1 w-2 h-2 gold-bg rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest gold-text mb-2">The Minimum Entry</h4>
                  <p className="text-zinc-500 leading-relaxed">We require brands to have an existing product line and a clear vision for national retail presence.</p>
                </div>
               </div>
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
                <div className="w-12 h-12 gold-border border-2 flex items-center justify-center rounded-full text-amber-500 flex-shrink-0" >
                  <svg 
  className="w-6 h-6" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  viewBox="0 0 24 24"
>
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest gold-text mb-2">Instagram</h4>
                  <p className="text-zinc-300">releaseinnovations</p>
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
            <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full"> </div>
            
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
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Brand Name</label>
                      <input required type="text" name="brand_name" className="w-full bg-black/40 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Monthly Revenue (NGN)</label>
                      <select name="revenue" className="w-full bg-black/40 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all appearance-none">
                        <option>Under 500k</option>
                        <option>500k - 2M</option>
                        <option>2M - 5M</option>
                        <option>5M - 20M</option>
                        <option>20M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Main Growth Challenge</label>
                    <textarea 
                      required
                      name="growth_challenge"
                      rows={3}
                       
                      className="w-full bg-black/40 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all"
                      placeholder="e.g. Scaling past Instagram, SKU pricing, distribution leaks..."
                    ></textarea>
                  </div>
                  </div>
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Specific Goal for Engagement</label>
                    <textarea 
                      required
                      name="specific_goal"
                      rows={2}
                      className="w-full bg-black/40 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all"
                      placeholder="What exactly do you want to build?"
                    ></textarea>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Your Full Name</label>
                      <input required type="text" name="from_name" className="w-full bg-black/40 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Official Email</label>
                      <input required type="email" name="from_email" className="w-full bg-black/40 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all" />
                    </div>
                  </div>
                {/* Hidden field for submission date */}
  <input 
    type="hidden" 
    name="submit_date" 
    value={new Date().toLocaleString()} 
  />
                <button 
                  type="submit"
                  className="w-full py-5 gold-bg text-black font-bold uppercase tracking-widest text-lg rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-xl"
                >
                  Submit Brand Assessment
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
