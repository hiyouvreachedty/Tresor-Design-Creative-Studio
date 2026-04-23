import React from 'react';
import { Project } from '../data/projects';

interface ProjectsColumnProps {
  projects: Project[];
  activeProject: Project | null;
  onProjectHover: (project: Project) => void;
  onProjectSelect: (project: Project) => void;
}

const ProjectsColumn: React.FC<ProjectsColumnProps> = ({ projects, activeProject, onProjectHover, onProjectSelect }) => {
  return (
    <div className="px-4 md:px-6">
      <h2 className="text-xs font-bold tracking-widest text-gray-400 mb-4">PROJECTS</h2>
      <ul className="space-y-1">
        {projects.map((project) => (
          <li 
            key={project.id} 
            onMouseEnter={() => onProjectHover(project)}
            className="border-b border-white/10 last:border-b-0 group"
          >
            <div 
                className="flex justify-between items-center py-3 cursor-pointer md:cursor-default"
                onClick={() => onProjectSelect(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onProjectSelect(project);
                  }
                }}
            >
              <div className="flex items-center flex-1 min-w-0">
                <span
                  className={`text-2xl font-medium tracking-tight text-left transition-colors duration-200 truncate ${
                    activeProject?.id === project.id ? 'text-[--color-off-white]' : 'text-gray-500 group-hover:text-[--color-off-white]'
                  }`}
                >
                  {project.name}
                </span>
                {project.url && (
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="ml-3 flex-shrink-0 text-[var(--color-gold)] opacity-70 hover:opacity-100 transition-all duration-300 transform hover:translate-x-1 hover:drop-shadow-[0_0_8px_var(--color-gold)]"
                    aria-label={`Visit ${project.name} website`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </a>
                )}
              </div>
              <div className="flex items-center">
                <span className="hidden md:inline text-xs text-gray-500 uppercase pl-4">{project.type}</span>
                <div 
                    className="md:hidden ml-4 text-[--color-neon-green]"
                    aria-hidden="true"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsColumn;
