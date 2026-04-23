
import React from 'react';
import Marquee from './Marquee';

const services = ["Branding", "Web Design", "Development", "Strategy", "Art Direction", "Copywriting", "Motion", "3D"];

const Intro: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#161B22]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-4xl leading-relaxed text-gray-300">
            We are a creative studio that inspires and helps brands to be their best self. We design, we write, we develop, we do whatever it takes to build a brand that lasts.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-12">
          {services.map((service) => (
            <div key={service} className="border border-white/20 rounded-full px-5 py-2 text-sm text-gray-300">
              {service}
            </div>
          ))}
        </div>
      </div>
      <Marquee />
    </section>
  );
};

export default Intro;
