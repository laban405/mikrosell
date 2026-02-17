import React from 'react';
import { Logo } from './ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background relative pt-20 pb-10 border-t border-border transition-colors duration-300">
      
      {/* Footer Links */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-[11px] uppercase tracking-widest font-medium">
           
           <div className="space-y-6">
              <div className="mb-6">
                <Logo />
              </div>
              <p className="text-muted-foreground normal-case text-sm leading-relaxed max-w-xs">
                Engineering intelligent systems built for long-term advantage.
              </p>
           </div>

           <div className="flex flex-col space-y-4 text-right md:text-left">
              <span className="text-muted-foreground mb-4 block">Navigation</span>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">Approach</a>
              <a href="#industries" className="text-muted-foreground hover:text-foreground transition-colors">Industries</a>
              <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">Why Us</a>
           </div>

           <div className="flex flex-col space-y-4 text-right md:text-left">
             <span className="text-muted-foreground mb-4 block">Contact</span>
             <p className="text-muted-foreground normal-case">hello@mikrosell.systems</p>
             <p className="text-muted-foreground normal-case">San Francisco, CA</p>
           </div>

           <div className="flex flex-col space-y-4 text-right md:text-left">
             <span className="text-muted-foreground mb-4 block">Social</span>
             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
           </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mt-20 pt-10 border-t border-border">
           <div className="flex gap-4 mb-4 md:mb-0">
             {/* Social Icons Placeholder */}
           </div>
           
           <div className="text-[10px] text-muted-foreground flex gap-8">
              <span>© 2024 — MIKROSELL SYSTEMS<br/>All Rights reserved</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;