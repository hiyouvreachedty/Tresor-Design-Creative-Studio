import React from 'react';
import Modal from './Modal';

interface LegalModalProps {
  onClose: () => void;
  onAccept: () => void;
}

const TermsOfUseModal: React.FC<LegalModalProps> = ({ onClose, onAccept }) => {
  return (
    <Modal onClose={onClose}>
      <header className="p-6 flex justify-between items-center border-b border-white/10 shrink-0">
        <h2 className="text-2xl font-bold text-white">Terms of Use</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-2xl">&times;</button>
      </header>
      <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar text-gray-400 space-y-4 text-sm">
        <p className="break-words"><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        <p className="break-words">By accessing the website at tresordesign.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        <h3 className="font-bold text-white pt-2">1. Use License</h3>
        <p className="break-words">Permission is granted to temporarily download one copy of the materials (information or software) on Tresor Design Creative Studio's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
        <h3 className="font-bold text-white pt-2">2. Disclaimer</h3>
        <p className="break-words">The materials on Tresor Design Creative Studio's website are provided on an 'as is' basis. Tresor Design Creative Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        <h3 className="font-bold text-white pt-2">3. Limitations</h3>
        <p className="break-words">In no event shall Tresor Design Creative Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tresor Design Creative Studio's website.</p>
        <h3 className="font-bold text-white pt-2">4. Governing Law</h3>
        <p className="break-words">These terms and conditions are governed by and construed in accordance with the laws of Canada and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
      </div>
       <footer className="p-4 border-t border-white/10 shrink-0 flex justify-end">
          <button 
            onClick={onAccept} 
            className="bg-[--color-neon-green] text-black px-6 py-2 rounded-md font-medium text-sm hover:bg-white transition-colors duration-300 hover:shadow-[0_0_15px_var(--color-neon-green)]"
          >
            Accept
          </button>
      </footer>
    </Modal>
  );
};

export default TermsOfUseModal;