import React, { useRef } from 'react';
import { CheckCircle2, ShieldCheck, Zap, Scale, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const differentiators = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "AI-first Engineering",
    desc: "We don't tack AI on. We build it into the core architecture."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Production-Ready",
    desc: "No fragile prototypes. We ship resilient, tested code."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Secure Design",
    desc: "Security is baked in from the first line of code."
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Scalability Planning",
    desc: "Systems engineered to handle growth without breaking."
  }
];

const WhyUs: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Header Animation
    gsap.from(".why-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        }
    });

    // Stagger Grid Items
    gsap.from(".why-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".why-grid",
            start: "top 80%",
        }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="why-us" className="py-32 bg-foreground/5 border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="why-header text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight uppercase">
              Why Mikrosell Systems?
           </h2>
           <p className="text-muted-foreground text-lg">
              Most development agencies deliver features. We deliver intelligent infrastructure. We don’t build experiments. We build systems businesses depend on.
           </p>
        </div>

        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
           {differentiators.map((item, idx) => (
              <div key={idx} className="why-item bg-background p-10 flex flex-col items-center text-center group hover:bg-foreground/5 transition-colors duration-300">
                 <div className="mb-6 text-foreground/50 group-hover:text-foreground transition-colors duration-300">
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

export default WhyUs;