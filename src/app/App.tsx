import React, { useState } from 'react';
import Header from '../components/layout/Header';
import MainContent from '../components/layout/MainContent';
import Footer from '../components/layout/Footer';
import PrivacyPolicyModal from '../components/ui/PrivacyPolicyModal';
import TermsOfUseModal from '../components/ui/TermsOfUseModal';
import ContactModal from '../components/ui/ContactModal';

const App: React.FC = () => {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="h-screen font-sans flex flex-col text-[var(--color-off-white)]">
      {/* Main bordered box */}
      <div className="flex-1 flex flex-col pt-4 px-4 pb-4 md:pt-6 md:px-6 md:pb-6 lg:pt-8 lg:px-8 lg:pb-8 relative min-h-0">
        <div className="absolute inset-2 md:inset-4 lg:inset-6 border border-white/10 rounded-xl pointer-events-none"></div>
        <Header onContactClick={() => setContactModalOpen(true)} />
        <MainContent />
        <Footer
          onPrivacyClick={() => setPrivacyModalOpen(true)}
          onTermsClick={() => setTermsModalOpen(true)}
        />
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
      {isContactModalOpen && (
        <ContactModal
          onClose={() => setContactModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
