"use client"
import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Positioning from './Positioning';
import About from './About';
import Services from './Services';
import Features from './Features';
import WhyUs from './WhyUs';
import Portfolio from './Portfolio';
import Stats from './Stats';
import Contact from './Contact';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP Plugins globally
gsap.registerPlugin(ScrollTrigger, useGSAP);

// --- Theme Context ---
type Theme = 'dark' | 'light';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Check local storage or preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen w-full flex flex-col font-sans antialiased overflow-x-hidden bg-background text-foreground selection:bg-foreground selection:text-background transition-colors duration-300">
        <Navbar />
        <main className="flex-1 w-full">
          <Hero />
          <Positioning />
          <About />
          <Services />
          <Features />
          <WhyUs />
          <Portfolio />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;