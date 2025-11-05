import React from 'react';
import Modal from './Modal';

interface LegalModalProps {
  onClose: () => void;
  onAccept: () => void;
}

const PrivacyPolicyModal: React.FC<LegalModalProps> = ({ onClose, onAccept }) => {
  return (
    <Modal onClose={onClose}>
      <header className="p-6 flex justify-between items-center border-b border-white/10 shrink-0">
        <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-2xl">&times;</button>
      </header>
      <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar text-gray-400 space-y-4 text-sm">
        <p className="break-words"><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        <p className="break-words">Your privacy is important to us. It is Tresor Design Creative Studio's policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <h3 className="font-bold text-white pt-2">1. Information We Collect</h3>
        <p className="break-words">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <h3 className="font-bold text-white pt-2">2. How We Use Your Information</h3>
        <p className="break-words">We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
        <h3 className="font-bold text-white pt-2">3. Cookies</h3>
        <p className="break-words">Our website may use cookies to enhance user experience. You have the option to accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
        <h3 className="font-bold text-white pt-2">4. Links to Other Sites</h3>
        <p className="break-words">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
        <p className="break-words">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
        <h3 className="font-bold text-white pt-2">5. Changes to This Privacy Policy</h3>
        <p className="break-words">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
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

export default PrivacyPolicyModal;