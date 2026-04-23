import React from 'react';
import { projects } from '../../content/projects';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32">
        <h2 className="font-title text-5xl md:text-7xl font-bold text-center mb-16">The Vault</h2>
        <div className="space-y-1 border-t border-white/10">
            {projects.map((project, index) => (
                <a href="#" key={index} className="group grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_3fr] items-center gap-4 p-4 border-b border-white/10 hover:bg-white/5 transition-colors duration-300 block">
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[--color-neon-green] transition-colors" style={{textShadow: '0 0 10px transparent'}}>
                        {project.name}
                    </h3>
                    <span className="text-sm text-gray-400">{project.type}</span>
                    <span className="text-sm text-gray-400">{project.year}</span>
                    <p className="text-sm text-gray-300">{project.focus}</p>
                </a>
            ))}
        </div>
        <style>{`
          .group:hover h3 {
            text-shadow: 0 0 8px var(--color-neon-green);
          }
        `}</style>
    </section>
  );
};

export default Portfolio;
