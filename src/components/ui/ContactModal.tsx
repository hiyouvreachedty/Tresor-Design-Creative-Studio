import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';

interface ContactModalProps {
  onClose: () => void;
}

const services = [
  "Brand Strategy", "Verbal Identity", "Visual Identity", "Web Design",
  "Development", "Creative Sprint", "Other"
];
const budgets = ["$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+"];

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close animation handler
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Duration should match animation
  };

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <>
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out forwards;
        }
        @keyframes slide-out-right {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        .animate-slide-out-right {
          animation: slide-out-right 0.3s ease-in forwards;
        }
        .form-input {
          background-color: transparent;
          border: 1px solid var(--color-neon-green);
          color: var(--color-off-white);
          padding: 0.75rem 1rem;
          transition: all 0.2s ease-in-out;
          font-family: 'Inter', sans-serif;
          border-radius: 0;
        }
        .form-input:focus {
          outline: none;
          box-shadow: 0 0 10px var(--color-neon-green);
          background-color: rgba(10, 255, 10, 0.05);
        }
        .form-select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: url('data:image/svg+xml;utf8,<svg fill="%230AFF0A" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
          background-repeat: no-repeat;
          background-position: right 1rem center;
        }
        .form-select option {
            background: var(--color-background);
            color: var(--color-off-white);
        }
      `}</style>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end animate-fade-in-fast"
        onClick={handleClose}
      >
        <div
          className={`bg-[var(--color-background)] w-full max-w-2xl h-full flex flex-col shadow-2xl ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="p-6 flex justify-between items-center border-b border-[var(--color-neon-green)]/30 shrink-0">
            <h2 className="text-xl font-black text-[var(--color-neon-green)] tracking-[0.2em] uppercase font-mono">
              // Open Channel
            </h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-white transition-colors text-3xl font-mono">
              [X]
            </button>
          </header>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
            {submitted ? (
              <div className="flex items-center justify-center h-full text-center animate-fade-in font-mono">
                <div>
                  <h3 className="text-2xl font-bold text-white">[ TRANSMISSION RECEIVED ]</h3>
                  <p className="text-gray-400 mt-2 text-[--color-neon-green]"> &gt; We will be in touch shortly. Stand by.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[var(--color-neon-green)]/80 mb-2 font-mono">Name_</label>
                    <input type="text" id="name" required className="w-full form-input"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[var(--color-neon-green)]/80 mb-2 font-mono">Email_</label>
                    <input type="email" id="email" required className="w-full form-input"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-[var(--color-neon-green)]/80 mb-2 font-mono">Company (optional)_</label>
                  <input type="text" id="company" className="w-full form-input"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-[var(--color-neon-green)]/80 mb-2 font-mono">Service_</label>
                    <select id="service" required className="w-full form-input form-select">
                      <option>Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-bold text-[var(--color-neon-green)]/80 mb-2 font-mono">Budget_</label>
                    <select id="budget" required className="w-full form-input form-select">
                      <option>Select a budget</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[var(--color-neon-green)]/80 mb-2 font-mono">Message_</label>
                  <textarea id="message" rows={5} required className="w-full form-input"></textarea>
                </div>
                <div className="flex justify-end pt-4">
                  <button type="submit" className="bg-transparent text-[var(--color-neon-green)] px-8 py-3 font-bold text-sm transition-colors duration-300 border border-[var(--color-neon-green)] hover:bg-[var(--color-neon-green)] hover:text-black hover:shadow-[0_0_15px_var(--color-neon-green)] font-mono">
                    SEND TRANSMISSION
                  </button>
                </div>
              </form>
            )}

            {/* Testimonials */}
            <div className="mt-12 pt-8 border-t border-[var(--color-neon-green)]/30">
              <h3 className="text-lg font-black text-[var(--color-neon-green)] tracking-[0.2em] uppercase mb-6 font-mono">// Transmissions</h3>
              <div className="space-y-8 font-mono">
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <p className="text-gray-200 leading-relaxed text-base break-words">
                      <span className="text-[var(--color-neon-green)] mr-2">&gt;</span>"{testimonial.quote}"
                    </p>
                    <p className="mt-3 text-sm text-right">
                        <span className="font-bold text-white">{testimonial.author}</span>
                        <span className="text-gray-400"> // {testimonial.title}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
