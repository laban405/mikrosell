import React, { useState, useRef } from "react";
import {
  ArrowRight,
  Cpu,
  Layers,
  Server,
  Smartphone,
  Globe,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const services = [
  {
    id: "01",
    title: "AI INTEGRATION & AUTOMATION",
    desc: "We integrate AI into real business systems — not as a gimmick, but as operational infrastructure. Includes LLM-powered workflow automation, RAG systems, AI agents, and intelligent document processing to reduce manual work.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: "02",
    title: "CUSTOM AI-FIRST SOFTWARE",
    desc: "We build scalable, high-performance systems designed for growth. AI-powered web apps, intelligent mobile apps, multi-tenant SaaS platforms, and enterprise dashboards. Every solution is engineered for performance and AI-readiness.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    id: "03",
    title: "BACKEND & SYSTEMS ARCHITECTURE",
    desc: "AI without strong architecture fails in production. We design event-driven systems, async processing pipelines, queue-based job systems, and secure cloud deployments. We build software that performs under real-world pressure.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop",
    icon: <Server className="w-6 h-6" />,
  },
  {
    id: "04",
    title: "MOBILE APPLICATION DEVELOPMENT",
    desc: "We create intuitive native and cross-platform mobile apps that deliver smooth experiences on iOS and Android. Each app is designed for scalability, reliability, and AI-readiness.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    id: "05",
    title: "WEB APPLICATION DEVELOPMENT",
    desc: "We deliver high-performance web applications using modern frameworks and cloud architectures. Our web apps are secure, scalable, and built to integrate AI functionality when needed.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    icon: <Globe className="w-6 h-6" />,
  },
];

const Services: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string>(services[0].image);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.from(".services-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Image Entrance
      gsap.from(".services-image", {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // List Stagger
      gsap.from(".service-item", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-32 bg-background relative border-t border-border transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="services-header grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-none">
              WHAT WE
              <br />
              BUILD
            </h2>
          </div>
          <div className="lg:col-span-6 flex justify-start lg:justify-end items-end">
            <p className="text-muted-foreground text-lg max-w-md lg:text-right">
              We engineer intelligent systems designed for automation,
              scalability, and long-term efficiency.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          {/* Right Column: Image (Visible on all screens now) */}
          {/* Order 1 on mobile (top), Order 2 on desktop (right) */}
          <div className="services-image lg:w-1/2 order-1 lg:order-2">
            <div className="sticky top-32 w-full aspect-video lg:aspect-[4/5] border border-border bg-foreground/5 p-2">
              <div className="relative w-full h-full overflow-hidden bg-black">
                {/* Background Grid */}
                <div className="absolute inset-0 z-10 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Main Image */}
                <img
                  src={activeImage}
                  alt="Service Visualization"
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 ease-in-out scale-100"
                  key={activeImage}
                />

                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-foreground/10 mix-blend-overlay z-10"></div>

                {/* UI Elements on top of image */}
                <div className="absolute bottom-8 left-8 z-20">
                  <div className="text-white text-xs font-mono uppercase tracking-widest mb-1">
                    System Status
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-none animate-pulse"></div>
                    <span className="text-white font-bold tracking-widest">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-white/30 z-20"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/30 z-20"></div>
              </div>
            </div>
          </div>

          {/* Left Column: Services List */}
          {/* Order 2 on mobile (bottom), Order 1 on desktop (left) */}
          <div className="services-list lg:w-1/2 flex flex-col order-2 lg:order-1">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item group border-t border-border py-12 flex flex-col items-start cursor-pointer hover:bg-foreground/5 transition-colors duration-300 px-4 -mx-4 lg:px-0 lg:mx-0"
                onMouseEnter={() => setActiveImage(service.image)}
                onClick={() => setActiveImage(service.image)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-bold tracking-widest text-primary border border-primary/20 px-2 py-1">
                    {service.id}
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {service.icon}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-300 uppercase">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed mb-8 group-hover:text-foreground/80 transition-colors">
                  {service.desc}
                </p>

                {/* <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                       <span>Explore Solution</span>
                       <ArrowRight className="w-4 h-4" />
                    </div> */}
              </div>
            ))}
            <div className="border-t border-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
