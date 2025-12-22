import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChaosSection from './components/ChaosSection';
import TriedSection from './components/TriedSection';
import ShiftSection from './components/ShiftSection';
import ResultsSection from './components/ResultsSection';
import DifferenceSection from './components/DifferenceSection';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-bgLight selection:bg-accent selection:text-white font-sans text-primary">
      <Header />
      <Hero />
      <ChaosSection />
      <TriedSection />
      <ShiftSection />
      <ResultsSection />
      <DifferenceSection />
      <FooterCTA />
    </div>
  );
}
