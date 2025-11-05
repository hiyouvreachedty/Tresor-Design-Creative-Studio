import React, { useState, useEffect, useRef, useCallback } from 'react';
import AboutColumn from './AboutColumn';
import ProjectsColumn from './ProjectsColumn';
import ProjectDetailColumn from './ProjectDetailColumn';
import { projects, Project } from '../data/projects';
import ProjectModal from './ProjectModal';
import AboutMeModal from './AboutMeModal';
import ImageModal from './ImageModal';

declare global {
  interface Window {
    Lenis: any;
  }
}

const MainContent: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(projects[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [enlargedProject, setEnlargedProject] = useState<Project | null>(null);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  const aboutColRef = useRef<HTMLDivElement>(null);
  const projectsColRef = useRef<HTMLDivElement>(null);
  const detailColRef = useRef<HTMLDivElement>(null);
  const lenisInstancesRef = useRef<any[]>([]);

  useEffect(() => {
    const Lenis = window.Lenis;
    if (!Lenis) {
      console.error("Lenis not found");
      return;
    }
    
    const newLenisInstances: any[] = [];
    
    [aboutColRef, projectsColRef, detailColRef].forEach(ref => {
      if (ref.current) {
        const lenis = new Lenis({
          wrapper: ref.current,
          // A lower value is smoother. Default is 0.1.
          // This makes the scroll feel a bit more fluid.
          lerp: 0.08,
        });
        newLenisInstances.push(lenis);
      } else {
        newLenisInstances.push(null); // Keep indices correct
      }
    });
    lenisInstancesRef.current = newLenisInstances;

    if (newLenisInstances.every(i => i === null)) return;

    let animationFrameId: number;
    function raf(time: number) {
      newLenisInstances.forEach(lenis => lenis?.raf(time));
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      newLenisInstances.forEach(lenis => lenis?.destroy());
      lenisInstancesRef.current = [];
    };
  }, []);

  const handleProjectsColumnExpansionChange = useCallback(() => {
    // Wait for the animation to finish before resizing.
    const resizeTimer = setTimeout(() => {
        const projectsColumnLenis = lenisInstancesRef.current[1];
        if (projectsColumnLenis) {
            projectsColumnLenis.resize();
        }
    }, 550); // The transition is 500ms

    return () => clearTimeout(resizeTimer);
  }, []);

  return (
    <>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] min-h-0">
        <div ref={aboutColRef} className="hidden md:flex flex-col relative md:border-r border-white/10 py-6 overflow-y-auto custom-scrollbar">
          <AboutColumn onProfileClick={() => setIsAboutMeOpen(true)} />
        </div>
        <div ref={projectsColRef} className="relative md:border-r border-white/10 py-6 overflow-y-auto custom-scrollbar">
          <ProjectsColumn 
            projects={projects} 
            activeProject={activeProject} 
            onProjectHover={setActiveProject}
            onExpansionChange={handleProjectsColumnExpansionChange}
          />
        </div>
        <div ref={detailColRef} className="hidden md:block relative py-6 overflow-y-auto custom-scrollbar">
          <ProjectDetailColumn 
            project={activeProject} 
            onInfoClick={() => activeProject && setSelectedProject(activeProject)} 
            onEnlargeClick={() => activeProject && setEnlargedProject(activeProject)}
          />
        </div>
      </main>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {enlargedProject && (
        <ImageModal
          project={enlargedProject}
          onClose={() => setEnlargedProject(null)}
        />
      )}

      {isAboutMeOpen && (
        <AboutMeModal
          onClose={() => setIsAboutMeOpen(false)}
        />
      )}
    </>
  );
};

export default MainContent;