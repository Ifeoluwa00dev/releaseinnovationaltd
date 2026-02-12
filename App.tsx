
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-amber-500/30 selection:text-amber-500">
        <Navbar onSchedule={toggleModal} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        
        <AppointmentModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
        
        {/* Persistent Floating Appointment Button (Mobile only) */}
        <button 
          onClick={toggleModal}
          className="fixed md:hidden bottom-6 right-6 w-14 h-14 gold-bg rounded-full shadow-2xl z-40 flex items-center justify-center animate-bounce hover:animate-none active:scale-90 transition-all"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </Router>
  );
};

export default App;
