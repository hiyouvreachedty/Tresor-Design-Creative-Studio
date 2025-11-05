import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfUseModal from './components/TermsOfUseModal';

const App: React.FC = () => {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);

  return (
    <div className="h-screen font-sans flex flex-col text-[var(--color-off-white)]">
      {/* Main bordered box */}
      <div className="flex-1 flex flex-col p-4 md:p-6 lg:p-8 relative min-h-0">
        <div className="absolute inset-2 md:inset-4 lg:inset-6 border border-white/10 rounded-xl pointer-events-none"></div>
        <Header />
        <MainContent />
        <Footer />
      </div>

      {/* Links outside the box */}
      <div className="text-center py-2 shrink-0">
        <button onClick={() => setPrivacyModalOpen(true)} className="text-xs text-gray-600 hover:text-white transition-colors mx-2">Privacy Policy</button>
        <span className="text-gray-600">&bull;</span>
        <button onClick={() => setTermsModalOpen(true)} className="text-xs text-gray-600 hover:text-white transition-colors mx-2">Terms of Use</button>
      </div>

      {isPrivacyModalOpen && (
        <PrivacyPolicyModal 
          onClose={() => setPrivacyModalOpen(false)}
          onAccept={() => setPrivacyModalOpen(false)}
        />
      )}
      {isTermsModalOpen && (
        <TermsOfUseModal 
          onClose={() => setTermsModalOpen(false)}
          onAccept={() => setTermsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;