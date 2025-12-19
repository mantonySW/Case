import React, { useState } from 'react';
import { SYSTEM_LAYERS } from '../constants';
import { ChevronRight, X, Play, ArrowLeft, ArrowRight, Globe, Activity, Shield, Settings, MousePointerClick } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const ICON_MAP: Record<string, React.ReactNode> = {
    'Globe': <Globe />,
    'Activity': <Activity />,
    'Shield': <Shield />
};

const SystemSection: React.FC = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);

  const selectedLayer = SYSTEM_LAYERS.find(l => l.id === selectedLayerId);

  return (
    <div className="relative min-h-[800px] flex items-center justify-center bg-bgLight py-24 px-6 overflow-hidden border-b border-gray-200">
        {/* Decorative Grid */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ccc_1px,transparent_1px),linear-gradient(to_bottom,#ccc_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Main Grid: Architecture Overview */}
      <div className={`relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full max-w-7xl transition-all duration-500 ease-in-out ${selectedLayerId ? 'opacity-0 -translate-x-12 pointer-events-none absolute' : 'opacity-100 translate-x-0'}`}>
        <div className="relative h-full flex flex-col justify-center space-y-12">
          <FadeIn>
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary text-primary font-mono text-[10px] font-bold uppercase tracking-widest">
                System Architecture
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
                A Unified Revenue <br /> Marketing Foundation
                </h2>
                <p className="text-textMain text-xl font-normal leading-relaxed max-w-md">
                SalesLabX helped design a system where marketing activity <span className="font-bold text-primary border-b-2 border-accent">compounded over time</span>.
                </p>
            </div>
          </FadeIn>

          <div className="space-y-0 border-t border-gray-300">
            {SYSTEM_LAYERS.map((layer, index) => (
              <FadeIn key={layer.id} delay={index * 100} direction="left">
                <div 
                    className={`group flex items-center gap-6 p-6 border-b border-gray-300 cursor-pointer transition-all duration-300 ${
                    hoveredLayer === layer.id 
                        ? 'bg-white border-l-4 border-l-accent pl-8' 
                        : 'bg-transparent hover:bg-white hover:pl-7'
                    }`}
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    onClick={() => setSelectedLayerId(layer.id)}
                >
                    <div className={`transition-colors duration-300 ${hoveredLayer === layer.id ? 'text-accent' : 'text-primary'}`}>
                    {React.cloneElement(ICON_MAP[layer.icon] as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                    </div>
                    <div className="flex-grow">
                    <h4 className="font-bold text-primary text-lg uppercase tracking-wide">{layer.title}</h4>
                    <p className="text-sm text-textMain/80 font-normal">{layer.description}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${hoveredLayer === layer.id ? 'translate-x-1 text-accent' : 'text-gray-400'}`} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="relative h-[600px] flex items-center justify-center perspective-[1500px] hidden lg:flex">
          <div className="relative w-full max-w-[400px] h-full flex flex-col items-center justify-center">
            {SYSTEM_LAYERS.map((layer, i) => {
              const isHovered = hoveredLayer === layer.id;
              const zIndex = 3 - i; // Stack order
              const offsetMultiplier = i; 
              
              return (
                <div 
                  key={layer.id}
                  className={`absolute w-full bg-white border border-gray-300 transition-all duration-500 transform-gpu cursor-pointer ${
                    isHovered 
                      ? 'shadow-xl border-accent translate-x-4 -translate-y-[40px] z-50' 
                      : 'shadow-sm'
                  }`}
                  style={{
                    zIndex: isHovered ? 50 : zIndex,
                    transform: isHovered ? `translateY(-${offsetMultiplier * 60}px) translateX(20px)` : `translateY(-${offsetMultiplier * 60}px)`,
                    opacity: hoveredLayer && !isHovered ? 0.4 : 1
                  }}
                  onMouseEnter={() => setHoveredLayer(layer.id)}
                  onMouseLeave={() => setHoveredLayer(null)}
                  onClick={() => setSelectedLayerId(layer.id)}
                >
                  <div className="p-8 h-48 flex flex-col justify-between relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">Layer 0{i+1}</span>
                      <div className={`transition-colors duration-300 ${isHovered ? 'text-accent' : 'text-gray-300'}`}>
                        {React.cloneElement(ICON_MAP[layer.icon] as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-xl text-primary mb-3 uppercase tracking-tight">{layer.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item, j) => (
                          <span key={j} className="text-[10px] px-2 py-1 bg-gray-100 text-primary font-bold uppercase tracking-wide">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Button */}
                    <div className={`absolute bottom-6 right-6 bg-accent text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                  {/* Bottom Accent Bar */}
                  <div className="h-1 w-full bg-primary"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail View */}
      <div className={`absolute inset-0 z-50 bg-bgLight transition-all duration-500 ease-in-out flex items-center justify-center p-6 ${selectedLayerId ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
        {selectedLayer && (
          <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start gap-12 lg:gap-24 h-full overflow-y-auto lg:overflow-visible">
            {/* Playbooks Area (Left) */}
            <div className="w-full lg:w-3/5 space-y-10 pt-20 lg:pt-0">
               <div className="space-y-6">
                 <button 
                  onClick={() => setSelectedLayerId(null)}
                  className="group flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-textMain hover:text-accent transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Layers</span>
                </button>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary">{selectedLayer.title} Components</h3>
                  <div className="h-1 w-20 bg-accent"></div>
                  <p className="text-xl text-textMain font-light">The operational logic deployed by SalesLabX.</p>
                </div>
               </div>

               <div className="grid gap-4">
                 {selectedLayer.playbooks?.map((playbook, idx) => (
                   <div key={idx} className="group bg-white p-6 border border-gray-200 hover:border-accent transition-colors duration-300">
                     <div className="flex items-start gap-6">
                       <div className="mt-1 w-10 h-10 bg-gray-100 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                          <Play className="w-4 h-4 fill-current" />
                       </div>
                       <div className="flex-grow space-y-2">
                         <h5 className="text-lg font-bold text-primary uppercase tracking-wide">{playbook.name}</h5>
                         <p className="text-md text-textMain font-normal leading-relaxed">{playbook.desc}</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Standing Card Area (Right) */}
            <div className="w-full lg:w-2/5 flex flex-col items-center pt-20">
              <div className="w-full bg-white border border-gray-200 shadow-xl">
                <div className="p-10 space-y-10">
                   <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                      <div className="text-accent">
                        {React.cloneElement(ICON_MAP[selectedLayer.icon] as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
                      </div>
                      <div className="font-mono text-[10px] font-bold text-white bg-accent px-3 py-1 uppercase tracking-widest">
                        Active Layer
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-primary uppercase tracking-tight">{selectedLayer.title}</h4>
                      <p className="text-md text-textMain leading-relaxed">{selectedLayer.description}</p>
                   </div>

                   <div className="space-y-4 pt-4">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">Key Deliverables</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedLayer.items.map((item, j) => (
                          <span key={j} className="text-[10px] px-3 py-1 bg-bgLight text-primary font-bold border border-gray-200 uppercase tracking-wide">
                            {item}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
                <div className="bg-primary p-4 flex items-center justify-between text-white">
                   <span className="font-mono text-[10px] font-bold uppercase tracking-widest">SLX Verified Stack</span>
                   <Settings className="w-4 h-4 opacity-50" />
                </div>
              </div>

              <button 
                onClick={() => setSelectedLayerId(null)}
                className="mt-12 flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase text-[11px] tracking-widest hover:bg-accent transition-colors"
              >
                <span>Return to Overview</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemSection;