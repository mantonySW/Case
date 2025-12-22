import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ASSETS, LINKS } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-sm border-gray-200 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-6">
            <a href="https://www.saleslabx.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src={ASSETS.logo} alt="SalesLabX Logo" className="h-6 md:h-8 w-auto object-contain" />
            </a>
            <div className={`h-6 w-px ${scrolled ? 'bg-gray-300' : 'bg-gray-300'}`}></div>
            <img src={ASSETS.spotifyLogo} alt="Spotify" className="h-6 md:h-8 w-auto object-contain opacity-90" />
        </div>
        
        {scrolled && (
            <a href="https://article.slxbox.com/demo" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-accent text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-none hover:bg-primary hover:text-white transition-colors">
            Get A Demo
            </a>
        )}
      </div>
    </nav>
  );
};

export default Header;