import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Lightbulb, Shield, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing what's possible with cutting-edge technology and creative solutions.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparency in every engagement, building trust through honest communication.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Measurable outcomes, not fluff. We focus on results that matter.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We Build, Automate, and Grow Digital Businesses
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-soft">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Suntrail AI Labs Inc. is a Canadian technology consulting studio that blends creativity,
                analytics, and automation to help businesses grow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in web design, AI-driven marketing, and automation solutions that save time
                and scale impact. Our mission is to empower businesses with intelligent tools and strategies
                that drive measurable results.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Placeholder */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="shadow-soft">
            <CardContent className="p-12">
              <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
              <p className="text-muted-foreground mb-8">
                Our diverse team of experts brings together decades of experience in technology,
                design, and business strategy.
              </p>
              <Button variant="default" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
