import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Lightbulb, Shield, Target, Zap } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const beliefs = [
    {
      icon: Lightbulb,
      title: "Simplicity scales.",
      description: "Complex systems break. We build simple, elegant solutions that work at any scale.",
    },
    {
      icon: Zap,
      title: "Automation beats delegation.",
      description: "Why hire when you can automate? We free your team to focus on what matters.",
    },
    {
      icon: Target,
      title: "Design isn't art — it's conversion with style.",
      description: "Every pixel has a purpose. Beautiful design that drives measurable results.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            We Don't Sell Design.{" "}
            <span className="relative">
              <span className="relative z-10">We Sell Performance.</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/30 -rotate-1"></span>
            </span>
          </h1>
          <div className="h-1 w-24 bg-foreground mx-auto mt-8"></div>
        </div>

        {/* Team Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <img src={aboutTeamImage} alt="Our team collaborating" className="w-full h-[400px] object-cover rounded-2xl shadow-hover" />
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="shadow-soft border-2">
            <CardContent className="p-10 md:p-14">
              <p className="text-xl text-foreground leading-relaxed mb-6">
                Suntrail AI Labs is built for growth-minded teams that value outcomes over activity.
              </p>
              <p className="text-xl text-foreground leading-relaxed mb-6">
                We create digital systems that generate leads, automate work, and multiply profit — all while you sleep.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                <p className="text-lg text-foreground/90">
                  To help businesses scale without more headcount — through intelligent design and automation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Beliefs */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Core Beliefs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {beliefs.map((belief, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth border-2">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <belief.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{belief.title}</h3>
                  <p className="text-muted-foreground">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-soft border-2">
            <CardContent className="p-10 md:p-12 text-center">
              <h2 className="font-serif text-3xl font-bold mb-6">Let's Build Something That Works</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to scale smarter? Book a free consultation and see how we can transform your operations.
              </p>
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                <p className="text-sm text-foreground">
                  📍 Mississauga, ON, Canada
                </p>
                <p className="text-sm text-foreground">
                  📧 info@suntrailailabs.com
                </p>
              </div>
              <Button size="lg" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
