import React from 'react';
import { Project } from '../../content/projects';
import Modal from './Modal';
import TradingViewWidget from '../shared/TradingViewWidget';

interface ImageModalProps {
  project: Project;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ project, onClose }) => {
  return (
    <Modal onClose={onClose} maxWidth="max-w-6xl">
       <header className="p-4 flex justify-between items-center shrink-0 border-b border-white/10">
        <h2 className="text-lg font-bold text-white">{project.name} - Gallery</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-3xl">&times;</button>
      </header>
      <div className="p-4 overflow-y-auto custom-scrollbar">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video bg-gray-800/50 rounded-lg overflow-hidden">
              <img src={project.image1} alt={`${project.name} view 1`} className="w-full h-full object-cover animate-fade-in"/>
            </div>
            <div className="aspect-video bg-gray-800/50 rounded-lg overflow-hidden">
              {project.tickerSymbol ? (
                <TradingViewWidget symbol={project.tickerSymbol} />
              ) : (
                <img src={project.image2} alt={`${project.name} view 2`} className="w-full h-full object-cover animate-fade-in"/>
              )}
            </div>
          </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
