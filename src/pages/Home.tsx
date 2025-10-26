import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Megaphone, TrendingUp, Bot, Zap, Users, Award } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Build",
      description: "High-conversion websites, built for speed, SEO, and modern branding.",
    },
    {
      icon: Megaphone,
      title: "Social Media Content Packages",
      description: "AI-powered content calendars, post design, and engagement tracking.",
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing Campaigns",
      description: "Organic growth + paid campaigns for measurable ROI.",
    },
    {
      icon: Bot,
      title: "AI Automations for Your Business",
      description:
        "Streamline workflows, customer engagement, and reporting through AI bots, APIs, and intelligent process automation.",
    },
  ];

  const highlights = [
    {
      icon: Users,
      text: "Trusted by small businesses and global clients in North America and Europe",
    },
    {
      icon: Zap,
      text: "48-hour MVP website delivery options",
    },
    {
      icon: Award,
      text: "Transparent pricing & measurable results",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-subtle py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Businesses with{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Intelligent Design & Automation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Suntrail AI Labs helps global brands build fast, scale smart, and automate effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to grow your business in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="default" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="gradient-primary shadow-hover">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's automate your growth
              </h2>
              <p className="text-lg text-foreground/90 mb-8">
                Book a free audit and discover how we can transform your business
              </p>
              <Button size="lg" variant="outline" asChild>
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
