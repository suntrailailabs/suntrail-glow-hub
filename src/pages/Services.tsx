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
      <section className="py-24 md:py-40 bg-[#FFD84D]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="font-poppins text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[#111111]">
              Our <span className="text-black">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#111111]/80 font-light">
              Comprehensive technology services designed to modernize operations and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`shadow-soft hover:shadow-hover transition-smooth overflow-hidden animate-fade-up border-none ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F8]'}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`h-72 md:h-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center`}>
                    <div className="h-12 w-12 rounded-lg bg-[#FFD84D]/20 flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-[#FFD84D]" />
                    </div>
                    <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-2 text-[#111111]">{service.title}</h2>
                    <p className="text-lg text-[#FFD84D] mb-4 font-semibold">{service.tagline}</p>
                    <p className="text-base text-[#111111]/70 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#FFD84D] flex-shrink-0 mt-0.5" />
                          <span className="text-[#111111] text-sm">{feature}</span>
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
      <section className="py-20 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6 text-[#111111]">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-[#111111]/70 mb-10 max-w-2xl mx-auto">
              Schedule a free consultation to explore how our solutions can address your specific business challenges.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
