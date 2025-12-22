import React from 'react';
import { CHAOS_DATA } from '../constants';
import FadeIn from './ui/FadeIn';

const ChaosSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-red-700 font-mono text-[10px] font-bold uppercase tracking-wider mb-8">
            Section 1 — The Problem
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-primary mb-12 max-w-4xl">
            {CHAOS_DATA.title}
          </h2>

          <div className="space-y-8 max-w-4xl">
            <p className="text-xl text-textMain leading-relaxed">
              {CHAOS_DATA.subtitle}
            </p>

            <p className="text-2xl font-bold text-primary italic">
              {CHAOS_DATA.callout}
            </p>

            <p className="text-xl text-textMain leading-relaxed">
              {CHAOS_DATA.secondaryText}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-16 bg-bgLight p-12 border-l-4 border-accent">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {CHAOS_DATA.scaleTitle}
            </h3>
            <p className="text-xl text-textMain leading-relaxed">
              {CHAOS_DATA.scaleDesc}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ChaosSection;
