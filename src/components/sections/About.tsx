
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#161B22]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://picsum.photos/seed/aboutus/1000/1200.webp" 
              alt="Studio Freight Team" 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Play nice, work hard</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We're a team of designers, developers, and strategists who are passionate about creating beautiful and effective digital experiences. We believe in the power of collaboration and strive to build long-lasting relationships with our clients.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our process is transparent, our communication is clear, and our dedication is unwavering. Let's create something amazing together.
            </p>
            <a href="#" className="mt-8 inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              More about us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
