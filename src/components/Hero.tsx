import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Entrance Animation: Stagger Text
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(".hero-text-element", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      delay: 0.2
    });

    tl.from(".hero-button", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1
    }, "-=0.5");

    // 2. Scroll Parallax for Background
    // The background moves slower than the scroll speed (yPercent) creates depth
    gsap.to(bgRef.current, {
      yPercent: 30, // Moves down 30% of its height as we scroll
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // 3. Scroll Parallax for Text (Fades out and moves up faster)
    gsap.to(textRef.current, {
      yPercent: -20,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // When top of hero hits top of viewport
        end: "60% top",   // When 60% of hero hits top of viewport
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden bg-background min-h-screen flex flex-col justify-center items-center transition-colors duration-300">
      
      {/* Starry Background (Parallax Layer) */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
         <div className="absolute w-[2px] h-[2px] bg-foreground rounded-none top-1/4 left-1/4 opacity-80 animate-pulse"></div>
         <div className="absolute w-[3px] h-[3px] bg-foreground rounded-none top-1/3 right-1/4 opacity-60 animate-pulse delay-700"></div>
         <div className="absolute w-[1px] h-[1px] bg-foreground rounded-none bottom-1/3 left-10 opacity-50"></div>
         <div className="absolute inset-0 bg-stars opacity-10"></div>
         {/* Subtle fog/glow */}
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-none pointer-events-none"></div>
      </div>

      <div ref={textRef} className="container mx-auto px-4 relative z-10 text-center will-change-transform">
        
        <h3 className="hero-text-element text-sm md:text-lg font-medium text-primary tracking-[0.3em] mb-6 uppercase">
          AI-Driven Software Engineering
        </h3>
        
        <h1 className="hero-text-element text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter leading-[1.1] text-glow mb-8 max-w-6xl mx-auto">
          AMBITIOUS<br />BUSINESSES
        </h1>

        <div className="hero-text-element max-w-xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 relative">
          <p>
            We design and build intelligent software systems that automate operations, reduce cost, and unlock growth.
          </p>
          <p className="mt-4 text-sm opacity-80">
            From AI integration to scalable SaaS platforms, we engineer systems businesses can rely on.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="hero-button">
            <Button size="lg" className="min-w-[200px] uppercase tracking-widest text-xs font-bold">
              Start a Project
            </Button>
          </div>
          <div className="hero-button">
            <Button variant="outline" size="lg" className="min-w-[200px] uppercase tracking-widest text-xs font-bold">
              Book a Strategy Call
            </Button>
          </div>
        </div>

        {/* Floating Square Button - Parallaxed slightly differently via CSS animation but we leave it */}
        <div className="absolute right-[5%] top-[25%] md:right-[10%] md:top-[35%] animate-float hidden xl:block opacity-0 hero-button">
           <a href="#contact" className="w-24 h-24 rounded-none bg-foreground text-background font-bold text-[10px] uppercase tracking-widest flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-center leading-tight">
             Let's<br/>Talk
           </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hero-button">
           <ArrowDown className="text-muted-foreground w-6 h-6" />
        </div>

      </div>
    </section>
  );
};

export default Hero;