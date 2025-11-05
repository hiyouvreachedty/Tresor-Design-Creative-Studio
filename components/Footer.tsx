import React from 'react';

const FooterLink: React.FC<{ href?: string; children: React.ReactNode; target?: string; rel?: string; }> = ({ href = '#', children, ...props }) => (
  <a href={href} className="text-sm text-gray-500 hover:text-white transition-colors" {...props}>{children}</a>
);

const Footer: React.FC = () => {
  return (
    <footer className="shrink-0 mt-auto">
      <div className="border-t border-white/10 pt-4">
        <div className="flex flex-wrap justify-between items-end gap-6">
          <div className="flex flex-col items-start">
            <a href="#" className="text-sm font-bold text-[--color-neon-green] hover:text-white">
              CAPABILITIES DECK ↓
            </a>
          </div>
          <div className="flex flex-col items-start gap-1">
            <FooterLink href="https://github.com/hiyouvreachedty" target="_blank" rel="noopener noreferrer">GITHUB</FooterLink>
            <FooterLink href="https://lenis.studio-freight.com/" target="_blank" rel="noopener noreferrer">LENIS</FooterLink>
          </div>
          <div className="flex flex-col items-start gap-1">
            <FooterLink>AWWWWARDS</FooterLink>
            <FooterLink>TWITTER</FooterLink>
          </div>
          <div className="flex flex-col items-start gap-1">
            <FooterLink>INSTAGRAM</FooterLink>
            <FooterLink>VIMEO</FooterLink>
          </div>
          <div className="flex flex-col items-start text-sm text-gray-500">
            <span>P: +1 380.238.9383</span>
            <a href="mailto:HELLO@TRESORDESIGN.COM" className="hover:text-white transition-colors">E: DEAR@TRESORDESIGN.COM</a>
          </div>
          <div className="flex items-end gap-4 text-sm text-gray-500">
            <span>V.00.00.09</span>
            <span>&copy; 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;