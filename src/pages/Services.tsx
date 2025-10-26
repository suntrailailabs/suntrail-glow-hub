import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Megaphone, TrendingUp, Bot, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Build",
      description:
        "Custom-built responsive websites tailored to your brand and business goals. We create digital experiences that convert visitors into customers.",
      features: [
        "Custom-built responsive websites (landing pages, booking sites, ecommerce)",
        "Fast-loading, SEO-optimized, analytics-ready",
        "Blog setup, CMS integration, payment gateways",
        "Mobile-first design approach",
      ],
    },
    {
      icon: Megaphone,
      title: "Social Media Content Package",
      description:
        "Let AI power your social media presence with consistent, engaging content that drives real engagement and brand awareness.",
      features: [
        "Monthly AI-assisted content calendar",
        "12–20 ready-to-post designs per month",
        "Captions, hashtags, and engagement analysis",
        "Platform-optimized content for Instagram, LinkedIn, Facebook",
      ],
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing Campaigns",
      description:
        "Data-driven campaigns that deliver measurable results. We combine organic SEO with strategic paid advertising for maximum ROI.",
      features: [
        "Keyword research & comprehensive SEO audits",
        "Google Ads, Facebook & Instagram campaigns",
        "Conversion tracking and optimization",
        "Weekly performance dashboards",
      ],
    },
    {
      icon: Bot,
      title: "AI Automations for Your Business",
      description:
        "Save time and reduce errors by automating repetitive processes. Our intelligent automation solutions work 24/7 to streamline your operations.",
      features: [
        "Automate lead capture, customer onboarding, and reporting",
        "Chatbot & email workflow automation",
        "CRM, Google Workspace, and payment system integrations",
        "Save 20–30 hours per month per team member",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions designed to accelerate your business growth
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-8"></div>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="gradient-primary shadow-hover max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-foreground/90 mb-6">
                Let's discuss which services are right for your business
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
