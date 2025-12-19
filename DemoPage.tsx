import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import FadeIn from './components/ui/FadeIn';
import { ASSETS, LINKS } from './constants';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    platform: '',
    challenge: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-bgLight selection:bg-accent selection:text-white font-sans text-primary">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <a href={LINKS.website} target="_blank" rel="noreferrer" className="flex items-center">
            <img src={ASSETS.logo} alt="SalesLabX Logo" className="h-8 w-auto object-contain" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-none">
              From Lead to Revenue,<br/>
              <span className="text-accent">Powered by a Single Subscription</span>
            </h1>
            <p className="text-2xl text-textMain font-light leading-relaxed max-w-4xl mx-auto">
              SalesLabX transforms your Salesforce and marketing stack into a closed-loop growth engine.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-bgLight">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Your current tools capture leads.<br/>
              <span className="text-textMain/60 font-light">But are they closing revenue?</span>
            </h2>
            <p className="text-xl text-textMain font-light leading-relaxed text-center mb-8">
              SalesLabX handles everything in between—building automation, fixing handoffs, and making performance visible. We integrate inside your systems and give you full marketing, strategy, and RevOps resources under one flat subscription.
            </p>
            <p className="text-center text-primary/60 font-mono text-sm uppercase tracking-widest">
              Trusted by 100s of teams globally and managing 100M+ Records
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What You Get + Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Column - Benefits */}
            <div>
              <FadeIn>
                <h2 className="text-4xl font-bold text-primary mb-12">What You Get</h2>

                <div className="space-y-8 mb-16">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-2 rounded">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">3x faster campaign launches</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-2 rounded">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">100% Salesforce + Marketing alignment</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-2 rounded">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">No more "strategy-to-execution" gaps</h3>
                    </div>
                  </div>
                </div>

                {/* Quick Questions */}
                <div className="border-t border-gray-200 pt-12">
                  <h3 className="text-2xl font-bold text-primary mb-8">Quick Questions</h3>

                  <details className="mb-6 border-b border-gray-200 pb-6">
                    <summary className="text-lg font-medium text-primary cursor-pointer hover:text-accent transition-colors">
                      What can I expect in the demo?
                    </summary>
                    <p className="mt-4 text-textMain font-light leading-relaxed">
                      A 30-minute personalized walkthrough of how SalesLabX integrates with your existing tech stack and solves your specific execution challenges.
                    </p>
                  </details>

                  <details className="border-b border-gray-200 pb-6">
                    <summary className="text-lg font-medium text-primary cursor-pointer hover:text-accent transition-colors">
                      Who will I talk to?
                    </summary>
                    <p className="mt-4 text-textMain font-light leading-relaxed">
                      You'll meet with a SalesLabX strategist who understands your marketing automation platform and can show you exactly how we'll execute in your environment.
                    </p>
                  </details>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Form */}
            <div>
              <FadeIn>
                <div className="bg-primary p-10 border border-primary shadow-2xl">
                  <h2 className="text-3xl font-bold text-white mb-4">Get Your Custom Demo</h2>
                  <p className="text-white/60 mb-10 leading-relaxed">
                    See exactly how SalesLabX can solve your execution bottlenecks
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="firstName" className="block text-white font-medium mb-2">
                        First Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-white/20 text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Work Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-white/20 text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="platform" className="block text-white font-medium mb-2">
                        Marketing Automation Platform <span className="text-accent">*</span>
                      </label>
                      <select
                        id="platform"
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-white/20 text-primary focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="">Select platform</option>
                        <option value="marketo">Marketo</option>
                        <option value="pardot">Pardot</option>
                        <option value="hubspot">HubSpot</option>
                        <option value="eloqua">Eloqua</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="challenge" className="block text-white font-medium mb-2">
                        What's your biggest challenge? <span className="text-white/40">(Optional)</span>
                      </label>
                      <textarea
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        placeholder="e.g., Campaign launches take too long, handoffs between teams are messy..."
                        rows={4}
                        className="w-full px-4 py-3 bg-white border-2 border-white/20 text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent text-white font-bold py-4 px-8 text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-3"
                    >
                      Book My Demo <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-white/40 text-center text-sm">
                      30-minute one on one • No commitment required
                    </p>
                  </form>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
