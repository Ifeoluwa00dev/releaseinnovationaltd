import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Type declarations for analytics
declare global {
  interface Window {
    fbq?: any;
    gtag?: any;
  }
}

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
      if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'Contact');
      }
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'form_submit', {
          'event_category': 'conversion',
          'event_label': 'consultation_request'
        });
      }
      
      // Show success message
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again or email directly.');
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg glass-effect p-8 rounded-xl border border-amber-500/30">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-zinc-400 hover:text-amber-500 transition-colors p-2 -m-2"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Request Sent</h3>
            <p className="text-zinc-400">We will reach out to schedule your strategy session.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">Schedule Strategy Call</h2>
            <p className="text-zinc-400 mb-8 italic">"Growth is not accidental. It is engineered."</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Brand Name</label>
                  <input 
                    required 
                    type="text"  
                    name="brand_name" 
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Monthly Revenue (NGN)</label>
                  <select 
                    name="revenue" 
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all"
                  >
                    <option>Under 5M</option>
                    <option>5M- 10M</option>
                    <option>10M - 50M</option>
                    <option>50M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Primary Growth Challenge</label>
                <textarea 
                  required 
                  rows={2} 
                  name="growth_challenge" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all" 
                  placeholder="e.g. Scaling physical distribution"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">What do you want help with?</label>
                <textarea 
                  required 
                  rows={2} 
                  name="specific_goal" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all" 
                  placeholder="Specific objectives..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    name="from_name" 
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">Official Email</label>
                  <input 
                    required 
                    type="email" 
                    name="from_email" 
                    className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500 text-white p-4 rounded outline-none transition-all" 
                  />
                </div>
              </div>

              <input 
                type="hidden" 
                name="submit_date" 
                value={new Date().toLocaleString()} 
              />

              <button 
                type="submit"
                className="w-full py-4 gold-bg text-black font-bold uppercase tracking-widest rounded mt-6 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Submit Brand for Review
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;