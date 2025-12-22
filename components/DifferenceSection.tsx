import React from 'react';
import FadeIn from './ui/FadeIn';
import { ArrowRight } from 'lucide-react';

const DifferenceSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-bgLight border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary text-primary font-mono text-[10px] font-bold uppercase tracking-wider mb-8">
              Section 5 — The Difference
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-16">The Difference</h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={200}>
              <div className="bg-white p-12 border border-gray-200">
                <p className="text-2xl text-textMain font-medium leading-relaxed mb-6">
                  Projects patch symptoms.
                </p>
                <p className="text-lg text-textMain/70 leading-relaxed">
                  The drift continues.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-primary p-12 text-white border border-primary">
                <p className="text-2xl font-bold leading-relaxed mb-6">
                  A SalesLabX subscription keeps the loop running.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  The system never stops improving.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={600}>
            <div className="mt-16 text-center bg-white p-16 border-4 border-accent">
              <p className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                Campaigns reset. <span className="text-accent">Systems compound.</span>
              </p>
            </div>
          </FadeIn>
        </div>
    </section>
  );
};

export default DifferenceSection;
