import React, { useState } from 'react';
import { RESULTS_DATA } from '../constants';
import FadeIn from './ui/FadeIn';
import { Check, Zap, Target } from 'lucide-react';

const ResultsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'operational' | 'strategic'>('operational');

  return (
    <section className="py-32 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
             <FadeIn>
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">Impact Analysis</h2>
                    
                    <div className="flex border-b border-gray-200">
                        <button 
                            onClick={() => setActiveTab('operational')}
                            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-b-2 ${activeTab === 'operational' ? 'border-accent text-primary' : 'border-transparent text-gray-400 hover:text-primary'}`}
                        >
                            Operational
                        </button>
                        <button 
                            onClick={() => setActiveTab('strategic')}
                            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-b-2 ${activeTab === 'strategic' ? 'border-accent text-primary' : 'border-transparent text-gray-400 hover:text-primary'}`}
                        >
                            Strategic
                        </button>
                    </div>
                </div>
             </FadeIn>
             
             <div className="min-h-[400px]">
                {activeTab === 'operational' && (
                    <FadeIn key="operational" className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-bgLight p-12 border border-gray-200 flex flex-col justify-center">
                            <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-8 text-accent">
                                <Zap className="w-6 h-6 fill-current" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-6 leading-tight">Speed & <br/>Predictability</h3>
                            <div className="h-1 w-12 bg-accent mb-6"></div>
                            <p className="text-lg text-textMain leading-relaxed">Motion became fluid. The friction of starting over was eliminated, allowing teams to focus on quality.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 content-center">
                            {RESULTS_DATA.operational.map((item, i) => (
                                <div key={i} className="flex items-center p-6 bg-white border border-gray-200 hover:border-accent transition-colors">
                                    <div className="w-6 h-6 flex items-center justify-center mr-4 shrink-0">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    <span className="text-primary font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                )}

                {activeTab === 'strategic' && (
                    <FadeIn key="strategic" className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-primary p-12 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-8 text-accent">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Intentional <br/>Expansion</h3>
                            <div className="h-1 w-12 bg-accent mb-6"></div>
                            <p className="text-lg text-gray-300 leading-relaxed">Growth shifted from reactive problem solving to proactive, scalable system building.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 content-center">
                            {RESULTS_DATA.strategic.map((item, i) => (
                                <div key={i} className="flex items-center p-6 bg-white border border-gray-200 hover:border-accent transition-colors">
                                    <div className="w-6 h-6 flex items-center justify-center mr-4 shrink-0">
                                        <Check className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="text-primary font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                )}
             </div>
        </div>
    </section>
  );
};

export default ResultsSection;