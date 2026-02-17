import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const industries = [
  {
    id: 1,
    title: 'eCommerce & Retail',
    category: 'Automation',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2000&auto=format&fit=crop',
    size: 'lg:col-span-1 lg:row-span-2'
  },
  {
    id: 2,
    title: 'Logistics & Delivery',
    category: 'Optimization',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
    size: 'lg:col-span-2 lg:row-span-1'
  },
  {
    id: 3,
    title: 'Government',
    category: 'Public Sector',
    img: 'https://images.unsplash.com/photo-1520690214124-2405c5217036?q=80&w=2000&auto=format&fit=crop',
    size: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 4,
    title: 'FinTech & Payments',
    category: 'Security',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop',
    size: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 5,
    title: 'Enterprise Ops',
    category: 'Infrastructure',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    size: 'lg:col-span-1 lg:row-span-2'
  },
  {
    id: 6,
    title: 'AI-Native SaaS',
    category: 'Startup',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    size: 'lg:col-span-2 lg:row-span-1'
  }
];

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Select all images with class 'parallax-img'
    const images = gsap.utils.toArray('.parallax-img');

    images.forEach((img: any) => {
      gsap.fromTo(img, 
        { 
          yPercent: -10,
          scale: 1.1 // Start slightly zoomed in so edges don't show when moving
        }, 
        {
          yPercent: 10, // Move down 10%
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement, // Trigger based on the container wrapper
            start: "top bottom", // Start when top of container hits bottom of viewport
            end: "bottom top",   // End when bottom of container hits top of viewport
            scrub: true,         // Link animation to scroll bar
          }
      });
    });

    // Reveal animation for text overlays
    const overlays = gsap.utils.toArray('.portfolio-overlay');
    overlays.forEach((overlay: any) => {
        gsap.from(overlay, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: overlay.parentElement,
                start: "top 85%",
            }
        })
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="industries" className="py-32 bg-background relative border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-none">
              INDUSTRIES<br/>WE SERVE
           </h2>
           <p className="text-muted-foreground text-sm max-w-xs text-right">
              We specialize in automation-heavy, high-efficiency environments.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {industries.map((item) => (
            <div 
              key={item.id} 
              className={`relative group overflow-hidden bg-foreground/5 border border-border ${item.size}`}
            >
              {/* Image Container */}
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="parallax-img w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <span className="text-primary text-xs uppercase tracking-widest mb-2 font-bold">{item.category}</span>
                 <h3 className="text-white text-xl font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;