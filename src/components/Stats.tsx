import React, { useRef } from 'react';
import { Clock, TrendingDown, Zap, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Stats: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Visual Entrance
    gsap.from(".stats-visual", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
        }
    });

    // Content Entrance
    gsap.from(".stats-content", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
        }
    });
    
    // Stats Stagger
    gsap.from(".stat-box", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
        }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="results" className="py-24 border-t border-border bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Cube/Tech Visual */}
          <div className="hidden lg:flex lg:w-1/2 relative min-h-[400px] items-center justify-center">
             {/* Abstract Wireframe Cube CSS */}
             <div className="stats-visual relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                {/* Rings / Squares */}
                <div className="absolute inset-0 rounded-none border border-foreground/20 transform rotate-x-[70deg] animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-none border border-foreground/20 transform rotate-x-[70deg] rotate-y-[45deg] animate-spin-slow" style={{animationDuration: '15s'}}></div>
                <div className="absolute inset-8 rounded-none border border-foreground/20 transform rotate-x-[70deg] rotate-y-[-45deg] animate-spin-slow" style={{animationDuration: '25s'}}></div>
                
                {/* Square dot on orbit */}
                <div className="absolute w-2 h-2 bg-primary rounded-none top-1/2 left-0 animate-orbit"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl font-bold text-foreground/10 tracking-tighter animate-pulse">IMPACT</div>
                    </div>
                </div>
             </div>
          </div>

          {/* Right: Content & Grid */}
          <div className="lg:w-1/2 flex flex-col justify-center">
             
             <div className="stats-content mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  MEASURED BY<br/>IMPACT
                </h2>
                <p className="text-muted-foreground text-lg">
                   AI is not the product. Efficiency is. Every project is evaluated by tangible results.
                </p>
             </div>

            {/* Grid of Results */}
            <div className="stats-grid grid grid-cols-2 border-l border-t border-border">
               {/* Stat 1 */}
               <div className="stat-box p-8 border-r border-b border-border group hover:bg-white/5 transition-colors">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <div className="text-lg font-bold text-foreground mb-1">Time Saved</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Automating repetitive tasks</div>
               </div>
               {/* Stat 2 */}
               <div className="stat-box p-8 border-r border-b border-border group hover:bg-white/5 transition-colors">
                  <TrendingDown className="w-8 h-8 text-primary mb-4" />
                  <div className="text-lg font-bold text-foreground mb-1">Cost Reduced</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Lowering operational overhead</div>
               </div>
               {/* Stat 3 */}
               <div className="stat-box p-8 border-r border-b border-border group hover:bg-white/5 transition-colors">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <div className="text-lg font-bold text-foreground mb-1">Workflow</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Acceleration & Speed</div>
               </div>
               {/* Stat 4 */}
               <div className="stat-box p-8 border-r border-b border-border group hover:bg-white/5 transition-colors">
                  <BarChart3 className="w-8 h-8 text-primary mb-4" />
                  <div className="text-lg font-bold text-foreground mb-1">Performance</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">System Improvement</div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;