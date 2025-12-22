import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ASSETS, LINKS, HOME_VALUE_PROP_DATA, HOME_SERVICES_LAYERS, HOME_ADDITIONAL_FEATURES } from '../constants';
import { ArrowRight, Check, Zap, Rocket, Clock, Database, Layers, Brain, Layout, Puzzle, ChevronRight, X, Play, ArrowLeft, Settings, AlertTriangle, Activity } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import { GridPattern } from './ui/Shapes';

const MENU_ITEMS = [
  'Marketing Cloud/Pardot',
  'Salesforce',
  'Plans',
  'Resources',
  'About Us'
];

const LOGOS = [
  'Salesforce', 'Pardot', 'ZoomInfo', 'Outreach', 'SalesLoft', 'Clearbit'
];

const KEYWORDS = [
  "Salesforce", "Pardot", "Account Engagement", "RevOps", "Revenue Strategy", "Digital Marketing Strategy",
  "Creative Agency", "Marketing Agency", "Best Digital Marketing Agency", "Brand Consulting", 
  "Salesforce Consulting", "Marketing Consulting", "Pardot Consulting", "Sales Consulting", 
  "Salesforce Admins", "Salesforce Developers", "Pardot Admins", "Web Developer", "Web Designer", 
  "Conversion Optimized Design", "Texas", "U.S."
];

