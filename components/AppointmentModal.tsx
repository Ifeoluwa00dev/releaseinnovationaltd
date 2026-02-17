import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { X, Check } from "lucide-react";

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

    emailjs
      .sendForm(
        "service_pfjqfqd",
        "template_aoeof4c",
        e.currentTarget,
        "ezMGR7P7mJlhZRBQ1"
      )
      .then(() => {
        if (window.fbq) window.fbq("track", "Contact");
        if (window.gtag)
          window.gtag("event", "form_submit", {
            event_category: "conversion",
            event_label: "consultation_request",
          });

        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg glass-effect rounded-xl border border-amber-500/30">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-[999] bg-black/80 hover:bg-black text-white rounded-full p-2 shadow-lg transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="pt-14 px-6 pb-6 sm:p-8 max-h-[90vh] overflow-y-auto">

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Request Sent
              </h3>
              <p className="text-zinc-400">
                We will reach out to schedule your strategy session.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-serif font-bold text-white mb-2">
                Schedule Strategy Call
              </h2>
              <p className="text-zinc-400 mb-8 italic">
                "Growth is not accidental. It is engineered."
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
