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
                    SalesLabX helped us create a system that allowed us to move <span className="text-accent">quickly and confidently</span> as we scaled.
                </blockquote>
                <div className="flex flex-col items-center">
                    <img src={ASSETS.spotifyLogo} alt="Spotify" className="h-8 w-auto mb-4 grayscale" />
                    <cite className="not-italic font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Executive Perspective
                    </cite>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
            <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">Why This Matters <span className="text-textMain/40 font-light block mt-2">(Even If You’re Not Spotify)</span></h2>
                <div className="prose prose-lg text-xl text-textMain font-light leading-relaxed mb-16 max-w-none">
                    <p>Spotify’s scale made the need obvious, but the pattern is universal. Any team experiencing <strong className="text-primary font-bold">more launches</strong>, <strong className="text-primary font-bold">more segments</strong>, or <strong className="text-primary font-bold">less tolerance for error</strong> eventually needs marketing to feel self-reinforcing.</p>
                </div>
                
                <div className="border-l-4 border-accent pl-8 py-2">
                    <p className="text-3xl font-bold text-primary leading-tight">
                        The goal isn’t to do more.<br/>
                        <span className="text-accent">It’s to stop starting over.</span>
                    </p>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 bg-primary text-center">
        <div className="max-w-3xl mx-auto">
            <FadeIn>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-none">
                    Ready to Build <br/><span className="text-accent">Durable Systems?</span>
                </h2>
                <p className="text-white/60 text-xl mb-16">
                    Let’s design the system behind your next phase of growth.
                </p>
                
                <a
                    href={LINKS.website}
                    className="inline-flex items-center bg-accent text-white font-bold py-5 px-10 rounded-none text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-colors"
                >
                    Schedule a Strategy Session <ArrowRight className="ml-3 w-5 h-5" />
                </a>
                
                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center">
                    <img src={ASSETS.logo} alt="SalesLabX" className="h-8 brightness-0 invert mb-6 opacity-50" />
                    <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Campaigns Reset. Systems Compound.</p>
                </div>
            </FadeIn>
        </div>
      </section>
    </>
  );
};

export default FooterCTA;