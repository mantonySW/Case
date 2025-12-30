import React from 'react';
import FadeIn from './ui/FadeIn';
import { RefreshCw } from 'lucide-react';

const RevenueLoopSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Clean Input',
      description: 'Filters isolate high-intent signals.'
    },
    {
      number: '02',
      title: 'Focused Action',
      description: 'Sales engages ready buyers only.'
    },
    {
      number: '03',
      title: 'Data Feedback',
      description: 'Outcomes sync back to marketing.'
    },
    {
      number: '04',
      title: 'Auto-Tune',
      description: 'Logic improves automatically.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-8">
              System Active
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">The Revenue Loop</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative">
                  <div className="bg-bgLight p-8 border border-gray-200 hover:border-accent transition-colors h-full">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                      Step {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-textMain leading-relaxed">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-accent"></div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 border-l-2 border-accent pl-6 max-w-3xl mx-auto">
            <RefreshCw className="w-6 h-6 text-accent animate-spin" style={{ animationDuration: '3s' }} />
            <p className="text-lg text-textMain/80 font-normal leading-relaxed italic">
              "Each improvement built on the last. SalesLabX runs this scientific method across 500+ organizations."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default RevenueLoopSection;
