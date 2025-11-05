import React from 'react';

interface AboutColumnProps {
  onProfileClick: () => void;
}

const AboutColumn: React.FC<AboutColumnProps> = ({ onProfileClick }) => {
  return (
    <div className="px-4 md:px-6 h-full flex flex-col">
      <div>
        <div className="mb-12">
          <h2 className="text-xs font-bold tracking-widest text-gray-400 mb-4">ABOUT</h2>
          <p className="text-base leading-relaxed text-gray-300">
            Tresor Design is an independent creative studio building brands, digital experiences, and technology to move missions forward.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            Our clients see us as trusted partners who care as much as they do, which is just a ruse because we actually care even more. While our clients work in many industries, they're all serious about earning a meaningful place in the lives of their audiences and users.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-widest text-gray-400 mb-4">SERVICES</h2>
          <ul className="space-y-1 text-gray-300">
            <li>&rarr; Brand Strategy</li>
            <li>&rarr; Verbal Identity</li>
            <li>&rarr; Visual Identity</li>
            <li>&rarr; Web Design</li>
            <li>&rarr; Development</li>
            <li>&rarr; Creative Sprint</li>
          </ul>
        </div>
      </div>
      <div className="mt-auto pt-8">
        <button 
          onClick={onProfileClick}
          className="text-xs font-bold tracking-widest text-[--color-neon-green] hover:text-white transition-colors"
        >
          PROFESSIONAL PROFILE &rarr;
        </button>
      </div>
    </div>
  );
};

export default AboutColumn;