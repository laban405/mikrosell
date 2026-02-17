import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

import { useTheme } from './LandingPage';
import { Logo } from './ui/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Left Links (Desktop) */}
        <div className="hidden md:flex flex-col space-y-1 text-[11px] uppercase tracking-widest text-muted-foreground font-medium leading-tight">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#approach" className="hover:text-foreground transition-colors">Approach</a>
          <a href="#industries" className="hover:text-foreground transition-colors">Industries</a>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
           <Logo />
        </div>

        {/* Right Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
           {/* Links Block */}
           <div className="flex gap-10">
             <div className="flex flex-col space-y-1 text-[11px] uppercase tracking-widest text-muted-foreground font-medium leading-tight text-right">
               <a href="#why-us" className="hover:text-foreground transition-colors">Why Mikrosell</a>
               <a href="#results" className="hover:text-foreground transition-colors">Impact</a>
             </div>
             <div className="flex flex-col space-y-1 text-[11px] uppercase tracking-widest text-muted-foreground font-medium leading-tight text-right">
               <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
             </div>
           </div>
           
           {/* Theme Toggle */}
           <button 
             onClick={toggleTheme}
             className="text-muted-foreground hover:text-foreground transition-colors p-2"
             aria-label="Toggle Theme"
           >
             {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
           </button>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
          <button 
             onClick={toggleTheme}
             className="text-muted-foreground hover:text-foreground transition-colors"
           >
             {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-background border-b border-border p-8 flex flex-col items-center space-y-6 text-sm uppercase tracking-widest transition-colors duration-300 shadow-2xl">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium">About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium">Services</a>
          <a href="#approach" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium">Approach</a>
          <a href="#industries" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium">Industries</a>
          <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium">Why Us</a>
          <div className="w-10 h-[1px] bg-border my-4"></div>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;