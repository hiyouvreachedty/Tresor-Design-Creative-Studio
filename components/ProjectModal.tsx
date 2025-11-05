import React, { useState } from 'react';
import { Project } from '../data/projects';
import TradingViewWidget from './TradingViewWidget';
import Modal from './Modal';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleAccordionToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <Modal onClose={onClose}>
      <header className="p-6 flex justify-between items-center border-b border-white/10 shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-white">{project.name}</h2>
          <p className="text-sm text-gray-400">{project.type} // {project.year}</p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-2xl">&times;</button>
      </header>
      
      <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6 break-words">{project.description}</p>
            
            {project.url && (
              <div className="mb-8">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-[--color-gold] hover:underline font-bold group text-sm tracking-wider"
                >
                  <span>VISIT LIVE SITE</span>
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            )}

            <h3 className="font-bold text-lg text-white mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[--color-neon-green] mr-3 mt-1">&#10003;</span>
                  <span className="text-gray-400">{highlight}</span>
                </li>
              ))}
            </ul>

            {project.mediaLinks && project.mediaLinks.length > 0 && (
              <div className="mt-8">
                <h3 className="font-bold text-lg text-white mb-3">Media Features & Case Study</h3>
                <div className="space-y-2 border-t border-white/10">
                  {project.mediaLinks.map((link, index) => (
                    <div key={index} className="border-b border-white/10 last:border-b-0">
                      <button 
                        onClick={() => handleAccordionToggle(index)}
                        className="w-full flex justify-between items-center py-3 text-left transition-colors"
                        aria-expanded={openAccordion === index}
                        aria-controls={`accordion-content-${index}`}
                      >
                        <span className="text-gray-300 group-hover:text-white flex-1 pr-4">{link.title}</span>
                        <span className="text-xl text-gray-500 transform transition-transform">{openAccordion === index ? '−' : '+'}</span>
                      </button>
                      {openAccordion === index && (
                        <div id={`accordion-content-${index}`} className="pb-4 pr-6 text-sm text-gray-400 animate-fade-in-fast">
                          <p className="mb-3 break-words">{link.description}</p>
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[--color-gold] hover:underline"
                          >
                            View Source &rarr;
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-rows-2 gap-4">
            <img src={project.image1} alt={`${project.name} 1`} className="w-full h-full object-cover rounded-lg" />
            <div className="w-full h-full object-cover rounded-lg bg-gray-900/50">
              {project.tickerSymbol ? (
                <TradingViewWidget symbol={project.tickerSymbol} />
              ) : (
                <img src={project.image2} alt={`${project.name} 2`} className="w-full h-full object-cover rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;