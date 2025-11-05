import React from 'react';
import Modal from './Modal';

interface AboutMeModalProps {
  onClose: () => void;
}

const DataField: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-xs font-bold tracking-[0.2em] text-[--color-neon-green] uppercase mb-2 font-mono">{title}</h3>
    <div className="border-l-2 border-[--color-neon-green]/30 pl-4 text-sm space-y-1.5">{children}</div>
  </div>
);

const AboutMeModal: React.FC<AboutMeModalProps> = ({ onClose }) => {
  const profileImageUrl = 'https://avatars.githubusercontent.com/u/107938313?v=4';

  return (
    <Modal onClose={onClose} maxWidth="max-w-4xl">
      <header className="p-4 flex justify-between items-center border-b border-white/10 shrink-0 font-mono bg-[#0D1117]/30">
        <div>
          <h2 className="text-lg font-bold text-white tracking-widest">OPERATIVE DOSSIER</h2>
          <p className="text-xs text-gray-400">CLASSIFIED // TRESOR-7</p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-3xl">&times;</button>
      </header>
      
      <div 
        className="p-6 md:p-8 overflow-y-auto custom-scrollbar text-gray-300"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Image Column */}
          <div className="space-y-4">
            <div className="relative border-2 border-white/10 p-1 bg-[#0D1117]">
              <img 
                src={profileImageUrl} 
                alt="Operative Profile Picture"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-green-900/20 mix-blend-hard-light pointer-events-none"></div>
              <span className="absolute top-2 left-2 text-xs font-mono bg-[#0D1117]/50 px-2 py-1 text-[--color-neon-green]">SUBJECT IDENTIFIED</span>
            </div>
             <div className="border border-white/10 p-2 text-center font-mono">
                <p className="text-xs text-gray-400">CODENAME</p>
                <p className="text-lg text-white tracking-widest">PANTHER</p>
             </div>
          </div>

          {/* Info Column */}
          <div className="space-y-6">
            <DataField title="Affiliation">
                <p>&gt; Tresor Design Group</p>
            </DataField>

            <DataField title="Certifications">
              <p>&gt; Harvard CS50 (Computer Science)</p>
              <p>&gt; Google Data Analytics</p>
              <p>&gt; UI/UX Design Certified</p>
            </DataField>
            
            <DataField title="Education">
              <p>&gt; University of Manitoba</p>
            </DataField>

            <DataField title="Career Highlights">
              <p>&gt; 2022 Commonwealth Games — IT Support Manager</p>
              <p>&gt; HighKey Agency — Top Press Manager</p>
              <p>&gt; 2× Silver Medalist (Boxing Team Canada)</p>
              <p>&gt; 2016 Olympic Alternate</p>
            </DataField>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AboutMeModal;