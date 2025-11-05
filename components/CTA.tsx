
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-40 bg-black text-center">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none mb-8">
          Have a project in mind?
        </h2>
        <a href="#" className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-transform hover:scale-105">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default CTA;
