import React, { useState, useRef } from 'react';
import AboutColumn from './AboutColumn';
import ProjectsColumn from './ProjectsColumn';
import ProjectDetailColumn from './ProjectDetailColumn';
import { projects, Project } from '../data/projects';

const MainContent: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(projects[0]);
  const projectDetailRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    // 'md' breakpoint in Tailwind CSS is 768px.
    // We only want to scroll on mobile where columns are stacked.
    if (window.innerWidth < 768) {
      projectDetailRef.current?.scrollIntoView();
    }
  };

  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr]">
      <div className="relative border-b md:border-b-0 md:border-r border-white/10 py-6">
        <AboutColumn />
      </div>
      <div className="relative border-b md:border-b-0 md:border-r border-white/10 py-6">
        <ProjectsColumn 
          projects={projects} 
          activeProject={activeProject} 
          onProjectHover={setActiveProject} 
          onProjectClick={handleProjectClick}
        />
      </div>
      <div ref={projectDetailRef} className="relative py-6">
        <ProjectDetailColumn project={activeProject} />
      </div>
    </main>
  );
};

export default MainContent;