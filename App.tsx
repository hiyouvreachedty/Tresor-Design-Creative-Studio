import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="h-screen font-sans flex flex-col p-4 md:p-6 lg:p-8 relative text-[var(--color-off-white)]">
      <div className="absolute inset-2 md:inset-4 lg:inset-6 border border-white/10 rounded-xl pointer-events-none"></div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;