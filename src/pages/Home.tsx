import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Bot, Code, BarChart3, Building2, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-ai-network.jpg";
import cloudImage from "@/assets/service-cloud.jpg";
import automationImage from "@/assets/service-automation-ai.jpg";
import webAppImage from "@/assets/service-web-app.jpg";
import analyticsImage from "@/assets/service-analytics.jpg";

const Home = () => {
  const services = [
    {
      icon: Bot,
      title: "AI & Automation Consulting",
      description: "Build workflow automation systems using n8n, Python, and AI APIs.",
      image: automationImage,
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Deploy and secure cloud environments (Azure, AWS, GCP).",
      image: cloudImage,
    },
    {
      icon: Code,
      title: "Web & App Development",
      description: "Design modern, responsive, and high-performance websites.",
      image: webAppImage,
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Enable real-time insights and reporting using Databricks and Power BI.",
      image: analyticsImage,
    },
  ];

  const metrics = [
    {
      icon: Building2,
      text: "Founded 2024 • Based in Mississauga, Canada",
    },
    {
      icon: Users,
      text: "15+ global clients across North America & Europe",
    },
    {
      icon: Award,
      text: "98% client satisfaction",
    },
  ];

  const caseStudies = [
    {
      client: "NorthPoint Logistics",
      result: "Automated order tracking, saving 600+ hours/month",
    },
    {
      client: "TechVision Analytics",
      result: "Deployed real-time BI dashboards, 40% faster insights",
    },
    {
      client: "GlobalPay Solutions",
      result: "Migrated to Azure cloud, reduced costs by 35%",
    },
    {
      client: "InnovateCorp",
      result: "Built AI chatbot system, 70% reduction in support tickets",
    },
    {
      client: "Summit Healthcare",
      result: "Automated patient workflow, improved efficiency by 50%",
    },
    {
      client: "FutureWorks",
      result: "Developed custom web portal, 3× faster user engagement",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center animate-fade-up">
            <h1 className="font-heading text-5xl md:text-7xl font-semibold mb-6 leading-tight text-foreground">
              Transform Your Business with{" "}
              <span className="text-primary">Intelligent Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We build secure, scalable, and AI-powered systems that make your business run itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/services">Explore Solutions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-8 text-foreground">Who We Are</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Suntrail AI Labs Inc. is a Canada-based IT consulting firm helping North American and global companies harness the power of automation and AI. We specialize in cloud infrastructure, workflow automation, and AI-driven analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4 p-8 bg-background rounded-sm border border-border shadow-card hover:shadow-hover transition-smooth animate-fade-up">
                <div className="h-12 w-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <metric.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium text-sm">{metric.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6 text-foreground">Consulting Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions to modernize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth overflow-hidden group animate-fade-up">
                <div className="h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
                </div>
                <CardHeader className="p-8">
                  <div className="h-12 w-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl font-semibold mb-3 text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6 text-foreground">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Measurable results for businesses around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth p-8 bg-background animate-fade-up">
                <CardContent className="p-0">
                  <h3 className="font-heading text-base font-semibold mb-4 text-primary uppercase tracking-wide">{study.client}</h3>
                  <p className="text-muted-foreground leading-relaxed">{study.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-8 text-foreground">
              Book Your Free Audit
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation and discover how we can transform your operations with AI and automation.
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

export default Home;
