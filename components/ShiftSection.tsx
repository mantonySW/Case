import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import GrowthChart from './GrowthChart';
import { CirclePattern } from './ui/Shapes';

const ShiftSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-primary text-white relative overflow-hidden border-b border-white/10">
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-start">
               <div className="order-2 lg:order-1">
                   <FadeIn>
                        <div className="inline-block px-3 py-1 border border-white/20 text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-8">
                            Strategic Shift
                        </div>
                       <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                           Designing for <br/> <span className="text-accent">Continuity</span>
                       </h2>
                       <p className="text-xl text-white/60 mb-12 font-normal max-w-lg leading-relaxed">
                           The work began with a simple principle: <strong className="text-white font-medium block mt-2">Every launch should make the next one easier.</strong>
                       </p>
                       
                       <div className="border border-white/10 bg-black/20">
                           <ul className="divide-y divide-white/10">
                               {[
                                   { from: "Improvisation", to: "Structure" },
                                   { from: "Reinvention", to: "Reuse" },
                                   { from: "Decision Fatigue", to: "Consistency" },
                                   { from: "Isolated Events", to: "Compounding Activity" }
                               ].map((item, i) => (
                                   <li key={i} className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors group">
                                       <span className="text-white/40 font-mono text-sm uppercase tracking-wide decoration-white/20 group-hover:text-white/60 transition-colors w-1/3">{item.from}</span>
                                       <ArrowRight className="w-4 h-4 text-accent" />
                                       <span className="font-bold text-white text-lg tracking-tight text-right w-1/3">{item.to}</span>
                                   </li>
                               ))}
                           </ul>
                       </div>
                   </FadeIn>
               </div>
               
               <div className="order-1 lg:order-2">
                   <FadeIn delay={200}>
                       <div className="bg-white p-6 rounded-sm shadow-none transform rotate-0">
                            <GrowthChart />
                       </div>
                        <div className="flex items-start gap-4 mt-8 border-l-2 border-accent pl-6">
                            <p className="text-sm text-white/60 font-normal leading-relaxed max-w-sm">
                            "Instead of treating campaigns as isolated events, Spotify invested in continuous revenue motion."
                            </p>
                        </div>
                   </FadeIn>
               </div>
           </div>
        </div>
     </section>
  );
};

export default ShiftSection;