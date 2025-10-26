import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Megaphone, TrendingUp, Bot, Globe2, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import servicesImage from "@/assets/services-automation.jpg";
import webDesignImage from "@/assets/service-web-design.jpg";
import socialMediaImage from "@/assets/service-social-media.jpg";
import seoMarketingImage from "@/assets/service-seo-marketing.jpg";
import aiAutomationImage from "@/assets/service-ai-automation.jpg";

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Build",
      description: "Build digital real estate that sells.",
      image: webDesignImage,
    },
    {
      icon: Megaphone,
      title: "Social Media Content Package",
      description: "Turn your content into cash flow.",
      image: socialMediaImage,
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing Campaigns",
      description: "Rank higher. Convert faster.",
      image: seoMarketingImage,
    },
    {
      icon: Bot,
      title: "AI Automations for Your Business",
      description: "Work 30% less, grow 2× faster.",
      image: aiAutomationImage,
    },
  ];

  const metrics = [
    {
      icon: Globe2,
      text: "Trusted by clients across North America & Europe",
    },
    {
      icon: Zap,
      text: "48-hour MVP website delivery options",
    },
    {
      icon: Target,
      text: "Transparent pricing, measurable ROI",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Professional consulting team" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Make Your Business Earn{" "}
              <span className="relative">
                <span className="relative z-10">While You Sleep.</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/30 -rotate-1"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              We design websites, automate systems, and scale operations — turning wasted hours into profit-producing engines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base">
                <Link to="/contact">Book Free Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <metric.icon className="h-6 w-6 text-foreground" />
                </div>
                <p className="text-foreground font-medium">{metric.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-bold text-foreground">
              3× faster workflows • $15K/mo saved • +142% traffic growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Services that turn your business into a revenue machine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth border-2 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-foreground/80">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto shadow-hover border-2">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Let's automate your growth
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Book a free audit and we'll show you 3–5 systems that could double your productivity within 30 days.
              </p>
              <Button size="lg" asChild className="text-base">
                <Link to="/contact">Book a Free Audit</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
