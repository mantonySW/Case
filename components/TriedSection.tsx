import React from 'react';
import { TRIED_DATA } from '../constants';
import FadeIn from './ui/FadeIn';
import { X } from 'lucide-react';

const TriedSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-bgLight border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary text-primary font-mono text-[10px] font-bold uppercase tracking-wider mb-8">
            Section 2 — What They'd Already Tried
          </div>

          <div className="grid lg:grid-cols-1 gap-8 mt-12">
            {TRIED_DATA.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white border border-gray-200 hover:border-accent transition-colors">
                  <div className="grid lg:grid-cols-5 gap-0">
                    <div className="lg:col-span-2 p-8 lg:p-12 bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-200 flex items-center">
                      <div className="flex items-start gap-4 w-full">
                        <X className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                        <h3 className="text-2xl font-bold text-primary">{item.approach}</h3>
                      </div>
                    </div>
                    <div className="lg:col-span-3 p-8 lg:p-12 flex items-center">
                      <p className="text-lg text-textMain leading-relaxed">{item.result}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-primary italic">
              Every approach patched one issue. Then another surfaced. The pattern kept repeating.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TriedSection;
