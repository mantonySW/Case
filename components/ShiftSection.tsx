import React from 'react';
import FadeIn from './ui/FadeIn';
import { Check } from 'lucide-react';

const ShiftSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-primary text-white relative overflow-hidden border-b border-white/10">
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <div className="inline-block px-3 py-1 border border-white/20 text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-8">
                Section 3 — What Changed
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight max-w-4xl">
                They activated a SalesLabX subscription. <span className="text-accent">The system started compounding.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-8 max-w-4xl">
              <p className="text-xl text-white/80 leading-relaxed">
                Tracking got cleaned up. Forms rebuilt to capture real buying signals. Lead scoring rewired based on actual behavior. Routing fixed. Sales started trusting the data again. Alerts started firing on high-intent signals. Nurtures tuned to what was converting. The noise cleared out.
              </p>

              <p className="text-xl text-white/80 leading-relaxed">
                Then a new campaign launched in three days. Not because anyone worked faster—because the system was ready.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-16 bg-black/30 border border-white/20 p-12">
              <div className="flex items-start gap-4 mb-8">
                <Check className="w-8 h-8 text-accent shrink-0" />
                <p className="text-2xl font-bold text-white leading-tight">
                  Each improvement built on the last. No restarts. No re-onboarding. No managing another vendor.
                </p>
              </div>
              <p className="text-lg text-white/70 leading-relaxed">
                And because SalesLabX runs the loop across 500+ organizations, Spotify's system didn't just benefit from its own data—it benefited from patterns across every system running on SalesLabX. What's working right now, not what worked last year.
              </p>
            </div>
          </FadeIn>
        </div>
    </section>
  );
};

export default ShiftSection;
