import React from 'react';
import { Project } from '../data/projects';

interface ProjectsColumnProps {
  projects: Project[];
  activeProject: Project | null;
  onProjectHover: (project: Project) => void;
  onProjectClick: (project: Project) => void;
}

const ProjectsColumn: React.FC<ProjectsColumnProps> = ({ projects, activeProject, onProjectHover, onProjectClick }) => {
  return (
    <div className="px-4 md:px-6">
      <h2 className="text-xs font-bold tracking-widest text-gray-400 mb-4">PROJECTS</h2>
      <ul className="space-y-1">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onMouseEnter={() => onProjectHover(project)}
              onClick={() => onProjectClick(project)}
              className={`w-full text-left p-2 rounded-md transition-colors duration-200 ${
                activeProject?.id === project.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium tracking-tighter">{project.name}</span>
                <span className="text-xs text-gray-500">{project.category}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsColumn;