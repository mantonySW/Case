import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import { ASSETS, LINKS } from '../constants';

const FooterCTA: React.FC = () => {
  return (
    <>
      {/* Quote */}
      <section className="py-32 px-6 bg-bgLight border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
                <div className="text-6xl text-accent/20 font-serif mb-6">“</div>
                <blockquote className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-12">
                    The goal isn’t to do more. <br/>
                    <span className="text-accent">It’s to stop starting over.</span>
                </blockquote>
                <div className="flex flex-col items-center">
                    <img src={ASSETS.spotifyLogo} alt="Spotify" className="h-8 w-auto mb-4 grayscale" />
                    <cite className="not-italic font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">
                        System Philosophy
                    </cite>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
            <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">The Difference</h2>
                <div className="prose prose-lg text-xl text-textMain font-light leading-relaxed mb-16 max-w-none">
                    <p>Projects patch symptoms. The drift continues.</p>
                    <p>A SalesLabX subscription keeps the loop running. The system never stops improving.</p>
                </div>
                
                <div className="border-l-4 border-accent pl-8 py-2">
                    <p className="text-4xl font-bold text-primary leading-tight">
                        Campaigns reset.<br/>
                        <span className="text-accent">Systems compound.</span>
                    </p>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 bg-primary text-center">
        <div className="max-w-3xl mx-auto">
            <FadeIn>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    Drift, Fix, Decay, Repeat? <br/><span className="text-accent">Or Continuous Growth?</span>
                </h2>
                <p className="text-white/60 text-xl mb-16">
                    Spotify saw it. 500+ other organizations saw it. Systems compound—or they decay. There's no in-between.
                </p>
                
                <a 
                    href={LINKS.website}
                    className="inline-flex items-center bg-accent text-primary font-bold py-5 px-10 rounded-none text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-colors"
                >
                    Start Your Engine <ArrowRight className="ml-3 w-5 h-5" />
                </a>
                
                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center">
                    <img src={ASSETS.logo} alt="SalesLabX" className="h-8 brightness-0 invert mb-6 opacity-50" />
                    <p className="text-white/40 font-mono text-xs uppercase tracking-widest">The Unified Revenue Engine.</p>
                </div>
            </FadeIn>
        </div>
      </section>
    </>
  );
};

export default FooterCTA;