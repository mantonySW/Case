import React from 'react';
import FadeIn from './ui/FadeIn';
import { GridPattern } from './ui/Shapes';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden bg-bgLight border-b border-gray-200">
        <GridPattern className="z-0 opacity-100" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn delay={100}>
                <div className="inline-flex items-center gap-3 px-4 py-1 bg-white border border-gray-300 text-primary font-mono text-[11px] font-bold uppercase tracking-wider mb-8">
                   <span className="w-2 h-2 bg-accent"></span>
                   Case Study 29
                </div>
            </FadeIn>
            <FadeIn delay={200}>
                <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight tracking-tight mb-8 max-w-5xl">
                    <span className="relative inline-block mr-3 align-middle">
                        <img
                            src={ASSETS.spotifyLogo}
                            alt="Spotify"
                            className="h-[0.8em] w-auto -mt-2 opacity-100 filter grayscale transition-all duration-300 hover:grayscale-0"
                        />
                    </span>
                    Pardot and Salesforce worked. <span className="text-accent">Technically.</span>
                </h1>
                <p className="text-xl md:text-2xl text-textMain leading-relaxed max-w-4xl">
                    Leads came in across 13 countries. Data synced. Reports ran. But nothing connected the way it should—and they knew they were leaving pipeline on the table.
                </p>
            </FadeIn>
            
            <FadeIn delay={400}>
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-300 bg-gray-300 gap-px mt-20">
                    <div className="group bg-white p-8 hover:bg-gray-50 transition-colors h-48 flex flex-col justify-between">
                        <p className="font-mono text-[10px] text-textMain uppercase tracking-widest">Client</p>
                        <img src={ASSETS.spotifyLogo} alt="Spotify for Brands" className="h-8 w-auto object-contain self-start mb-2 grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <div className="group bg-white p-8 hover:bg-gray-50 transition-colors h-48 flex flex-col justify-between">
                        <p className="font-mono text-[10px] text-textMain uppercase tracking-widest">Markets</p>
                        <p className="font-bold text-primary text-5xl tracking-tighter">13+</p>
                    </div>
                    <div className="group bg-white p-8 hover:bg-gray-50 transition-colors h-48 flex flex-col justify-between">
                        <p className="font-mono text-[10px] text-textMain uppercase tracking-widest">Partnership</p>
                        <p className="font-bold text-primary text-5xl tracking-tighter">3+ <span className="text-sm font-normal text-textMain ml-1 align-top relative top-2">Years</span></p>
                    </div>
                    <div className="group bg-primary p-8 text-white h-48 flex flex-col justify-between relative overflow-hidden">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent"></div>
                            <p className="font-mono text-[10px] text-accent uppercase tracking-widest">Outcome</p>
                        </div>
                        <p className="font-bold text-2xl leading-none tracking-tight">Compounding<br/>Growth</p>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>
  );
};

export default Hero;