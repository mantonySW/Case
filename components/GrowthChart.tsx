import React, { useState, useEffect } from 'react';
import { Target, Users, BarChart3, Zap } from 'lucide-react';

const GrowthChart: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: "01",
      title: "Clean Input",
      desc: "Filters isolate high-intent signals.",
      icon: <Target strokeWidth={1.5} />,
    },
    {
      id: "02",
      title: "Focused Action",
      desc: "Sales engages ready buyers only.",
      icon: <Users strokeWidth={1.5} />,
    },
    {
      id: "03",
      title: "Data Feedback",
      desc: "Outcomes sync back to marketing.",
      icon: <BarChart3 strokeWidth={1.5} />,
    },
    {
      id: "04",
      title: "Auto-Tune",
      desc: "Logic improves automatically.",
      icon: <Zap strokeWidth={1.5} />,
    }
  ];

  return (
    <div className="w-full bg-white p-8 md:p-12 border border-gray-100/50 shadow-sm rounded-sm">
      {/* Minimal Header */}
      <div className="flex justify-between items-center mb-16 border-b border-gray-100 pb-6">
        <div>
            <h3 className="text-lg font-medium text-primary tracking-tight">The Revenue Loop</h3>
        </div>
        <div className="flex items-center gap-3">
             <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">System Active</span>
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
      </div>

      {/* Visualization */}
      <div className="relative">
        
        {/* Base Line */}
        <div className="absolute top-[18px] left-0 w-full h-px bg-gray-100"></div>
        
        {/* Progress Line */}
        <div 
            className="absolute top-[18px] left-0 h-px bg-primary transition-all duration-1000 ease-in-out"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        ></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = activeStep >= index;

                return (
                    <div 
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`group cursor-pointer flex flex-col items-start transition-all duration-500 ${isPast ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}
                    >
                        {/* Icon Node */}
                        <div className={`
                            relative w-9 h-9 rounded-full flex items-center justify-center mb-6 z-10 transition-all duration-500 bg-white border
                            ${isPast ? 'border-primary text-primary' : 'border-gray-200 text-gray-300'}
                            ${isActive ? 'ring-4 ring-gray-50 scale-110' : ''}
                        `}>
                            {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}
                        </div>

                        {/* Text */}
                        <div className="space-y-2 pr-2">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400">Step {step.id}</span>
                            <h4 className={`text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-600'}`}>{step.title}</h4>
                            <p className="text-xs text-gray-500 font-light leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;