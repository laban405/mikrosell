import {
  AnimationContainer,
  MaxWidthWrapper,
} from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { currentUser } from "@clerk/nextjs/server";
import {
  ArrowRightIcon,
  CarIcon,
  CheckIcon,
  FileTextIcon,
  ShoppingCartIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const user = await currentUser();

  const services = [
    {
      title: "Business Software for SMEs",
      description: "ERP | CRM | POS | HRIS | Inventory | Finance Systems",
      detail: "Built to automate your workflows and scale your operations with precision.",
      icon: SparklesIcon,
    },
    {
      title: "Custom Software Development",
      description: "Mobile apps, web apps, SaaS platforms, APIs, and enterprise systems",
      detail: "Crafted to deliver speed, security, and seamless user experience.",
      icon: ZapIcon,
    },
    {
      title: "AI & Machine Learning",
      description: "Predictive analytics, chatbots, computer vision, automation tools",
      detail: "Intelligent business systems that learn and adapt.",
      icon: SparklesIcon,
    },
    {
      title: "IoT Solutions",
      description: "Smart sensors, remote monitoring, industrial IoT, agriculture tech",
      detail: "Connected ecosystems for the modern business.",
      icon: ZapIcon,
    },
    {
      title: "SEO & Digital Optimization",
      description: "Technical SEO, content optimization, local SEO, Core Web Vitals",
      detail: "Performance tuning and analytics for maximum visibility.",
      icon: FileTextIcon,
    },
  ];

  const benefits = [
    {
      title: "Cost-Effective Excellence",
      description: "Delivering world-class engineering—at rates up to 60% lower than international agencies.",
    },
    {
      title: "Top 1% Quality Engineering",
      description: "International coding standards, rigorous QA, 99.9% uptime, and 24/7 support.",
    },
    {
      title: "Local Expertise + Global Best Practices",
      description: "Solutions optimized for East African ecosystems with worldwide scalability.",
    },
    {
      title: "40% Faster Delivery",
      description: "Agile processes and a senior-first team ensure rapid deployment without compromising quality.",
    },
  ];

  const products = [
    {
      title: "Mikrosell Carwash POS",
      icon: CarIcon,
      description: "Built for modern car wash businesses. Includes real-time tracking, mobile payments, loyalty programs, and multi-branch control.",
    },
    {
      title: "Next.js SEO Blog Platform",
      icon: FileTextIcon,
      description: "Core Web Vitals optimized, schema automation, blazing speed, and unbeatable search rankings.",
    },
    {
      title: "Zuri Household E-commerce Platform",
      icon: ShoppingCartIcon,
      description: "Mobile-first marketplace with full payment integration (M-Pesa, Visa, Mastercard), real-time inventory, and seamless vendor management.",
    },
  ];

  const socialProof = [
    { metric: "200+", label: "SMEs transformed across Kenya, Uganda, and Tanzania" },
    { metric: "98%", label: "Client retention rate" },
    { metric: "150%", label: "Average ROI in 18 months" },
  ];

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Hero Section */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <MagicBadge title="Mikrosell Systems" />
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
              Transforming East Africa&apos;s Digital Landscape Through{" "}
              <span className="text-transparent bg-gradient-to-r from-mlemon to-msecondary bg-clip-text inline-bloc">
                Innovation
              </span>
            </h1>
            <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
              Empowering SMEs with world-class software, AI, IoT, and SEO solutions—built for speed, scale, and real business impact.
            </p>
            <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50 flex-wrap">
              <Button asChild size="lg">
                <Link href="/contact" className="flex items-center">
                  Get a Free Consultation
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work" className="flex items-center">
                  Explore Our Work
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimationContainer>

          <AnimationContainer
            delay={0.2}
            className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
          >
            <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <BorderBeam size={250} duration={12} delay={9} />
              <div className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border p-12 min-h-[400px] flex items-center justify-center">
                <p className="text-2xl font-heading text-muted-foreground">
                  Dashboard Preview
                </p>
              </div>
              <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
              <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Value Proposition */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center justify-center w-full text-center py-8">
            <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground">
              Top-Tier Software. African Insight. Global Standards.
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl">
              We help businesses unlock efficiency, scale faster, and compete globally through custom-built digital solutions engineered by elite developers and strategists.
            </p>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* What We Do */}
      <MaxWidthWrapper className="pt-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="What We Do" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              From enterprise software to cutting-edge AI, we deliver solutions that transform businesses.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-8">
          {services.map((service, idx) => (
            <AnimationContainer delay={0.2 * idx} key={idx}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <service.icon
                    strokeWidth={1.5}
                    className="w-10 h-10 text-foreground mb-4"
                  />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {service.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {service.detail}
                  </p>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Why Businesses Choose Us */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Why Choose Us" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Why Businesses Choose Us
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              We combine world-class engineering with local expertise to deliver exceptional value.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8">
          {benefits.map((benefit, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckIcon className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-medium text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Flagship Products */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Our Products" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Flagship Products
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Proven solutions built for real business needs.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-8">
          {products.map((product, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <product.icon
                    strokeWidth={1.5}
                    className="w-10 h-10 text-foreground mb-4"
                  />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Social Proof */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Our Impact" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Proven Results
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Real numbers from real businesses we&apos;ve transformed.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-8">
          {socialProof.map((proof, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <Card className="border-none">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl font-bold text-foreground">
                    {proof.metric}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {proof.label}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* CTA Section */}
      <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
        <AnimationContainer delay={0.1}>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Let&apos;s discuss how we can help you unlock efficiency, scale faster, and compete globally.
              </p>
              <div className="mt-6 flex gap-4 flex-wrap justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get a Free Consultation
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/work">
                    View Our Portfolio
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
