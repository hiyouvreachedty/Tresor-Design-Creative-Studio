import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Candid',
    year: '2023',
    tags: ['Branding', 'Web Design'],
    imageUrl: 'https://picsum.photos/seed/candid/800/600',
  },
  {
    title: 'Channel 5',
    year: '2023',
    tags: ['Web Design', 'Development'],
    imageUrl: 'https://picsum.photos/seed/channel5/800/600',
  },
  {
    title: 'Phantom',
    year: '2022',
    tags: ['Web3', 'Development'],
    imageUrl: 'https://picsum.photos/seed/phantom/800/600',
  },
  {
    title: 'Rally',
    year: '2022',
    tags: ['Branding', 'Strategy'],
    imageUrl: 'https://picsum.photos/seed/rally/800/600',
  },
  {
    title: 'Hims',
    year: '2021',
    tags: ['Art Direction', 'Motion'],
    imageUrl: 'https://picsum.photos/seed/hims/800/600',
  },
];

const FeaturedWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    if (!scrollContainer || !stickyContainerRef.current) return;
    
    const setStickyHeight = () => {
      if (stickyContainerRef.current) {
        stickyContainerRef.current.style.height = `${scrollContainer.clientHeight}px`;
      }
    };

    setStickyHeight();

    const onScroll = () => {
      if (!containerRef.current || !contentRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const contentWidth = contentRef.current.scrollWidth;
      const viewWidth = scrollContainer.clientWidth;
      const viewHeight = scrollContainer.clientHeight;
      const scrollableDistance = contentWidth - viewWidth;
      
      if (top < 0 && top > -height + viewHeight) {
        const progress = -top / (height - viewHeight);
        const newTransform = -progress * scrollableDistance;

        contentRef.current.style.transform = `translateX(${Math.min(0, Math.max(-scrollableDistance, newTransform))}px)`;
      } else if (top >= 0) {
        contentRef.current.style.transform = 'translateX(0px)';
      } else {
        contentRef.current.style.transform = `translateX(${-scrollableDistance}px)`;
      }
    };
    
    scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', setStickyHeight);
    onScroll();

    return () => {
      scrollContainer.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', setStickyHeight);
    };
  }, []);


  return (
    <section className="relative bg-[#111111] pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Featured Work</h2>
      </div>
      <div ref={containerRef} className="relative h-[300vh] mt-16">
        <div ref={stickyContainerRef} className="sticky top-0 flex items-center overflow-hidden">
          <div ref={contentRef} className="flex content-area">
            <div className="flex-shrink-0 flex items-center space-x-8 px-4 md:px-16">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;