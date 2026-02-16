
import React, { useState } from 'react';
import { Instagram, Mail, Phone, Linkedin } from "lucide-react";
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
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">Our mission is simple <br/><span className="text-zinc-600">We turn beauty brands into retail powerhouses.</span></h3>
            <p className="text-zinc-400 text-xl mb-12 font-light leading-relaxed">
              We are selective because structured growth requires a specific mindset. We work with founders who are playing the long game.
            </p>

            <div className="space-y-12">

               <div className="flex items-start space-x-6">
                <div className="mt-1 w-2 h-2 gold-bg rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest gold-text mb-2">The Requirements</h4>
                  <p className="text-zinc-500 leading-relaxed">We partner with beauty founders ready to move past the startup phase and into the global market. Serious growth</p>
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
                
                <div className="space-y-8">

      {/* Instagram */}
      <a
        href="https://instagram.com/releaseinnovations?igsh=MWs5czR0aTh5c2Ftag%3D%3D&ytm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start space-x-6 group"
      >
        <div className="w-12 h-12 gold-border border-2 flex items-center justify-center rounded-full text-amber-500 group-hover:bg-amber-500/10 transition">
          <Instagram className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest gold-text mb-2">
            Instagram
          </h4>
          <p className="text-zinc-300">releaseinnovations</p>
        </div>
      </a>

      {/* Email */}
      <a
        href="mailto:releaseinnovationsltd@gmail.com"
        className="flex items-start space-x-6 group"
      >
        <div className="w-12 h-12 gold-border border-2 flex items-center justify-center rounded-full text-amber-500 group-hover:bg-amber-500/10 transition">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest gold-text mb-2">
            Direct Inquiries
          </h4>
          <p className="text-zinc-300">releaseinnovationsltd@gmail.com</p>
        </div>
      </a>

      {/* WhatsApp (phone) */}
      <a
        href="https://wa.link/dwvzlt"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start space-x-6 group"
      >
        <div className="w-12 h-12 gold-border border-2 flex items-center justify-center rounded-full text-amber-500 group-hover:bg-amber-500/10 transition">
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest gold-text mb-2">
            WhatsApp
          </h4>
          <p className="text-zinc-300">+234 912 026 4481</p>
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/company/release-innovations"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start space-x-6 group"
      >
        <div className="w-12 h-12 gold-border border-2 flex items-center justify-center rounded-full text-amber-500 group-hover:bg-amber-500/10 transition">
          <Linkedin className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest gold-text mb-2">
            LinkedIn
          </h4>
          <p className="text-zinc-300">Release Innovations</p>
        </div>
      </a>

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
                        <option>Under 5m</option>
                        <option>5M - 10M</option>
                        <option>10M - 20M</option>
                        <option>20M - 50M</option>
                        <option>50M+</option>
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

                  <div>
                    <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Why do you believe your brand is ready for structured growth ?</label>
                    <textarea 
                      required
                      name="why_your_brand_should_grow"
                      rows={3}
                       
                      className="w-full bg-black/40 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all"
                      placeholder=""
                    ></textarea>
                  </div>
                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Budget Range for Strategic consulting (NGN)</label>
                      <select name="budget_range" className="w-full bg-black/40 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all appearance-none">
                        <option>Under 30M</option>
                        <option>30M - 50M</option>
                        <option>50M - 100M</option>
                        <option>100M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">What are you current sales channels ?</label>
                      <select name="sales_channels" className="w-full bg-black/40 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all appearance-none">
                        <option>Instagram only</option>
                        <option>Websites</option>
                        <option>Retails Stores</option>
                        <option> Distributors</option>
                        <option>Export</option>
                      </select>
                    </div>
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
