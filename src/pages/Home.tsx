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
      <section className="relative py-24 md:py-40 overflow-hidden bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="font-poppins text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-[#111111]">
              Transform Your Business with{" "}
              <span className="text-[#FFD84D]">Intelligent Automation</span>
            </h1>
            <div className="w-32 h-1 bg-[#FFD84D] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#5B5B5B] mb-10 max-w-3xl mx-auto font-light">
              We build secure, scalable, and AI-powered systems that make your business run itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild variant="yellow">
                <Link to="/services">Explore Solutions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6 text-white">Who We Are</h2>
            <p className="text-lg md:text-xl text-[#D1D1D1] leading-relaxed">
              Suntrail AI Labs Inc. is a Canada-based IT consulting firm helping North American and global companies harness the power of automation and AI. We specialize in cloud infrastructure, workflow automation, and AI-driven analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4 p-6 bg-white/10 rounded-lg border border-white/10 shadow-soft hover:shadow-glow transition-smooth animate-fade-up">
                <div className="h-12 w-12 rounded-full bg-[#FFD84D]/20 flex items-center justify-center flex-shrink-0">
                  <metric.icon className="h-6 w-6 text-[#FFD84D]" />
                </div>
                <p className="text-white font-medium">{metric.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 text-[#111111]">Our Services</h2>
            <p className="text-xl text-[#5B5B5B] max-w-2xl mx-auto">
              Comprehensive solutions to modernize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth overflow-hidden group animate-fade-up border-none">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
                </div>
                <CardHeader className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-[#FFD84D]/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#FFD84D]" />
                  </div>
                  <CardTitle className="font-poppins text-xl mb-2 text-[#111111]">{service.title}</CardTitle>
                  <CardDescription className="text-base text-[#5B5B5B]">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 text-white">Client Success Stories</h2>
            <p className="text-xl text-[#D1D1D1] max-w-2xl mx-auto">
              Measurable results for businesses around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-smooth p-6 bg-white/5 border-white/10 hover:bg-white/10 animate-fade-up">
                <CardContent className="p-0">
                  <h3 className="font-poppins text-lg font-semibold mb-3 text-[#FFD84D]">{study.client}</h3>
                  <p className="text-[#D1D1D1]">{study.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="yellow" size="lg" asChild>
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6 text-[#111111]">
              Book Your Free Audit
            </h2>
            <p className="text-xl text-[#5B5B5B] mb-10 max-w-2xl mx-auto">
              Schedule a consultation and discover how we can transform your operations with AI and automation.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