const ICON_MAP: Record<string, React.ReactNode> = {
    'Brain': <Brain />,
    'Layout': <Layout />,
    'Clock': <Clock />
};

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'projects' | 'integrations'>('projects');

  const selectedLayer = HOME_SERVICES_LAYERS.find(l => l.id === selectedLayerId);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bgLight font-sans text-primary selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-sm border-gray-200 py-4' : 'bg-primary/95 backdrop-blur-md border-white/10 py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/home" className="flex items-center group">
            <img 
              src={ASSETS.logo} 
              alt="SalesLabX" 
              className={`h-6 md:h-8 w-auto object-contain transition-all duration-300 ${scrolled ? 'brightness-0 invert-0' : 'brightness-0 invert opacity-90 group-hover:opacity-100'}`} 
            />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`text-[11px] font-bold uppercase tracking-widest hover:text-accent transition-colors font-mono ${scrolled ? 'text-primary' : 'text-white/80'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <a href="#demo" className="bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-none hover:bg-white hover:text-primary transition-colors border border-accent">
            Get a Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 bg-primary text-white overflow-hidden border-b border-white/10">
        <GridPattern className="opacity-10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center">
                <FadeIn delay={100}>
                    <div className="inline-flex items-center gap-3 px-4 py-1 bg-white/5 border border-white/10 text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-accent animate-pulse"></span>
                        Unified Revenue Engine
                    </div>
                </FadeIn>
                
                <FadeIn delay={200}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight max-w-6xl">
                        Streamline Marketing.<br/>
                        <span className="text-accent">Optimize Sales.</span>
                    </h1>
                </FadeIn>
                
                <FadeIn delay={300}>
                    <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                         Unlock the full potential of your Salesforce and Marketing Cloud platforms with industry leading optimization.
                    </p>
                </FadeIn>
                
                <FadeIn delay={400}>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <a href="#demo" className="group bg-accent text-primary text-xs font-bold uppercase tracking-widest px-10 py-5 hover:bg-white transition-all flex items-center gap-3">
                            Book a Demo
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center gap-4 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Check className="w-3 h-3 text-accent" /> No New Apps</span>
                            <span className="h-3 w-px bg-white/20"></span>
                            <span className="flex items-center gap-2"><Check className="w-3 h-3 text-accent" /> Always-On Agility</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* Tech Stack Marquee (Data Stream Style) */}
      <div className="py-6 bg-white border-b border-gray-200 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center opacity-30 grayscale gap-12 overflow-x-auto scrollbar-hide">
                {LOGOS.map((logo) => (
                    <span key={logo} className="text-xl font-bold font-mono whitespace-nowrap tracking-tighter hover:opacity-100 hover:text-primary transition-opacity cursor-default">{logo}</span>
                ))}
            </div>
        </div>
      </div>

       {/* Value Proposition Section (Repurposed Chaos Layout) */}
       <div className="grid lg:grid-cols-2 gap-0 border-b border-gray-200">
        <div className="py-24 px-6 lg:px-16 bg-white order-2 lg:order-1 border-r border-gray-200">
            <FadeIn direction="right">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] font-bold uppercase tracking-wider">
                Subscription Model
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary mt-8 mb-8">
                {HOME_VALUE_PROP_DATA.title}
            </h2>
            <p className="text-xl text-textMain leading-relaxed font-normal max-w-xl">
                {HOME_VALUE_PROP_DATA.subtitle}
            </p>
            
            <div className="mt-12 space-y-0 border-t border-gray-200">
                {HOME_VALUE_PROP_DATA.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-6 py-6 border-b border-gray-200 group hover:bg-gray-50 transition-colors px-4 -mx-4">
                    <Check className="w-5 h-5 text-accent" />
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
                <div className="p-0 bg-white border border-gray-200 shadow-sm">
                <div className="bg-primary p-4 border-b border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Rocket className="w-4 h-4 text-accent" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white">Active Plan</span>
                    </div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between mb-2">
                        <span className="font-mono text-[10px] text-gray-400 uppercase">Status</span>
                        <span className="font-mono text-[10px] text-accent font-bold uppercase">All Systems Go</span>
                    </div>
                    <div className="h-1 w-full bg-gray-100 mb-4">
                        <div className="h-full bg-accent w-full"></div>
                    </div>
                    <p className="font-mono text-xs text-primary font-bold uppercase">Marketing & Sales: Integrated</p>
                </div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
                <FadeIn delay={400} direction="up">
                    <div className="p-6 bg-white border border-gray-200 h-full flex flex-col justify-between hover:border-accent transition-colors">
                    <Brain className="text-primary w-8 h-8 mb-4" />
                    <div>
                        <div className="font-mono text-[10px] text-textMain uppercase tracking-widest mb-1">Expertise</div>
                        <div className="text-lg font-bold text-primary">On Demand</div>
                    </div>
                    </div>
                </FadeIn>
                
                <FadeIn delay={600} direction="up">
                    <div className="p-6 bg-white border border-gray-200 h-full flex flex-col justify-between hover:border-accent transition-colors">
                    <Clock className="text-primary w-8 h-8 mb-4" />
                    <div>
                        <div className="font-mono text-[10px] text-textMain uppercase tracking-widest mb-1">Execution</div>
                        <div className="text-lg font-bold text-primary">24 Hours</div>
                    </div>
                    </div>
                </FadeIn>
            </div>
            </div>
        </div>
        </div>

      {/* Infinite Keywords (Marquee) */}
      <div className="py-3 bg-primary border-y border-white/10 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
            {KEYWORDS.map((word, i) => (
                <span key={i} className="text-accent/40 font-mono text-[10px] uppercase tracking-widest mx-6">
                    {word} <span className="text-white/10 mx-2">//</span>
                </span>
            ))}
             {KEYWORDS.map((word, i) => (
                <span key={`dup-${i}`} className="text-accent/40 font-mono text-[10px] uppercase tracking-widest mx-6">
                    {word} <span className="text-white/10 mx-2">//</span>
                </span>
            ))}
        </div>
      </div>

      {/* Interactive System Section (Mirroring Case Study but with Services) */}
      <div className="relative min-h-[800px] flex items-center justify-center bg-bgLight py-24 px-6 overflow-hidden border-b border-gray-200">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ccc_1px,transparent_1px),linear-gradient(to_bottom,#ccc_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Main Grid: Overview */}
        <div className={`relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full max-w-7xl transition-all duration-500 ease-in-out ${selectedLayerId ? 'opacity-0 -translate-x-12 pointer-events-none absolute' : 'opacity-100 translate-x-0'}`}>
            <div className="relative h-full flex flex-col justify-center space-y-12">
            <FadeIn>
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary text-primary font-mono text-[10px] font-bold uppercase tracking-widest">
                    The Solution
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
                    Core Platform <br /> Capabilities
                    </h2>
                    <p className="text-textMain text-xl font-normal leading-relaxed max-w-md">
                    Streamline your marketing processes, enhance sales team effectiveness, and create seamless handoffs.
                    </p>
                </div>
            </FadeIn>

            <div className="space-y-0 border-t border-gray-300">
                {HOME_SERVICES_LAYERS.map((layer, index) => (
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
                {HOME_SERVICES_LAYERS.map((layer, i) => {
                const isHovered = hoveredLayer === layer.id;
                const zIndex = 3 - i; 
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
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">Capability 0{i+1}</span>
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

                        <div className={`absolute bottom-6 right-6 bg-accent text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                            Explore <ArrowRight className="w-3 h-3" />
                        </div>
                    </div>
                    <div className="h-1 w-full bg-primary"></div>
                    </div>
                );
                })}
            </div>
            </div>
        </div>

        {/* Detail View (Slide In) */}
        <div className={`absolute inset-0 z-50 bg-bgLight transition-all duration-500 ease-in-out flex items-center justify-center p-6 ${selectedLayerId ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
            {selectedLayer && (
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start gap-12 lg:gap-24 h-full overflow-y-auto lg:overflow-visible">
                {/* Left Content */}
                <div className="w-full lg:w-3/5 space-y-10 pt-20 lg:pt-0">
                <div className="space-y-6">
                    <button 
                    onClick={() => setSelectedLayerId(null)}
                    className="group flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-textMain hover:text-accent transition-colors"
                    >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Overview</span>
                    </button>
                    <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-primary">{selectedLayer.title} Components</h3>
                    <div className="h-1 w-20 bg-accent"></div>
                    <p className="text-xl text-textMain font-light">{selectedLayer.description}</p>
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

                {/* Right Card */}
                <div className="w-full lg:w-2/5 flex flex-col items-center pt-20">
                <div className="w-full bg-white border border-gray-200 shadow-xl">
                    <div className="p-10 space-y-10">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                        <div className="text-accent">
                            {React.cloneElement(ICON_MAP[selectedLayer.icon] as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
                        </div>
                        <div className="font-mono text-[10px] font-bold text-white bg-accent px-3 py-1 uppercase tracking-widest">
                            Service Module
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-primary uppercase tracking-tight">{selectedLayer.title}</h4>
                        <p className="text-md text-textMain leading-relaxed">{selectedLayer.description}</p>
                    </div>

                    <div className="space-y-4 pt-4">
                        <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">Included Deliverables</div>
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
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Available Now</span>
                    <Settings className="w-4 h-4 opacity-50" />
                    </div>
                </div>

                <button 
                    onClick={() => setSelectedLayerId(null)}
                    className="mt-12 flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase text-[11px] tracking-widest hover:bg-accent transition-colors"
                >
                    <span>Close Module</span>
                    <X className="w-4 h-4" />
                </button>
                </div>
            </div>
            )}
        </div>
      </div>

      {/* Additional Features (Mapped to Proactive Projects & Integrations) */}
      <section className="py-32 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
             <FadeIn>
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">Additional Capabilities</h2>
                    
                    <div className="flex border-b border-gray-200">
                        <button 
                            onClick={() => setActiveTab('projects')}
                            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-b-2 ${activeTab === 'projects' ? 'border-accent text-primary' : 'border-transparent text-gray-400 hover:text-primary'}`}
                        >
                            Proactive Projects
                        </button>
                        <button 
                            onClick={() => setActiveTab('integrations')}
                            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-b-2 ${activeTab === 'integrations' ? 'border-accent text-primary' : 'border-transparent text-gray-400 hover:text-primary'}`}
                        >
                            Integrations
                        </button>
                    </div>
                </div>
             </FadeIn>
             
             <div className="min-h-[300px]">
                {activeTab === 'projects' && (
                    <FadeIn key="projects" className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-bgLight p-12 border border-gray-200 flex flex-col justify-center">
                            <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-8 text-accent">
                                <Rocket className="w-6 h-6 fill-current" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-6 leading-tight">Automated <br/>Innovation</h3>
                            <div className="h-1 w-12 bg-accent mb-6"></div>
                            <p className="text-lg text-textMain leading-relaxed">{HOME_ADDITIONAL_FEATURES.projects.description}</p>
                        </div>
                        <div className="flex items-center justify-center bg-white border border-gray-200 p-8">
                             <div className="text-center">
                                 <h4 className="font-bold text-primary text-2xl mb-4">Monthly Builds</h4>
                                 <p className="text-textMain/70">Custom projects based on industry trends.</p>
                             </div>
                        </div>
                    </FadeIn>
                )}

                {activeTab === 'integrations' && (
                    <FadeIn key="integrations" className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-primary p-12 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-8 text-accent">
                                <Puzzle className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Connected <br/>Ecosystem</h3>
                            <div className="h-1 w-12 bg-accent mb-6"></div>
                            <p className="text-lg text-gray-300 leading-relaxed">{HOME_ADDITIONAL_FEATURES.integrations.description}</p>
                        </div>
                        <div className="flex items-center justify-center bg-white border border-gray-200 p-8">
                             <div className="grid grid-cols-2 gap-4 opacity-50">
                                 {['Salesforce', 'Pardot', 'Slack', 'Zoom', 'G-Suite', 'Outreach'].map(t => (
                                     <div key={t} className="px-4 py-2 bg-gray-100 font-mono text-xs uppercase tracking-widest text-center">{t}</div>
                                 ))}
                             </div>
                        </div>
                    </FadeIn>
                )}
             </div>
        </div>
    </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2 pr-12">
                     <img src={ASSETS.logo} alt="SalesLabX" className="h-6 brightness-0 invert mb-8 opacity-60" />
                     <p className="text-white/60 mb-8 max-w-sm text-lg font-light leading-relaxed">
                        Streamline Marketing. Optimize Sales. Grow Revenue. <br/>The Unified Revenue Engine for modern enterprises.
                     </p>
                     <div className="space-y-3 font-mono text-xs text-white/40 uppercase tracking-wide">
                         <p>Austin, Texas • Global Scale</p>
                         <p>1 (877) 278-8759</p>
                     </div>
                </div>
                <div>
                    <h5 className="font-mono text-[10px] font-bold text-accent mb-6 uppercase tracking-widest">Platform</h5>
                    <ul className="space-y-4 text-sm text-white/60">
                        <li><a href="#" className="hover:text-white transition-colors">Account Engagement</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Salesforce</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Plans</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-mono text-[10px] font-bold text-accent mb-6 uppercase tracking-widest">Company</h5>
                    <ul className="space-y-4 text-sm text-white/60">
                        <li><Link to="/" className="hover:text-white transition-colors">Case Study</Link></li>
                        <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">© 2025 SalesLabX. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="font-mono text-[10px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Privacy</a>
                    <a href="#" className="font-mono text-[10px] text-white/20 hover:text-white uppercase tracking-widest transition-colors">Terms</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;