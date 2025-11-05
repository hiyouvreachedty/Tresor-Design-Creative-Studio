
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="https://cdn.studiofreight.com/sfe/work/v-2/noise.mp4"
            ></video>
        </div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-none">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
            We Build Brands
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-500 bg-clip-text text-transparent animate-gradient-x-reverse">
            & Websites
          </span>
        </h1>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0V24M8 24L1 17M8 24L15 17" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
    </section>
  );
};

// FIX: Add missing default export
export default Hero;