import React from 'react';
import { Project } from '../data/projects';

interface ProjectDetailColumnProps {
  project: Project | null;
}

const ProjectDetailColumn: React.FC<ProjectDetailColumnProps> = ({ project }) => {
  return (
    <div className="md:h-full px-4 md:px-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xs font-bold tracking-widest text-gray-400">PROJECT DETAIL</h2>
        <a href="#" className="text-xs font-bold tracking-widest text-green-400">INFO</a>
      </div>
      {project ? (
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img src={project.image1} alt={`${project.name} view 1`} className="w-full h-full object-cover"/>
            </div>
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img src={project.image2} alt={`${project.name} view 2`} className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="mt-auto flex justify-between items-center p-2 bg-black/20 rounded-lg">
            <button className="flex items-center space-x-2 text-sm text-gray-300">
              <span className="border border-gray-500 px-1">+</span>
              <span>ENLARGE</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white">
              &#x1F50D;
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
