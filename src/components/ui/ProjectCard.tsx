
import React from 'react';

interface ProjectCardProps {
  title: string;
  year: string;
  tags: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, year, tags, imageUrl }) => {
  return (
    <div className="w-[60vw] md:w-[40vw] lg:w-[30vw] flex-shrink-0 group">
      <div className="overflow-hidden rounded-lg mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500 ease-in-out" 
        />
      </div>
      <div className="flex justify-between items-start p-3 rounded-lg transition-colors duration-300 group-hover:bg-white/5">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex gap-2 mt-1">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs text-gray-400 border border-gray-600 rounded-full px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="text-gray-500">{year}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
