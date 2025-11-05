import React from 'react';

const FooterLink: React.FC<{ href?: string; children: React.ReactNode }> = ({ href = '#', children }) => (
  <a href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{children}</a>
);

const Footer: React.FC = () => {
  return (
    <footer className="shrink-0 border-t border-white/10 pt-4 mt-auto">
      <div className="flex flex-wrap justify-between items-end gap-6">
        <div className="flex flex-col items-start">
          <a href="#" className="text-sm font-bold text-green-400 hover:text-white">
            CAPABILITIES DECK ↓
          </a>
        </div>
        <div className="flex flex-col items-start gap-1">
          <FooterLink>GITHUB</FooterLink>
          <FooterLink>LENIS</FooterLink>
        </div>
        <div className="flex flex-col items-start gap-1">
          <FooterLink>AWWWWARDS</FooterLink>
          <FooterLink>TWITTER</FooterLink>
        </div>
        <div className="flex flex-col items-start gap-1">
          <FooterLink>INSTAGRAM</FooterLink>
          <FooterLink>VIMEO</FooterLink>
        </div>
        <div className="flex flex-col items-start text-sm text-gray-400">
          <span>P: +1 380.238.9383</span>
          <a href="mailto:HELLO@STUDIOFREIGHT.COM" className="hover:text-white transition-colors">E: HELLO@STUDIOFREIGHT.COM</a>
        </div>
        <div className="text-sm text-gray-500">
          &copy; 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;