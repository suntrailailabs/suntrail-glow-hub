import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Megaphone, TrendingUp, Bot, Check } from "lucide-react";
import servicesImage from "@/assets/services-automation.jpg";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Build",
      tagline: "Build digital real estate that sells.",
      features: [
        "Fast-loading, conversion-optimized websites",
        "SEO-ready, analytics installed",
        "Landing, booking, or ecommerce",
        "Mobile-first & scalable",
      ],
    },
    {
      icon: Megaphone,
      title: "Social Media Content Package",
      tagline: "Turn your content into cash flow.",
      features: [
        "AI-powered monthly content calendar",
        "12–20 ready-to-post designs",
        "Growth captions, hooks & analytics",
        "Platform-optimized for Instagram & LinkedIn",
      ],
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing Campaigns",
      tagline: "Rank higher. Convert faster.",
      features: [
        "Keyword research + ad strategy",
        "Google & Meta campaign setup",
        "CRO tracking & dashboards",
        "Weekly ROI reports",
      ],
    },
    {
      icon: Bot,
      title: "AI Automations for Your Business",
      tagline: "Work 30% less, grow 2× faster.",
      features: [
        "CRM, chatbot, and workflow automation",
        "Lead capture & email sequences",
        "Google Workspace + payment system integrations",
        "Real-time business dashboards",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Services That{" "}
            <span className="relative">
              <span className="relative z-10">Actually Scale</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/30 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't sell hours — we build ROI machines.
          </p>
          <div className="h-1 w-24 bg-foreground mx-auto mt-8"></div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <img src={servicesImage} alt="AI and automation services" className="w-full h-[400px] object-cover rounded-2xl shadow-hover" />
        </div>

        {/* Services Grid */}
        <div className="space-y-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth border-2">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-serif text-3xl mb-2">{service.title}</CardTitle>
                    <p className="text-xl font-semibold text-foreground/80">{service.tagline}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-22">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/90">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-hover border-2">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="font-serif text-4xl font-bold mb-6">
                Ready to scale your business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book a free audit and we'll show you how to 2× your efficiency in 30 days.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Book Free Audit</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
