import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Users, Shield, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/about-corporate.jpg";

const About = () => {
  const beliefs = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by the tangible outcomes we deliver for our clients.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Every solution is built with enterprise-grade security and compliance in mind.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technological trends to provide cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work as an extension of your team, committed to your long-term success.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-poppins text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
              About <span className="text-[#FFD84D]">Suntrail AI Labs</span>
            </h1>
            <div className="w-32 h-1 bg-[#FFD84D] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#D1D1D1] font-light leading-relaxed">
              A trusted technology partner helping businesses across North America and beyond transform through
              intelligent automation and cloud innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-8 text-center text-[#111111]">Who We Are</h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[#5B5B5B] leading-relaxed">
                Suntrail AI Labs Inc. is a Canada-based IT consulting firm specializing in artificial intelligence,
                automation, and cloud infrastructure. Founded in 2024 and headquartered in Mississauga, Ontario, we
                serve clients across North America and Europe.
              </p>
              <p className="text-lg md:text-xl text-[#5B5B5B] leading-relaxed">
                Our team of experienced engineers, data scientists, and consultants work together to deliver
                enterprise-grade solutions that drive measurable business outcomes. We combine deep technical expertise
                with a pragmatic understanding of business operations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center p-6 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg hover:shadow-soft transition-smooth">
                  <p className="text-3xl font-bold text-[#FFD84D] mb-2">2024</p>
                  <p className="text-sm text-[#5B5B5B]">Founded</p>
                </div>
                <div className="text-center p-6 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg hover:shadow-soft transition-smooth">
                  <p className="text-3xl font-bold text-[#FFD84D] mb-2">15+</p>
                  <p className="text-sm text-[#5B5B5B]">Global Clients</p>
                </div>
                <div className="text-center p-6 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg hover:shadow-soft transition-smooth">
                  <p className="text-3xl font-bold text-[#FFD84D] mb-2">98%</p>
                  <p className="text-sm text-[#5B5B5B]">Satisfaction</p>
                </div>
                <div className="text-center p-6 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg hover:shadow-soft transition-smooth">
                  <p className="text-3xl font-bold text-[#FFD84D] mb-2">3</p>
                  <p className="text-sm text-[#5B5B5B]">Continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Approach */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto animate-fade-up">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-4 text-center text-white">Our Approach</h2>
            <p className="text-xl text-[#D1D1D1] text-center mb-12 max-w-3xl mx-auto">
              Our core principles guide every project and client relationship
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beliefs.map((belief, index) => (
                <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth p-6 bg-white/10 border-white/10">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-[#FFD84D]/20 flex items-center justify-center flex-shrink-0">
                        <belief.icon className="h-6 w-6 text-[#FFD84D]" />
                      </div>
                      <div>
                        <h3 className="font-poppins text-xl font-semibold mb-2 text-white">{belief.title}</h3>
                        <p className="text-[#D1D1D1]">{belief.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto shadow-hover bg-[#F5F5F5] border-none animate-fade-up">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6 text-[#111111]">Ready to Partner With Us?</h2>
              <p className="text-xl text-[#5B5B5B] mb-10 max-w-2xl mx-auto">
                Discover how Suntrail AI Labs can help modernize your operations and drive measurable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">View Solutions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
