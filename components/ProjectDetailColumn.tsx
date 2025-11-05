import React from 'react';
import { Project } from '../data/projects';
import TradingViewWidget from './TradingViewWidget';

interface ProjectDetailColumnProps {
  project: Project | null;
  onInfoClick: () => void;
}

const ProjectDetailColumn: React.FC<ProjectDetailColumnProps> = ({ project, onInfoClick }) => {
  return (
    <div className="md:h-full px-4 md:px-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xs font-bold tracking-widest text-gray-400">PROJECT DETAIL</h2>
        <button onClick={onInfoClick} className="text-xs font-bold tracking-widest text-[--color-neon-green] hover:text-white transition-colors">INFO</button>
      </div>
      {project ? (
        <div className="flex-1 flex flex-col min-h-0">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden transition-opacity duration-500">
              <img key={project.id + '-1'} src={project.image1} alt={`${project.name} view 1`} className="w-full h-full object-cover animate-fade-in"/>
            </div>
            <div className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden transition-opacity duration-500">
              {project.tickerSymbol ? (
                <TradingViewWidget symbol={project.tickerSymbol} />
              ) : (
                <img key={project.id + '-2'} src={project.image2} alt={`${project.name} view 2`} className="w-full h-full object-cover animate-fade-in"/>
              )}
            </div>
          </div>
          <div className="mt-auto flex justify-between items-center p-2 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
            <button className="flex items-center space-x-2 text-sm text-gray-300">
              <span className="border border-gray-500 w-5 h-5 flex items-center justify-center">+</span>
              <span>ENLARGE</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-800/50 rounded-full text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          <p>Hover over a project to see details.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailColumn;