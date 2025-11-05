import React from 'react';

const MarqueeText: React.FC = () => (
  <div className="flex-shrink-0 flex items-center">
    <span className="px-8 text-sm tracking-wider text-gray-400">JUT SHADOWS</span>
    <span className="px-8 text-sm tracking-wider text-gray-400">//</span>
    <span className="px-8 text-sm tracking-wider text-gray-400">01 DESIGN EVERYTHING</span>
    <span className="px-8 text-sm tracking-wider text-gray-400">//</span>
    <span className="px-8 text-sm tracking-wider text-gray-400">07 SEEK OUT SHADOWS</span>
    <span className="px-8 text-sm tracking-wider text-gray-400">//</span>
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="relative z-10 shrink-0">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center space-x-4 text-2xl font-bold">
          <span>W</span>
          <span>$</span>
          <span>&#9733;</span>
        </div>
        <div className="marquee-container relative flex-1 mx-4 h-6 overflow-hidden group">
          <div className="absolute inset-0 flex items-center filter blur-[1px] group-hover:blur-none transition-all duration-300">
             <div className="animate-marquee whitespace-nowrap flex">
                <MarqueeText />
                <MarqueeText />
                <MarqueeText />
                <MarqueeText />
             </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
          `}</style>
        </div>
        <a href="#" className="border border-green-400 text-green-400 px-5 py-2 rounded-full font-medium text-sm hover:bg-green-400 hover:text-black transition-colors duration-300">
          CONTACT
        </a>
      </div>
      <div className="flex items-center justify-center py-6 md:py-10 lg:py-12">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none text-stone-100">
          STUDIO FREIGHT
        </h1>
      </div>
    </header>
  );
};

export default Header;