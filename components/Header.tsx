import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* Local Reset for Header */
        #slx-header {
          font-family: 'Roboto', sans-serif;
          line-height: 1.5;
        }
        #slx-header, #slx-header * {
          box-sizing: border-box;
        }
        #slx-header h1, #slx-header h2, #slx-header h3, #slx-header h4, #slx-header h5, #slx-header h6, #slx-header p {
            margin: 0;
            padding: 0;
            font-weight: inherit;
            font-size: inherit;
        }
        #slx-header a {
            text-decoration: none !important;
            box-shadow: none !important;
            border: none !important;
        }

        /* Navigation Container */
        .slx-nav-base {
          background-color: rgba(255, 255, 255, 0.98);
          border-bottom: 1px solid #e5e7eb;
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
        }

        .slx-nav-scrolled {
          padding-top: 1rem;
          padding-bottom: 1rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
        }

        .slx-nav-link {
          color: #001c39;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.2s;
        }
        .slx-nav-link:hover { color: #1cafec; }

        .slx-logo { filter: none; opacity: 1; }

        /* Mega Menu */
        .mega-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: all 0.3s ease;
        }
        .group:hover .mega-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      `}</style>

      <nav
        id="slx-header"
        className={`fixed top-0 left-0 w-full z-[99999] slx-nav-base ${scrolled ? 'slx-nav-scrolled' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
          {/* Logo */}
          <a href="https://usecases.saleslabx.com/#/" className="flex items-center group no-underline">
            <img
              src="https://saleslabx.wpenginepowered.com/wp-content/uploads/2021/04/SLX-logo.png"
              alt="SalesLabX"
              className="!h-6 md:!h-8 w-auto object-contain slx-logo max-w-none m-0 p-0 border-none"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="https://saleslabx.com/marketing-cloud/" className="slx-nav-link hover:text-[#1cafec] transition-colors font-sans no-underline">
              Marketing Cloud/Pardot
            </a>
            <a href="https://saleslabx.com/attribution-reporting-lp/" className="slx-nav-link hover:text-[#1cafec] transition-colors font-sans no-underline">
              Salesforce
            </a>
            <a href="https://saleslabx.com/Pricing" className="slx-nav-link hover:text-[#1cafec] transition-colors font-sans no-underline">
              Plans
            </a>

            {/* Use Cases Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="slx-nav-link flex items-center gap-1 hover:text-[#1cafec] transition-colors font-sans py-2 bg-transparent border-none cursor-pointer"
              >
                Use Cases
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Mega Menu */}
              <div className="mega-menu absolute top-full -right-32 pt-4 w-[900px]">
                <div className="bg-white shadow-2xl border border-gray-100 rounded-[15px] p-8 relative text-left">
                  {/* Pointer Arrow */}
                  <div className="absolute -top-1.5 right-[165px] w-3 h-3 bg-white border-t border-l border-gray-100 transform rotate-45"></div>

                  <div className="grid grid-cols-3 gap-8">
                    {/* Strategy & Alignment */}
                    <div className="space-y-6">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2 leading-tight">
                        Strategy & Alignment
                      </div>
                      <div className="space-y-6">
                        <a href="https://usecases.saleslabx.com/#/marketing-sales-alignment" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Marketing → Sales Alignment
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Unify definitions, stages, and signals so marketing and sales operate as one revenue system.
                            </p>
                          </div>
                        </a>

                        <a href="https://usecases.saleslabx.com/#/go-to-market-system-design" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Go-To-Market System Design
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Architect the full GTM motion—people, process, data, and tech—around revenue outcomes.
                            </p>
                          </div>
                        </a>

                        <a href="https://usecases.saleslabx.com/#/revenue-team-enablement" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Revenue Team Enablement
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Equip marketing and sales teams with the systems, dashboards, and workflows they actually use.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Operations & Optimization */}
                    <div className="space-y-6">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2 leading-tight">
                        Operations & Optimization
                      </div>
                      <div className="space-y-6">
                        <a href="https://usecases.saleslabx.com/#/revenue-pipeline-acceleration" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Revenue Pipeline Acceleration
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Turn marketing activity into predictable, sales-ready pipeline with clean handoffs and real attribution.
                            </p>
                          </div>
                        </a>

                        <a href="https://usecases.saleslabx.com/#/lead-lifecycle-funnel-optimization" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Lead Lifecycle & Optimization
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Design and operationalize MQL, SQL, SAL, and opportunity flows that actually convert.
                            </p>
                          </div>
                        </a>

                        <a href="https://usecases.saleslabx.com/#/salesforce-pardot-operational-excellence" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Salesforce & Pardot Ops
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Fix what's broken, optimize what's working, and scale without duct tape.
                            </p>
                          </div>
                        </a>

                        <a href="https://usecases.saleslabx.com/#/scalable-event-webinar-engines" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Scalable Event Engines
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Build repeatable event and webinar systems that generate demand—not just attendance.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Data & Intelligence */}
                    <div className="space-y-6">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2 leading-tight">
                        Data & Intelligence
                      </div>
                      <div className="space-y-6">
                        <a href="https://usecases.saleslabx.com/#/campaign-attribution-roi" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Campaign Attribution & ROI
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Connect campaigns, emails, and touchpoints to pipeline and revenue—no black boxes.
                            </p>
                          </div>
                        </a>

                        <a href="https://usecases.saleslabx.com/#/data-driven-personalization" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Data-Driven Personalization
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Deliver relevant, human experiences powered by clean data and behavioral signals.
                            </p>
                          </div>
                        </a>

                        <a href="https://usecases.saleslabx.com/#/executive-revenue-intelligence" className="group/item flex items-start gap-3 no-underline">
                          <div className="mt-0.5 text-[#1cafec] opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#001c39] mb-1 group-hover/item:text-[#1cafec] transition-colors leading-tight">
                              Executive Revenue Intel
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight font-light pr-2 m-0 p-0">
                              Give leaders clear, trustworthy visibility into what's working, what's not, and why.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-8 pt-4 border-t border-gray-50 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-gray-400 leading-none">Explore the possibilities</span>
                    <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#1cafec] flex items-center gap-2 hover:text-[#001c39] transition-colors no-underline leading-none">
                      View Full Feature Index
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://saleslabx.com/resources/" className="slx-nav-link hover:text-[#1cafec] transition-colors font-sans no-underline">
              Resources
            </a>
            <a href="https://usecases.saleslabx.com/#/demo" className="bg-[#001c39] text-white text-[14px] font-medium px-6 py-3 rounded-[5px] hover:bg-[#1cafec] transition-colors border border-[#001c39] hover:border-[#1cafec] no-underline inline-block">
              Get a Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden text-[#1cafec] bg-transparent border-none cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-xl">
            <a href="https://saleslabx.com/marketing-cloud/" className="text-sm font-bold uppercase tracking-widest text-[#001c39] py-2 border-b border-gray-100 block no-underline">
              Marketing Cloud/Pardot
            </a>
            <a href="https://saleslabx.com/attribution-reporting-lp/" className="text-sm font-bold uppercase tracking-widest text-[#001c39] py-2 border-b border-gray-100 block no-underline">
              Salesforce
            </a>
            <a href="https://saleslabx.com/Pricing" className="text-sm font-bold uppercase tracking-widest text-[#001c39] py-2 border-b border-gray-100 block no-underline">
              Plans
            </a>
            <a href="https://saleslabx.com/resources/" className="text-sm font-bold uppercase tracking-widest text-[#001c39] py-2 border-b border-gray-100 block no-underline">
              Resources
            </a>
            <a href="https://usecases.saleslabx.com/#/demo" className="bg-[#001c39] text-white text-[14px] font-medium px-6 py-3 rounded-[5px] block text-center no-underline mt-4">
              Get a Demo
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
