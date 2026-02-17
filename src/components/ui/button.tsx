import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({ 
  className = '', 
  variant = 'default', 
  size = 'md', 
  children, 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-none font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background overflow-hidden";
  
  const variants = {
    // Glossy Primary Button - Updated to Neutral White Glow
    default: "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 border-t border-white/20 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none",
    
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground backdrop-blur-sm",
    
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    
    ghost: "hover:bg-accent/50 hover:text-accent-foreground",
    
    // Glass Button
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-foreground shadow-lg hover:bg-white/20 hover:border-white/40",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 py-2 px-6 text-sm",
    lg: "h-14 px-8 text-base",
    icon: "h-10 w-10",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {/* Shine effect for default buttons */}
      {variant === 'default' && (
         <span className="absolute inset-0 w-full h-full bg-glass-shine opacity-0 hover:opacity-100 transition-opacity duration-500 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></span>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};