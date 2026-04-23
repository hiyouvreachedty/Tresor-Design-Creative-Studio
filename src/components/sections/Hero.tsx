import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden py-20 -mx-4 md:-mx-6 lg:-mx-8">
        <div className="absolute inset-0 z-0 opacity-30 bg-[#0D1117]">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-rotating-earth-42239-large.mp4"
            ></video>
        </div>
        <div className="relative z-10 px-4">
            <h2 className="font-title text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 max-w-4xl mx-auto">
              How big would you dream if you knew you would not fail?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#portfolio" className="border border-[--color-neon-green] text-[--color-neon-green] px-6 py-3 rounded-md font-medium hover:bg-[--color-neon-green] hover:text-black transition-colors duration-300 hover:shadow-[0_0_15px_var(--color-neon-green)]">
                    Enter the Vault
                </a>
                <a href="#systems" className="border border-[--color-gold] text-[--color-gold] px-6 py-3 rounded-md font-medium hover:bg-[--color-gold] hover:text-black transition-colors duration-300 hover:shadow-[0_0_15px_var(--color-gold)]">
                    Meet the Systems
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
