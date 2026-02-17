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
  BrainIcon,
  WifiIcon,
  SearchIcon,
  CodeIcon,
  ShieldCheckIcon,
  ClockIcon,
  GlobeIcon,
  TrendingUpIcon,
  UsersIcon,
  AwardIcon,
  FactoryIcon,
  HeartIcon,
  GraduationCapIcon,
  TruckIcon,
  BuildingIcon,
  StoreIcon,
} from "lucide-react";
import Link from "next/link";

const HomePage = async () => {
  const user = await currentUser();

  const services = [
    {
      title: "Business Software That Actually Works",
      category: "ERP • CRM • POS • HRIS • Inventory • Finance",
      description: "Stop bleeding money through manual processes. Our systems automate everything, eliminate errors, and scale with zero friction.",
      features: [
        "Real-time dashboards",
        "Multi-currency support",
        "Mobile-first design",
        "Cloud or on-premise",
        "Seamless integrations",
        "Role-based access control",
      ],
      perfectFor: "Retail chains, manufacturing, distribution, hospitality, healthcare, and service businesses ready to operate like Fortune 500 companies.",
      icon: CodeIcon,
    },
    {
      title: "Custom Development at Execution Speed",
      category: "Mobile • Web • SaaS • APIs • Enterprise",
      description: "Built fast. Built right. Built to last. From concept to launch in weeks, not months.",
      stack: "React, Next.js, React Native, Node.js, Python, PostgreSQL, MongoDB, AWS, Azure",
      promise: "Clean code, comprehensive documentation, full ownership, lifetime support",
      useCase: "Whether you need a customer-facing app, internal tool, or multi-tenant platform—we architect solutions that handle millions of users without breaking a sweat.",
      icon: ZapIcon,
    },
    {
      title: "AI That Drives Revenue",
      category: "Predictive Analytics • Intelligent Automation • Computer Vision • ML Models",
      description: "Turn data into decisions. Deploy AI systems that learn your business and optimize performance 24/7.",
      applications: [
        "Demand forecasting that cuts inventory costs by 30%",
        "Chatbots that handle 80% of customer inquiries",
        "Computer vision for quality control and security",
        "Recommendation engines that boost sales by 40%",
        "Document processing that eliminates manual data entry",
      ],
      tagline: "Stop treating AI like science fiction. Start using it like the business weapon it is.",
      icon: BrainIcon,
    },
    {
      title: "IoT Intelligence",
      category: "Smart Sensors • Remote Monitoring • Industrial IoT • AgriTech",
      description: "Connect everything. Control everything. Real-time data streams that power smarter operations.",
      useCases: [
        "Fleet tracking and fuel optimization",
        "Cold chain monitoring for pharmaceuticals",
        "Smart agriculture (soil sensors, irrigation automation)",
        "Factory floor monitoring and predictive maintenance",
        "Energy management systems",
      ],
      tagline: "From sensor to dashboard in days. Hardware-agnostic. Cloud-connected. Actionable insights in real-time.",
      icon: WifiIcon,
    },
    {
      title: "SEO That Actually Ranks",
      category: "Technical SEO • Core Web Vitals • Local Domination • Analytics",
      description: "Stop guessing. Start ranking. Performance-tuned digital presence that converts searchers into customers.",
      approach: [
        "Technical audits that find what others miss",
        "Core Web Vitals optimization (we hit 90+ scores)",
        "Content strategy backed by keyword research",
        "Local SEO for multi-location businesses",
        "Schema markup automation",
        "Conversion rate optimization",
      ],
      result: "Average result: 3x organic traffic in 6 months. Not promises. Proof.",
      icon: SearchIcon,
    },
  ];

  const valueProps = [
    {
      title: "60% Cost Savings. Zero Quality Compromise.",
      description: "World-class engineering at African prices. Get more. Pay less. Scale faster.",
    },
    {
      title: "Top 1% Engineering Talent",
      description: "International standards. Battle-tested QA. 99.9% uptime. Round-the-clock support. Every developer on our team has 5+ years experience and ships production code daily.",
    },
    {
      title: "Built for Africa. Ready for the World.",
      description: "Deep local expertise meets global scalability. We understand M-Pesa integration, unreliable power, mobile-first users, and bandwidth constraints—then engineer solutions that thrive anyway.",
    },
    {
      title: "40% Faster Time-to-Market",
      description: "Agile velocity. Senior-first teams. Ship production-ready solutions while competitors are still planning. No junior developers learning on your dime. No offshore miscommunication. Just results.",
    },
  ];

  const process = [
    {
      week: "Week 1",
      title: "Discovery & Strategy",
      description: "Deep-dive sessions. Technical audits. Competitive analysis. We map your business inside-out before writing a single line of code.",
    },
    {
      week: "Week 2-6",
      title: "Build & Iterate",
      description: "Agile sprints. Weekly demos. Continuous feedback. You see progress daily, not monthly.",
    },
    {
      week: "Week 7",
      title: "Launch & Optimize",
      description: "Rigorous testing. Performance tuning. User training. Seamless deployment with zero downtime.",
    },
    {
      week: "Forever",
      title: "Support & Scale",
      description: "24/7 monitoring. Proactive maintenance. Feature upgrades. We're your long-term technology partner.",
    },
  ];

  const products = [
    {
      title: "Mikrosell Carwash POS",
      description: "The industry standard for modern car wash operations.",
      features: [
        "Real-time bay tracking",
        "Mobile payment integration",
        "Automated loyalty programs",
        "Multi-branch control center",
        "Employee performance analytics",
        "Customer database management",
      ],
      result: "35% revenue increase, 50% faster service times, zero cash handling errors.",
      icon: CarIcon,
    },
    {
      title: "Next.js SEO Platform",
      description: "The ranking machine for content businesses and agencies.",
      features: [
        "Core Web Vitals perfection (95+ scores)",
        "Automated schema markup",
        "Image optimization",
        "Edge caching",
        "Built-in analytics",
        "Markdown CMS",
      ],
      result: "4x faster page loads, 300% organic traffic growth, top 3 rankings for competitive keywords.",
      icon: FileTextIcon,
    },
    {
      title: "Zuri Marketplace",
      description: "Mobile-first e-commerce engine built for African markets.",
      features: [
        "M-Pesa + Visa/Mastercard integration",
        "Real-time inventory sync",
        "Multi-vendor management",
        "Smart search & filtering",
        "Order tracking",
        "Automated invoicing",
        "Customer reviews & ratings",
      ],
      result: "60% mobile conversion rate, 99.8% payment success rate, handles 10,000+ daily transactions.",
      icon: ShoppingCartIcon,
    },
  ];

  const industries = [
    { name: "Retail & E-commerce", description: "POS systems, inventory management, online stores", icon: StoreIcon },
    { name: "Manufacturing", description: "Production tracking, quality control, supply chain optimization", icon: FactoryIcon },
    { name: "Healthcare", description: "Patient management, appointment systems, telemedicine platforms", icon: HeartIcon },
    { name: "Agriculture", description: "Farm management, IoT sensors, supply chain transparency", icon: SparklesIcon },
    { name: "Logistics", description: "Fleet tracking, route optimization, warehouse management", icon: TruckIcon },
    { name: "Hospitality", description: "Booking systems, POS, guest management, loyalty programs", icon: BuildingIcon },
  ];

  const socialProof = [
    { metric: "200+", label: "SMEs Transformed", sublabel: "Kenya • Uganda • Tanzania" },
    { metric: "98%", label: "Client Retention", sublabel: "They stay because we deliver." },
    { metric: "150%", label: "Average ROI", sublabel: "Real returns in 18 months." },
    { metric: "500,000+", label: "Hours Automated", sublabel: "Manual processes eliminated." },
    { metric: "99.9%", label: "Uptime Guaranteed", sublabel: "Systems that never sleep." },
  ];

  const testimonials = [
    {
      quote: "Mikrosell built our entire ERP system in 8 weeks. Our competitors are still using spreadsheets. We're operating at a different level now.",
      author: "James Kariuki",
      role: "CEO, Nairobi Distribution Ltd",
    },
    {
      quote: "The AI-powered inventory system paid for itself in 3 months through reduced waste alone. Best investment we've made.",
      author: "Sarah Wanjiru",
      role: "Operations Director, Fresh Harvest Foods",
    },
    {
      quote: "Finally, a tech partner that understands African business realities. No excuses, just solutions that work.",
      author: "David Okello",
      role: "Founder, Kampala Logistics Group",
    },
  ];

  const techStack = [
    { category: "Frontend", tech: "React • Next.js • React Native • Tailwind CSS • TypeScript" },
    { category: "Backend", tech: "Node.js • Python • Django • FastAPI • GraphQL" },
    { category: "Database", tech: "PostgreSQL • MongoDB • Redis • Elasticsearch" },
    { category: "Cloud", tech: "AWS • Azure • Google Cloud • DigitalOcean" },
    { category: "AI/ML", tech: "TensorFlow • PyTorch • OpenAI • Scikit-learn" },
    { category: "DevOps", tech: "Docker • Kubernetes • CI/CD • Terraform" },
  ];

  const trustBuilders = [
    "Money-Back Guarantee – If we don't deliver on our promises, you don't pay",
    "Fixed-Price Projects – No surprise bills, no scope creep, no excuses",
    "Code Ownership – You own everything we build, including source code",
    "Transparent Communication – Weekly updates, daily access, real-time progress",
  ];

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Hero Section */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
              Engineer Your{" "}
              <span className="text-transparent bg-gradient-to-r from-mlemon to-msecondary bg-clip-text inline-bloc">
                Competitive Edge
              </span>
            </h1>
            <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-4xl">
              East Africa&apos;s elite software partner for businesses that refuse to settle. We build AI-powered systems, enterprise-grade applications, and digital infrastructure that doesn&apos;t just work—it dominates.
            </p>
            <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50 flex-wrap">
              <Button asChild size="lg">
                <Link href="/contact" className="flex items-center">
                  Get Your Free Strategy Session
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work" className="flex items-center">
                  See What We&apos;ve Built
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

      {/* Subheader */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center justify-center w-full text-center py-8">
            <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground">
              World-Class Code. Zero Compromise. Built for Africa.
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl">
              We don&apos;t do mediocre. Our elite engineering team delivers software that scales, AI that thinks, and systems that print money—designed specifically for East African markets with global ambition.
            </p>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Trust Bar */}
      <MaxWidthWrapper className="py-6 border-y border-border/50">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-sm text-muted-foreground">
              Trusted by industry leaders across Kenya, Uganda, and Tanzania • Certified AWS Partners • ISO 27001 Security Standards • 24/7 Mission-Critical Support
            </p>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Services Grid */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="Services" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Services Grid
            </h2>
          </div>
        </AnimationContainer>
        <div className="space-y-12 py-8">
          {services.map((service, idx) => (
            <AnimationContainer delay={0.1 * idx} key={idx}>
              <MagicCard className="group md:py-8">
                <div className="flex flex-col w-full">
                  <div className="flex items-start gap-4 mb-4">
                    <service.icon className="w-12 h-12 text-foreground flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground mb-3">
                        {service.category}
                      </p>
                      <p className="text-base text-foreground mb-4">
                        {service.description}
                      </p>
                      {service.features && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-foreground mb-2">What you get:</p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.stack && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-foreground mb-2">Our stack:</p>
                          <p className="text-sm text-muted-foreground">{service.stack}</p>
                        </div>
                      )}
                      {service.promise && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-foreground mb-2">Our promise:</p>
                          <p className="text-sm text-muted-foreground">{service.promise}</p>
                        </div>
                      )}
                      {service.applications && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-foreground mb-2">Real applications:</p>
                          <ul className="space-y-2">
                            {service.applications.map((app, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.useCases && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-foreground mb-2">Deploy IoT for:</p>
                          <ul className="space-y-2">
                            {service.useCases.map((useCase, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.approach && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-foreground mb-2">Our approach:</p>
                          <ul className="space-y-2">
                            {service.approach.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.perfectFor && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-foreground mb-2">Perfect for:</p>
                          <p className="text-sm text-muted-foreground">{service.perfectFor}</p>
                        </div>
                      )}
                      {service.useCase && (
                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground">{service.useCase}</p>
                        </div>
                      )}
                      {service.tagline && (
                        <p className="text-sm font-medium text-foreground mt-4 italic">
                          {service.tagline}
                        </p>
                      )}
                      {service.result && (
                        <p className="text-sm font-medium text-primary mt-4">
                          {service.result}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Value Props */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Why Choose Us" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Why Elite Businesses Choose Mikrosell
            </h2>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8">
          {valueProps.map((prop, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <CheckIcon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {prop.description}
                  </p>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* How We Work */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Process" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Our Process: Fast, Transparent, Bulletproof
            </h2>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-8">
          {process.map((step, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <span className="text-xs font-medium text-primary mb-2">{step.week}</span>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Products */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Products" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Battle-Tested Solutions Ready to Deploy
            </h2>
          </div>
        </AnimationContainer>
        <div className="space-y-8 py-8">
          {products.map((product, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <MagicCard className="group md:py-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <product.icon className="w-16 h-16 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-foreground mb-3">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Core features:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm font-medium text-primary">
                      Result: {product.result}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Industry Expertise */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Industries" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Industries We Dominate
            </h2>
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
                    {industry.name}
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

      {/* Social Proof */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Results" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              The Numbers Don&apos;t Lie
            </h2>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 py-8">
          {socialProof.map((proof, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <Card className="border-none text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-foreground">
                    {proof.metric}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base font-medium">
                    {proof.label}
                  </CardDescription>
                  {proof.sublabel && (
                    <CardDescription className="text-sm mt-1">
                      {proof.sublabel}
                    </CardDescription>
                  )}
                </CardContent>
              </Card>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Testimonials */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Testimonials" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              What Our Clients Say
            </h2>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-8">
          {testimonials.map((testimonial, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <p className="text-base text-foreground mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm font-medium text-foreground">
                      — {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Technology Stack */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Technology" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Built on Proven Technology
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Enterprise-grade. Battle-tested. Infinitely scalable.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-8">
          {techStack.map((stack, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <CodeIcon className="w-8 h-8 text-foreground mb-3" />
                  <h3 className="text-base font-medium text-foreground mb-2">
                    {stack.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stack.tech}
                  </p>
                </div>
              </MagicCard>
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
                Ready to Dominate Your Market?
              </h2>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                Stop settling for average software. Let&apos;s engineer your unfair advantage.
              </p>
              <div className="mt-8 space-y-4 max-w-xl mx-auto">
                <p className="text-sm font-medium text-foreground mb-4">What happens next:</p>
                <ul className="space-y-2 text-left">
                  {[
                    "Book a free 30-minute strategy call",
                    "We analyze your current systems and identify opportunities",
                    "Receive a custom roadmap with ROI projections",
                    "Launch your competitive edge in weeks, not months",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex gap-4 flex-wrap justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book Your Free Strategy Call
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/work">
                    Browse Our Portfolio
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No sales pressure. No obligations. Just honest technical expertise and a plan to win.
              </p>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Final Trust Builder */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Guarantee" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Risk-Free Partnership
            </h2>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 max-w-4xl mx-auto">
          {trustBuilders.map((builder, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex items-start gap-3 w-full">
                  <CheckIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    {builder}
                  </p>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
