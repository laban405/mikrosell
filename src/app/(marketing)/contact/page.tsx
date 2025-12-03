import {
  AnimationContainer,
  MaxWidthWrapper,
} from "@/components";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeIcon,
  MessageSquareIcon,
  CalendarIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Head Office",
      content: "Mikrosell Systems Ltd\nNairobi, Kenya",
    },
    {
      icon: MailIcon,
      title: "Email",
      content: "info@mikrosellsystems.com",
      href: "mailto:info@mikrosellsystems.com",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "+254 [phone number]",
      href: "tel:+254",
    },
    {
      icon: GlobeIcon,
      title: "Website",
      content: "www.mikrosellsystems.com",
      href: "https://www.mikrosellsystems.com",
    },
  ];

  const businessHours = [
    { day: "Monday–Friday", hours: "8:00 AM – 6:00 PM (EAT)" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ];

  const ctaOptions = [
    {
      title: "Request a Quote",
      description: "Get a detailed estimate for your project",
      icon: MessageSquareIcon,
      href: "mailto:info@mikrosellsystems.com?subject=Request a Quote",
    },
    {
      title: "Book a Free Consultation",
      description: "Schedule a call with our technical experts",
      icon: CalendarIcon,
      href: "mailto:info@mikrosellsystems.com?subject=Book a Free Consultation",
    },
    {
      title: "Talk to a Technical Expert",
      description: "Discuss your technical requirements",
      icon: UserIcon,
      href: "mailto:info@mikrosellsystems.com?subject=Talk to a Technical Expert",
    },
  ];

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Header */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center py-20">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <MagicBadge title="Contact Us" />
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl !leading-[1.15] w-full font-heading">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-gradient-to-r from-mlemon to-msecondary bg-clip-text inline-bloc">
                Exceptional
              </span>
            </h1>
            <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
              Whether you&apos;re modernizing your business, automating workflows, building an app, or scaling your digital presence—our team is ready to help.
            </p>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Contact Information */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto mb-8">
            <MagicBadge title="Get in Touch" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Contact Information
            </h2>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-8">
          {contactInfo.map((info, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <MagicCard className="group md:py-6">
                <div className="flex flex-col items-start justify-center w-full">
                  <info.icon
                    strokeWidth={1.5}
                    className="w-10 h-10 text-foreground mb-4"
                  />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <Link
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </Link>
                  ) : (
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </p>
                  )}
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Business Hours */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto mb-8">
            <MagicBadge title="Availability" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Business Hours
            </h2>
          </div>
        </AnimationContainer>
        <div className="max-w-2xl mx-auto">
          <MagicCard className="md:py-8">
            <div className="flex flex-col items-start justify-center w-full">
              <ClockIcon className="w-10 h-10 text-foreground mb-4" />
              <div className="space-y-4 w-full">
                {businessHours.map((schedule, id) => (
                  <div
                    key={id}
                    className="flex items-center justify-between w-full py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-base font-medium text-foreground">
                      {schedule.day}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </MagicCard>
        </div>
      </MaxWidthWrapper>

      {/* CTA Options */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto mb-8">
            <MagicBadge title="Get Started" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Start Your Digital Transformation Today
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Choose how you&apos;d like to connect with us.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-8">
          {ctaOptions.map((cta, id) => (
            <AnimationContainer delay={0.1 * id} key={id}>
              <Card className="border-none hover:border-border transition-colors">
                <CardHeader>
                  <cta.icon className="w-10 h-10 text-foreground mb-3" />
                  <CardTitle className="text-xl font-medium">
                    {cta.title}
                  </CardTitle>
                  <CardDescription>{cta.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={cta.href}>
                      Get Started
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Main CTA */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center justify-center w-full py-12 bg-muted/30 rounded-2xl">
            <h2 className="text-center text-3xl md:text-4xl font-medium font-heading text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-center text-muted-foreground mb-6 max-w-lg">
              Let&apos;s discuss how we can help you unlock efficiency, scale faster, and compete globally.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Button asChild size="lg">
                <Link href="mailto:info@mikrosellsystems.com?subject=Get a Free Consultation">
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
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactPage;

