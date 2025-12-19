import React from 'react';
import { AlertTriangle, X, Activity, Clock } from 'lucide-react';
import { CHAOS_DATA } from '../constants';
import FadeIn from './ui/FadeIn';

const ChaosSection: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-0 border-b border-gray-200">
      <div className="py-24 px-6 lg:px-16 bg-white order-2 lg:order-1 border-r border-gray-200">
        <FadeIn direction="right">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-red-700 font-mono text-[10px] font-bold uppercase tracking-wider">
            Problem Identification
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-primary mt-8 mb-8">
            Growing Teams Feel It <br /> Before They Can <span className="border-b-4 border-red-600">Name It.</span>
          </h2>
          <p className="text-xl text-textMain leading-relaxed font-normal max-w-xl">
            {CHAOS_DATA.subtitle}
          </p>
          
          <div className="mt-12 space-y-0 border-t border-gray-200">
            {CHAOS_DATA.symptoms.map((item, i) => (
              <div key={i} className="flex items-center gap-6 py-6 border-b border-gray-200 group hover:bg-gray-50 transition-colors px-4 -mx-4">
                <X className="w-5 h-5 text-red-600" />
                <span className="font-medium text-lg text-primary">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="relative bg-bgLight py-24 px-6 lg:px-16 flex items-center justify-center order-1 lg:order-2 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 w-full max-w-md space-y-6">
          <FadeIn delay={200} direction="up">
            <div className="p-0 bg-white border border-red-200 shadow-sm">
              <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-700">System Alert</span>
                  </div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              </div>
              <div className="p-6">
                <div className="h-1 w-full bg-red-100 mb-4">
                    <div className="h-full bg-red-600 w-3/4"></div>
                </div>
                <p className="font-mono text-xs text-primary font-bold uppercase">Critical: Momentum Reset Detected</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            <FadeIn delay={400} direction="up">
                <div className="p-6 bg-white border border-gray-200 h-full flex flex-col justify-between hover:border-red-300 transition-colors">
                <Activity className="text-red-600 w-8 h-8 mb-4" />
                <div>
                    <div className="font-mono text-[10px] text-textMain uppercase tracking-widest mb-1">Launch Speed</div>
                    <div className="text-2xl font-bold text-primary">Slowing</div>
                </div>
                </div>
            </FadeIn>
            
            <FadeIn delay={600} direction="up">
                <div className="p-6 bg-white border border-gray-200 h-full flex flex-col justify-between hover:border-primary transition-colors">
                <Clock className="text-primary w-8 h-8 mb-4" />
                <div>
                    <div className="font-mono text-[10px] text-textMain uppercase tracking-widest mb-1">Team Fatigue</div>
                    <div className="text-2xl font-bold text-primary">High</div>
                </div>
                </div>
            </FadeIn>
          </div>
          
           <FadeIn delay={800} direction="up">
            <div className="py-3 px-4 bg-primary text-white text-center">
                 <p className="font-mono text-[10px] font-bold uppercase tracking-widest">Diagnosis: Systems Lagging Ambition</p>
            </div>
           </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ChaosSection;