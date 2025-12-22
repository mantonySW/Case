import React from 'react';
import { RESULTS_DATA } from '../constants';
import FadeIn from './ui/FadeIn';
import { Check } from 'lucide-react';

const ResultsSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary text-primary font-mono text-[10px] font-bold uppercase tracking-wider mb-8">
              Section 4 — The Result
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-16">The Result</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {RESULTS_DATA.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="flex items-start gap-4 p-8 bg-bgLight border border-gray-200 hover:border-accent transition-colors">
                  <Check className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <p className="text-xl text-primary font-medium leading-tight">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
    </section>
  );
};

export default ResultsSection;
