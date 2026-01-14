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
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('e') || urlParams.get('email');
    const diagnosticUrl = email
      ? `https://2min.slxbox.com?e=${encodeURIComponent(email)}`
      : 'https://2min.slxbox.com?e=';
    window.open(diagnosticUrl, '_blank', 'noopener,noreferrer');
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
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            The Revenue Engine<br />
            <span className="text-accent">Diagnostic</span>
          </h2>

          <p className="text-white/90 text-xl leading-relaxed max-w-xl mx-auto font-light">
            Is your marketing automation connected to revenue?
          </p>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            Four questions. Two minutes.
          </p>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            You'll know exactly where the gaps are, and what's worth fixing first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleCTA}
              className="bg-accent text-white font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-accent/90 transition-all hover:scale-105 shadow-lg hover:shadow-accent/50 w-full sm:w-auto"
            >
              Take the Diagnostic
            </button>
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors w-full sm:w-auto"
            >
              Not right now
            </button>
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
