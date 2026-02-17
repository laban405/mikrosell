import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".about-image", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".about-content", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-16 bg-background border-t border-border transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="about-image lg:w-1/2 relative w-full">
            <div className="relative w-full aspect-[2/1] lg:aspect-[16/9] overflow-hidden border border-border group">
              {/* Overlay for monochrome effect */}
              <div className="absolute inset-0 bg-foreground/5 z-10 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                alt="Mikrosell Systems Office" 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Decorative Tech Lines */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-foreground/30 z-20"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-foreground/30 z-20"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="about-content lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
               <div className="h-[1px] w-8 bg-foreground"></div>
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Est. 2023</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight uppercase">
              About Mikrosell<br/>Systems
            </h2>
            
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Mikrosell Systems was founded in 2023 with a clear mission: <strong className="text-foreground">build software that reduces effort.</strong>
              </p>
              <p>
                We design intelligent systems that eliminate manual work, streamline operations, and give businesses a real technological advantage.
              </p>
              <p>
                Our expertise spans backend architecture, modern frontend development, mobile applications, AI automation, and scalable SaaS platforms.
              </p>
              <p className="border-l-2 border-foreground pl-4 italic text-foreground mt-4 text-sm">
                We don’t chase trends. We build systems that create lasting advantage.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;