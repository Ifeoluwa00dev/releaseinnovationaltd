
import React, { useState } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg glass-effect p-8 rounded-xl border border-amber-500/30">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-amber-500"
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
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Full Name</label>
                <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-500 text-white p-3 rounded outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Email Address</label>
                <input required type="email" className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-500 text-white p-3 rounded outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Business Name</label>
                <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-500 text-white p-3 rounded outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Preferred Timeline</label>
                <select className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-500 text-white p-3 rounded outline-none transition-colors">
                  <option>Next 24 Hours</option>
                  <option>Next 3 Days</option>
                  <option>Next Week</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full py-4 gold-bg text-black font-bold uppercase tracking-widest rounded mt-6 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Request Session
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
