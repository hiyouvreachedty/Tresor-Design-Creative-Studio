import React, { useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

declare const Lenis: any;

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111] font-sans flex flex-col p-4 md:p-6 lg:p-8 relative">
      <div className="absolute inset-2 md:inset-4 lg:inset-6 border border-white/10 rounded-xl pointer-events-none"></div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;