import React, { useState, useEffect } from 'react';
import { Project } from '../data/projects';
import TradingViewWidget from './TradingViewWidget';

interface ProjectsColumnProps {
  projects: Project[];
  activeProject: Project | null;
  onProjectHover: (project: Project) => void;
  onExpansionChange: () => void;
}

const ProjectExpansionDetail: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="pt-2 pb-4 space-y-4">
      <div className="group aspect-video bg-gray-800/50 rounded-lg overflow-hidden">
        <img src={project.image1} alt={`${project.name} view 1`} className="w-full h-full object-cover"/>
      </div>
      <div className="group aspect-video bg-gray-800/50 rounded-lg overflow-hidden">
        {project.tickerSymbol ? (
          <TradingViewWidget symbol={project.tickerSymbol} />
        ) : (
          <img src={project.image2} alt={`${project.name} view 2`} className="w-full h-full object-cover"/>
        )}
      </div>
    </div>
  );
};


const ProjectsColumn: React.FC<ProjectsColumnProps> = ({ projects, activeProject, onProjectHover, onExpansionChange }) => {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const handleToggleExpand = (projectId: number) => {
    setExpandedProjectId(prevId => (prevId === projectId ? null : projectId));
  };

  useEffect(() => {
    if (onExpansionChange) {
      onExpansionChange();
    }
  }, [expandedProjectId, onExpansionChange]);


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
                onClick={() => handleToggleExpand(project.id)}
                role="button"
                aria-expanded={expandedProjectId === project.id}
                aria-controls={`project-details-${project.id}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggleExpand(project.id);
                  }
                }}
            >
              <div className="flex items-center flex-1 min-w-0">
                <span
                  className={`text-2xl font-medium tracking-tight text-left transition-colors duration-200 truncate ${
                    (activeProject?.id === project.id || expandedProjectId === project.id) ? 'text-[--color-off-white]' : 'text-gray-500 group-hover:text-[--color-off-white]'
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
                    className="md:hidden ml-4 text-[--color-neon-green] border border-[--color-neon-green] rounded-sm w-6 h-6 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                >
                    <span className={`transition-transform duration-300 text-lg ${expandedProjectId === project.id ? 'rotate-45' : ''}`}>+</span>
                </div>
              </div>
            </div>
            <div 
                id={`project-details-${project.id}`}
                className={`md:hidden transition-all duration-500 ease-in-out grid ${expandedProjectId === project.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <ProjectExpansionDetail project={project} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsColumn;