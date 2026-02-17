import React, { useRef } from 'react';
import { Search, PenTool, GitMerge, BarChart } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const steps = [
  {
    icon: <Search size={32} strokeWidth={1.5} />,
    title: "1. DIAGNOSE",
    desc: "We identify workflow bottlenecks, inefficiencies, and automation gaps."
  },
  {
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: "2. ARCHITECT",
    desc: "We design intelligent systems with AI embedded at the right layer."
  },
  {
    icon: <GitMerge size={32} strokeWidth={1.5} />,
    title: "3. INTEGRATE",
    desc: "We implement AI using structured prompts, validation, guardrails, and monitoring."
  },
  {
    icon: <BarChart size={32} strokeWidth={1.5} />,
    title: "4. OPTIMIZE",
    desc: "We measure performance, cost efficiency, and operational impact — then refine."
  }
];

const Features: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate Header
    gsap.from(".features-header", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        }
    });

    // Stagger Grid Items
    gsap.from(".feature-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
        }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="approach" className="py-32 bg-background border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="features-header flex flex-col md:flex-row justify-between items-end mb-20">
           <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-none">
               OUR APPROACH
             </h2>
           </div>
           <div className="text-right max-w-xs">
             <p className="text-muted-foreground text-sm">
               Technology is the tool. Business performance is the outcome.
             </p>
           </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="feature-item group p-10 border-b border-r border-border hover:bg-foreground/5 transition-colors duration-500 min-h-[350px] flex flex-col justify-start items-start text-left"
            >
               <div className="mb-8 text-foreground group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                 {item.icon}
               </div>
               <h3 className="text-lg font-bold text-foreground tracking-widest uppercase mb-4">
                 {item.title}
               </h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 {item.desc}
               </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;