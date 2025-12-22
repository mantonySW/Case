import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ChaosSection from './ChaosSection';
import ShiftSection from './ShiftSection';
import SystemSection from './SystemSection';
import ResultsSection from './ResultsSection';
import FooterCTA from './FooterCTA';
import FadeIn from './ui/FadeIn';
import { ATTEMPTS_DATA } from '../constants';
import { XCircle } from 'lucide-react';

export default function SpotifyCaseStudy() {
  return (
    <div className="min-h-screen bg-bgLight selection:bg-accent selection:text-white font-sans text-primary">
      <Header />

      <Hero />
      
      <ChaosSection />

      {/* "What They'd Already Tried" Section */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
            <FadeIn>
                <h3 className="text-gray-400 font-mono text-xs font-bold uppercase tracking-widest mb-12 text-center">What They'd Already Tried</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {ATTEMPTS_DATA.map((attempt, i) => (
                        <div key={i} className="bg-bgLight p-8 border border-gray-200">
                            <div className="flex items-center gap-3 mb-6">
                                <XCircle className="text-gray-400 w-5 h-5" />
                                <h4 className="font-bold text-primary text-lg uppercase tracking-wide">{attempt.title}</h4>
                            </div>
                            <p className="text-textMain leading-relaxed text-sm">
                                {attempt.outcome}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-lg text-primary font-medium">Every approach patched one issue. Then another surfaced. The pattern kept repeating.</p>
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