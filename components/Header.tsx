import React from 'react';
import { ASSETS, LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-700 py-4" style={{ backgroundColor: '#434243' }}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-6">
            <a href={LINKS.website} target="_blank" rel="noreferrer" className="flex items-center">
            <img src={ASSETS.logo} alt="SalesLabX Logo" className="h-6 md:h-8 w-auto object-contain" />
            </a>
            <div className="h-6 w-px bg-gray-500"></div>
            <img src={ASSETS.spotifyLogo} alt="Spotify" className="h-6 md:h-8 w-auto object-contain opacity-90" />
        </div>

        <a href="#contact" className="hidden md:inline-block bg-accent text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-none hover:bg-primary hover:text-white transition-colors">
          Get Strategy
        </a>
      </div>
    </nav>
  );
};

export default Header;