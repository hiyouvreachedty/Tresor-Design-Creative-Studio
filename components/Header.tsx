import React, { useState } from 'react';

const marqueePhrases = [
  "Design Everything", "Adopt New Realities", "Use Your Headlights", "Make It Matter",
  "Rally Others On", "Choose the Future", "Seek Out Shadows", "Reverse Engineer with Curiosity",
  "Garner Conviction", "Dream Without Limits"
];

const MarqueeContent: React.FC = () => (
  <div className="flex-shrink-0 flex items-center">
    {marqueePhrases.map((phrase, index) => (
      <React.Fragment key={index}>
        <span className="px-4 text-xs tracking-wider font-black uppercase">{phrase}</span>
        <span className="px-4 text-xs tracking-wider font-black text-gray-500">//</span>
      </React.Fragment>
    ))}
  </div>
);

const Header: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -200, y: -200 });
  };

  return (
    <header className="relative z-10 shrink-0">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center space-x-2 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 19C17.8954 17.3431 15.6569 16 12 16C8.34315 16 6.10457 17.3431 5 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>

        <div 
          className="flex-1 mx-4 h-6 overflow-hidden relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dimmed, Blurred Layer */}
          <div className="absolute inset-0 flex items-center text-gray-600" style={{ filter: 'blur(1.5px)' }}>
             <div className="animate-marquee whitespace-nowrap flex">
                {Array.from({ length: 4 }).map((_, i) => <MarqueeContent key={i} />)}
             </div>
          </div>
          {/* Highlighted, Glowing Layer */}
          <div 
            className="absolute inset-0 flex items-center text-[--color-off-white] transition-all duration-300 ease-out"
            style={{
              clipPath: `circle(80px at ${mousePosition.x}px ${mousePosition.y}px)`,
              textShadow: '0 0 8px rgba(245, 245, 245, 0.5)',
            }}
          >
             <div className="animate-marquee whitespace-nowrap flex">
                {Array.from({ length: 4 }).map((_, i) => <MarqueeContent key={i} />)}
             </div>
          </div>
        </div>
        <a href="#" className="contact-btn rounded-md font-bold text-xs">
          CONTACT
        </a>
      </div>
      <div className="flex items-center justify-center py-4 md:py-5 lg:py-6">
        <h1 className="text-center text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none text-[--color-off-white] uppercase" style={{fontFamily: "'Inter', sans-serif"}}>
          TRESOR DESIGN
        </h1>
      </div>
      <div className="w-full border-b border-white/10"></div>
       <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-25%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }

          .contact-btn {
            --c: #000; /* text color */
            background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%) var(--_p,100%)/300% no-repeat,
              var(--color-neon-green); /* background color */
            color: #0000;
            border: none;
            transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
            text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),
              calc(var(--_i,-1)*-0.08em)  .01em 2px #0004;
            outline-offset: .1em;
            transition: 0.3s;
            padding: 0.5rem 1rem;
          }

          .contact-btn:hover,
          .contact-btn:focus-visible {
            --_p: 0%;
            --_i: 1;
          }

          .contact-btn:active {
            text-shadow: none;
            color: var(--c);
            box-shadow: inset 0 0 9e9q #0005;
            transition: 0s;
          }
        `}</style>
    </header>
  );
};

export default Header;