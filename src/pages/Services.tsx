import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Bot, Code, BarChart3, Check } from "lucide-react";
import cloudImage from "@/assets/service-cloud.jpg";
import automationImage from "@/assets/service-automation-ai.jpg";
import webAppImage from "@/assets/service-web-app.jpg";
import analyticsImage from "@/assets/service-analytics.jpg";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI & Automation Consulting",
      tagline: "Intelligent systems that work for you",
      description: "Transform your business processes with custom automation solutions powered by AI and modern workflow tools.",
      image: automationImage,
      features: [
        "Workflow automation using n8n, Python, and AI APIs",
        "Custom chatbot development and deployment",
        "Process mining and optimization",
        "Integration with existing business systems",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      tagline: "Secure, scalable cloud solutions",
      description: "Design, deploy, and manage enterprise-grade cloud infrastructure tailored to your business needs.",
      image: cloudImage,
      features: [
        "Multi-cloud deployment (Azure, AWS, GCP)",
        "Infrastructure as Code (IaC) implementation",
        "Cloud security and compliance",
        "24/7 monitoring and support",
      ],
    },
    {
      icon: Code,
      title: "Web & App Development",
      tagline: "Modern, responsive digital experiences",
      description: "Build high-performance web applications and websites that deliver exceptional user experiences.",
      image: webAppImage,
      features: [
        "Custom web application development",
        "Responsive design for all devices",
        "API development and integration",
        "Performance optimization and SEO",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      tagline: "Turn data into actionable insights",
      description: "Unlock the power of your data with real-time analytics, visualization, and business intelligence solutions.",
      image: analyticsImage,
      features: [
        "Real-time dashboards using Power BI",
        "Data warehouse design and implementation",
        "Databricks and big data analytics",
        "Predictive modeling and forecasting",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 md:py-48 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center animate-fade-up">
            <h1 className="font-heading text-5xl md:text-7xl font-semibold mb-8 text-foreground">
              Consulting <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive technology services designed to modernize operations and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`shadow-card hover:shadow-hover transition-smooth overflow-hidden animate-fade-up ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`h-80 md:h-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className={`p-10 md:p-14 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center`}>
                    <div className="h-12 w-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3 text-foreground">{service.title}</h2>
                    <p className="text-base text-primary mb-6 font-medium uppercase tracking-wide">{service.tagline}</p>
                    <p className="text-base text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-8 text-foreground">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Schedule a free consultation to explore how our solutions can address your specific business challenges.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
