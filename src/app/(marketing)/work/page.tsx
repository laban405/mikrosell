import {
  AnimationContainer,
  MaxWidthWrapper,
} from "@/components";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  CarIcon,
  CheckIcon,
  FileTextIcon,
  ShoppingCartIcon,
  GlobeIcon,
  BuildingIcon,
  GraduationCapIcon,
  HeartIcon,
  FactoryIcon,
  StoreIcon,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";

const WorkPage = () => {
  const projects = [
    {
      title: "The GrandWash – Carwash POS System",
      icon: CarIcon,
      description: "A smart POS built for Kenya's most modern tunnel carwash.",
      results: [
        "40% increase in customer throughput",
        "Zero billing errors",
        "Loyalty adoption up 65%",
      ],
      testimonial: {
        quote: "This system transformed our operations.",
        author: "Management",
      },
    },
    {
      title: "Zuri Household – E-commerce Platform",
      icon: ShoppingCartIcon,
      description: "A scalable marketplace engineered for East African shoppers.",
      results: [
        "300% online sales growth",
        "M-Pesa + Visa + Mastercard integrated",
        "Mobile-first design",
      ],
      testimonial: {
        quote: "A game-changer for our business.",
        author: "CEO, Zuri Household",
      },
    },
    {
      title: "Vessel Global Systems – Enterprise Solutions",
      icon: GlobeIcon,
      description: "Enterprise-grade, globally scalable systems designed for high-availability operations.",
      results: [
        "High-availability architecture",
        "Global scalability",
        "Enterprise-grade security",
      ],
      testimonial: {
        quote: "Exceptional technical expertise and scalability.",
        author: "Technical Director",
      },
    },
    {
      title: "Next.js SEO-Optimized Blog Platform",
      icon: FileTextIcon,
      description: "A lightning-fast, search-focused content engine.",
      results: [
        "Ranks #1 for multiple target keywords",
        "450% organic traffic growth",
        "Core Web Vitals optimized",
      ],
      testimonial: {
        quote: "Lead generation skyrocketed.",
        author: "Marketing Director",
      },
    },
  ];

  const industries = [
    {
      title: "Retail & E-commerce",
      icon: StoreIcon,
      description: "Complete e-commerce solutions with payment integration and inventory management.",
    },
    {
      title: "Manufacturing & Logistics",
      icon: FactoryIcon,
      description: "ERP systems, supply chain management, and operational automation.",
    },
    {
      title: "Hospitality & Carwash",
      icon: CarIcon,
      description: "POS systems, booking platforms, and customer management solutions.",
    },
    {
      title: "Healthcare",
      icon: HeartIcon,
      description: "Patient management systems, telemedicine platforms, and health records.",
    },
    {
      title: "Education",
      icon: GraduationCapIcon,
      description: "Learning management systems, student portals, and educational platforms.",
    },
    {
      title: "Agriculture (AgriTech)",
      icon: SparklesIcon,
      description: "IoT solutions, farm management systems, and supply chain tracking.",
    },
    {
      title: "Enterprise & Government",
      icon: BuildingIcon,
      description: "Large-scale systems, data management, and enterprise automation.",
    },
  ];

  const whyDelivers = [
    {
      title: "User-focused design",
      description: "Every solution is built with the end user in mind, ensuring intuitive interfaces and seamless experiences.",
    },
    {
      title: "Scalable backend architecture",
      description: "Our systems are designed to grow with your business, handling increased load without performance degradation.",
    },
    {
      title: "Detailed QA and performance optimization",
      description: "Rigorous testing and optimization ensure reliability, speed, and exceptional user experience.",
    },
    {
      title: "SEO built into the development pipeline",
      description: "Search engine optimization is integrated from day one, not added as an afterthought.",
    },
  ];

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Header */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center py-20">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <MagicBadge title="Portfolio" />
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl !leading-[1.15] w-full font-heading">
              Featured Projects
            </h1>
            <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
              Real solutions for real businesses. See how we&apos;ve transformed operations, boosted efficiency, and driven growth.
            </p>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Featured Projects */}
      <MaxWidthWrapper className="py-10">
        <div className="space-y-12">
          {projects.map((project, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <MagicCard className="md:py-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <project.icon className="w-16 h-16 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium text-foreground mb-3">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                      <p className="text-sm italic text-muted-foreground mb-1">
                        &quot;{project.testimonial.quote}&quot;
                      </p>
                      <p className="text-xs text-muted-foreground">
                        — {project.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Industries We Serve */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Industries" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Industries We Serve
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              From retail to healthcare, we deliver solutions across diverse sectors.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-8">
          {industries.map((industry, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <industry.icon
                    strokeWidth={1.5}
                    className="w-10 h-10 text-foreground mb-4"
                  />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Why Our Work Delivers */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Quality" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Why Our Work Delivers
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Every project is built with excellence, scalability, and performance in mind.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8">
          {whyDelivers.map((item, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <CheckIcon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* CTA */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center justify-center w-full py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-center text-3xl md:text-4xl font-medium font-heading text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-center text-muted-foreground mb-6 max-w-lg">
              Let&apos;s discuss how we can bring your vision to life with world-class engineering.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default WorkPage;

