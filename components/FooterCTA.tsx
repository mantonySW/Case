import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import { ASSETS, LINKS } from '../constants';

const FooterCTA: React.FC = () => {
  return (
    <>
      {/* Section 6 - Why SalesLabX */}
      <section className="py-32 px-6 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
            <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 text-accent font-mono text-[10px] font-bold uppercase tracking-wider mb-8">
                  Section 6 — Why SalesLabX
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight max-w-4xl">
                  Why SalesLabX
                </h2>

                <div className="space-y-8 max-w-4xl">
                  <p className="text-xl text-white/80 leading-relaxed">
                    This is the pattern. Drift, fix, decay, repeat—until the loop runs continuously.
                  </p>

                  <p className="text-xl text-white/80 leading-relaxed">
                    Spotify didn't need a bigger project. They needed a different model. That's why they—and 500+ other organizations—run their revenue engine on SalesLabX.
                  </p>
                </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-16 bg-black/30 border border-white/20 p-12">
                <p className="text-3xl font-bold text-white leading-tight">
                  Spotify saw it. 500+ other organizations saw it. Systems compound—or they decay. <span className="text-accent">There's no in-between.</span>
                </p>
              </div>
            </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 bg-accent text-center">
        <div className="max-w-3xl mx-auto">
            <FadeIn>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-none">
                    Ready to Build <br/>Durable Systems?
                </h2>
                <p className="text-white/80 text-xl mb-16">
                    Let's design the system behind your next phase of growth.
                </p>

                <a
                    href={LINKS.website}
                    className="inline-flex items-center bg-white text-primary font-bold py-5 px-10 rounded-none text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
                >
                    Schedule a Strategy Session <ArrowRight className="ml-3 w-5 h-5" />
                </a>

                <div className="mt-24 pt-12 border-t border-white/20 flex flex-col items-center">
                    <img src={ASSETS.logo} alt="SalesLabX" className="h-8 brightness-0 invert mb-6 opacity-70" />
                    <p className="text-white/60 font-mono text-xs uppercase tracking-widest">Streamline Marketing, Optimize Sales, Grow Revenue</p>
                    <p className="text-white/50 text-xs mt-4">&copy; {new Date().getFullYear()} SalesLabX. All rights reserved.</p>
                </div>
            </FadeIn>
        </div>
      </section>
    </>
  );
};

export default FooterCTA;
