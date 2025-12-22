import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem('exitPopupShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTA = () => {
    window.open('https://revenueengine.slxbox.com/', '_blank', 'noopener,noreferrer');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-gradient-to-br from-primary via-[#002a52] to-primary max-w-2xl w-full mx-4 p-8 md:p-12 shadow-2xl border border-accent/20 animate-slideUp">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-2">
            Wait! Before You Go...
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Ready to Build Your Own<br />
            <span className="text-accent">Revenue Engine?</span>
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto">
            Get the complete Revenue Engine Playbook used by industry leaders like Spotify.
            A proven system for B2B marketing, sales, and results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleCTA}
              className="bg-accent text-white font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-accent/90 transition-all hover:scale-105 shadow-lg hover:shadow-accent/50 w-full sm:w-auto"
            >
              Get the System for $995
            </button>
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors w-full sm:w-auto"
            >
              No thanks, I'll figure it out myself
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="text-center">
              <div className="text-accent text-2xl font-bold">10M+</div>
              <div className="text-white/60 text-xs uppercase tracking-wide">Records Managed</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-2xl font-bold">90 Days</div>
              <div className="text-white/60 text-xs uppercase tracking-wide">Time to Value</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-2xl font-bold">$100M+</div>
              <div className="text-white/60 text-xs uppercase tracking-wide">Revenue Influenced</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ExitIntentPopup;
