import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChaosSection from './components/ChaosSection';
import ShiftSection from './components/ShiftSection';
import SystemSection from './components/SystemSection';
import ResultsSection from './components/ResultsSection';
import FooterCTA from './components/FooterCTA';
import FadeIn from './components/ui/FadeIn';
import { Globe, Layers, Activity } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-bgLight selection:bg-accent selection:text-white font-sans text-primary">
      <Header />

      <Hero />
      
      <ChaosSection />

      {/* Inflection Point Bridge */}
      <section className="py-24 px-6 bg-primary text-center border-b border-white/10">
        <div className="max-w-5xl mx-auto">
            <FadeIn>
                <h3 className="text-accent font-mono text-xs font-bold uppercase tracking-widest mb-6">Operational Friction</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight">
                    When Volume Increases,<br/>Friction Becomes Visible.
                </h2>
                <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                     <div className="bg-primary p-10 hover:bg-black/20 transition-colors">
                        <Globe className="text-accent w-6 h-6 mb-6" />
                        <p className="text-white font-medium leading-tight">Across regions and languages</p>
                     </div>
                     <div className="bg-primary p-10 hover:bg-black/20 transition-colors">
                        <Layers className="text-accent w-6 h-6 mb-6" />
                        <p className="text-white font-medium leading-tight">Across product initiatives</p>
                     </div>
                     <div className="bg-primary p-10 hover:bg-black/20 transition-colors">
                        <Activity className="text-accent w-6 h-6 mb-6" />
                        <p className="text-white font-medium leading-tight">Across shifting market conditions</p>
                     </div>
                </div>
            </FadeIn>
        </div>
      </section>

      <ShiftSection />
      
      <SystemSection />
      
      <ResultsSection />
      
      <FooterCTA />

    </div>
  );
}