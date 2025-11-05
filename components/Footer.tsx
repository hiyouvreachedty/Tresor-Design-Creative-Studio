import React, { useState, useEffect } from 'react';

const FooterLink: React.FC<{ href?: string; children: React.ReactNode; target?: string; rel?: string; }> = ({ href = '#', children, ...props }) => (
  <a href={href} className="text-sm text-gray-500 hover:text-white transition-colors" {...props}>{children}</a>
);

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  const [elapsedTime, setElapsedTime] = useState('000:00:00:00');
  // Set a fixed inception date for our project.
  const inceptionDate = new Date('2024-07-01T00:00:00Z');

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const now = new Date();
      const diffMs = now.getTime() - inceptionDate.getTime();

      if (diffMs < 0) return;

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      const formattedTime =
        `${String(days).padStart(3, '0')}:` +
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`;

      setElapsedTime(formattedTime);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [inceptionDate]);

  return (
    <footer className="shrink-0 mt-auto">
      <div className="border-t border-white/10 pt-4">
        {/* Top row */}
        <div className="flex flex-wrap justify-between items-start gap-6">
          {/* Left: Capabilities */}
          <a href="#" className="text-sm font-bold text-[--color-neon-green] hover:text-white">
            CAPABILITIES DECK ↓
          </a>

          {/* Center: Links & Contact Info */}
          <div className="hidden md:flex flex-grow justify-center items-start gap-x-10 lg:gap-x-16 flex-wrap">
            <div className="flex flex-col items-start gap-1">
              <FooterLink href="https://github.com/hiyouvreachedty" target="_blank" rel="noopener noreferrer">GITHUB</FooterLink>
              <FooterLink href="https://lenis.darkroom.engineering/" target="_blank" rel="noopener noreferrer">LENIS</FooterLink>
            </div>
            <div className="flex flex-col items-start gap-1">
              <FooterLink>TWITTER</FooterLink>
              <FooterLink>INSTAGRAM</FooterLink>
            </div>
            <div className="flex flex-col items-start text-sm text-gray-500">
              <span>P: +1 380.238.9383</span>
              <a href="mailto:HELLO@TRESORDESIGN.COM" className="hover:text-white transition-colors">E: DEAR@TRESORDESIGN.COM</a>
            </div>
          </div>

          {/* Right: Timer */}
          <div
            className="font-mono text-sm text-[--color-neon-green] tracking-widest"
            style={{ textShadow: '0 0 4px rgba(10, 255, 10, 0.7)' }}
            aria-live="off"
            aria-atomic="true"
          >
            {elapsedTime}
          </div>
        </div>
        
        {/* Bottom row */}
        <div className="flex justify-center items-center mt-4 pt-2 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-1 text-xs">
            <button onClick={onPrivacyClick} className="font-mono text-[var(--color-gold)]/70 hover:text-[var(--color-gold)] transition-colors">Privacy Policy</button>
            <span className="text-[var(--color-gold)]/50">&bull;</span>
            <button onClick={onTermsClick} className="font-mono text-[var(--color-gold)]/70 hover:text-[var(--color-gold)] transition-colors">Terms of Use</button>
            
            <span className="text-gray-700 hidden sm:inline-block">|</span>
            
            <span className="text-gray-500">V.00.01.00</span>
            <span className="text-gray-500">&copy; 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;