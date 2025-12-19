import React from 'react';
import { COLORS } from '../../constants';

// Removed CirclePattern and WaveAccent for cleaner Enterprise look

export const GridPattern: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute top-0 left-0 ${className}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E0E0E0" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

// Placeholder to prevent breakages if other components import them, but render nothing
export const CirclePattern: React.FC<{ className?: string }> = () => null;
export const WaveAccent: React.FC<{ className?: string }> = () => null;