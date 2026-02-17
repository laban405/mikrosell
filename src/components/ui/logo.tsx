import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* CSS-only Logo: Dotted square with solid inner square */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Dotted Border */}
        <div className="absolute inset-0 border-2 border-dotted border-primary rounded-none opacity-80"></div>
        {/* Inner Solid Square */}
        <div className="w-3 h-3 bg-primary rounded-none"></div>
      </div>
      <span className="text-lg font-bold tracking-tight uppercase">Mikrosell Systems</span>
    </div>
  );
};