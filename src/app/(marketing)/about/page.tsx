import {
  AnimationContainer,
  MaxWidthWrapper,
} from "@/components";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CodeIcon,
  GlobeIcon,
  HeartIcon,
  LightbulbIcon,
  TargetIcon,
  TrendingUpIcon,
} from "lucide-react";

const AboutPage = () => {
  const differentiators = [
    {
      title: "Premium Engineering, Fair Pricing",
      description: "Our operating model allows us to deliver high-end engineering at 60% below global rates.",
      icon: TrendingUpIcon,
    },
    {
      title: "Innovation at the Core",
      description: "AI, automation, IoT, and next-gen technologies built into every solution.",
      icon: LightbulbIcon,
    },
    {
      title: "Human-Centered Design",
      description: "We design with the end user in mind—prioritizing usability, accessibility, clarity, and seamless experience.",
      icon: HeartIcon,
    },
    {
      title: "Proven Market Impact",
      description: "45% average efficiency boost, $2.5M+ saved through automation, 300% online sales growth, 98% client retention.",
      icon: TargetIcon,
    },
  ];

  const techStack = [
    { category: "Frontend", tech: "React | Next.js | Angular | Vue" },
    { category: "Backend", tech: "Node.js | Django | Laravel | .NET" },
    { category: "Mobile", tech: "iOS | Android | Flutter | React Native" },
    { category: "Database", tech: "MySQL | PostgreSQL | MongoDB | Redis" },
    { category: "Cloud", tech: "AWS | GCP | Azure" },
    { category: "AI/ML", tech: "TensorFlow | PyTorch | OpenAI APIs" },
    { category: "IoT", tech: "Arduino | Raspberry Pi | LoRaWAN | MQTT" },
  ];

  const impactMetrics = [
    { metric: "45%", label: "Average efficiency boost for clients" },
    { metric: "$2.5M+", label: "Saved through automation" },
    { metric: "300%", label: "Online sales growth for select e-commerce clients" },
    { metric: "98%", label: "Client retention rate" },
  ];

  const socialImpact = [
    "Special pricing for women-owned businesses",
    "Internship programs for local tech talent",
    "Solutions that reduce paper usage by 70%",
    "Job creation within client organizations",
  ];

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Who We Are */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center py-20">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <MagicBadge title="About Us" />
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl !leading-[1.15] w-full font-heading">
              Who We Are
            </h1>
            <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
              Founded in 2020 and headquartered in Nairobi, Kenya, Mikrosell Systems is East Africa&apos;s trusted technology partner—specializing in enterprise software, custom digital solutions, AI, IoT, and advanced SEO.
            </p>
            <p className="text-base tracking-tight text-muted-foreground md:text-lg text-balance max-w-3xl">
              With a team of 25+ expert developers and digital strategists, we have delivered 200+ successful projects across multiple industries, from automotive to retail, manufacturing, and e-commerce.
            </p>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Mission & Vision */}
      <MaxWidthWrapper className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimationContainer delay={0.1}>
            <MagicCard className="md:py-8">
              <div className="flex flex-col items-start justify-center w-full">
                <TargetIcon className="w-10 h-10 text-foreground mb-4" />
                <h2 className="text-2xl font-medium text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To democratize access to high-quality technology for African businesses—making innovation affordable, scalable, and accessible to every enterprise.
                </p>
              </div>
            </MagicCard>
          </AnimationContainer>
          <AnimationContainer delay={0.2}>
            <MagicCard className="md:py-8">
              <div className="flex flex-col items-start justify-center w-full">
                <GlobeIcon className="w-10 h-10 text-foreground mb-4" />
                <h2 className="text-2xl font-medium text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  A digitally empowered Africa where SMEs thrive through powerful, modern, data-driven systems.
                </p>
              </div>
            </MagicCard>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* What Sets Us Apart */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Differentiators" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              What Sets Us Apart
            </h2>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8">
          {differentiators.map((item, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <item.icon
                    strokeWidth={1.5}
                    className="w-10 h-10 text-foreground mb-4"
                  />
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

      {/* Proven Market Impact */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Impact" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Proven Market Impact
            </h2>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-8">
          {impactMetrics.map((metric, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <Card className="border-none text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    {metric.metric}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {metric.label}
                  </CardDescription>
                </CardContent>
              </Card>
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
              Technology Stack
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              We work with the best tools and technologies to deliver exceptional results.
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

      {/* Social Impact */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Impact" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Our Social Impact
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              We champion inclusive growth and sustainable development.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-8 max-w-3xl mx-auto">
          {socialImpact.map((impact, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex items-start gap-3 w-full">
                  <HeartIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    {impact}
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

export default AboutPage;

