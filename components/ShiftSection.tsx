import React from 'react';
import { ArrowRight, Zap, Check } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import GrowthChart from './GrowthChart';

const ShiftSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-primary text-white relative overflow-hidden border-b border-white/10">
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1">
                   <FadeIn>
                        <div className="inline-block px-3 py-1 border border-white/20 text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-8">
                            The Turnaround
                        </div>
                       <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                           They activated a <br/> SalesLabX Subscription.
                       </h2>
                       <p className="text-3xl text-white mb-8 font-bold leading-tight">
                           The system started <span className="text-accent">compounding.</span>
                       </p>
                       <p className="text-lg text-white/60 mb-12 font-normal max-w-lg leading-relaxed">
                           Sales started trusting the data again. Alerts started firing on high-intent signals. The noise cleared out. Then a new campaign launched in three days. Not because anyone worked faster, but because the system was finally ready.
                       </p>
                       
                       <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 text-white/80">
                                <Check className="text-accent w-5 h-5" />
                                <span>No restarts.</span>
                            </div>
                            <div className="flex items-center gap-4 text-white/80">
                                <Check className="text-accent w-5 h-5" />
                                <span>No re-onboarding.</span>
                            </div>
                            <div className="flex items-center gap-4 text-white/80">
                                <Check className="text-accent w-5 h-5" />
                                <span>No managing another vendor.</span>
                            </div>
                       </div>
                   </FadeIn>
               </div>
               
               <div className="order-1 lg:order-2">
                   <FadeIn delay={200}>
                       <div className="bg-white p-6 rounded-sm shadow-none transform rotate-0">
                            <GrowthChart />
                       </div>
                   </FadeIn>
               </div>
           </div>
        </div>
     </section>
  );
};

export default ShiftSection;