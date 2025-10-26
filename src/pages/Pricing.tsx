import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "Launch Fast",
      description: "For solo founders or startups who want a real digital system in days.",
      price: "$995",
      period: "one-time",
      features: [
        "48-hour MVP website",
        "Basic SEO setup",
        "12 ready-to-post designs",
        "1 email automation",
        "Analytics dashboard",
      ],
    },
    {
      name: "Growth",
      subtitle: "Automate & Scale",
      description: "For small teams ready to multiply output without hiring.",
      price: "$2,500",
      period: "/month",
      featured: true,
      features: [
        "Everything in Starter",
        "5 conversion-optimized web pages",
        "20 AI-assisted posts/month",
        "SEO + paid ad setup",
        "3 automation workflows",
      ],
    },
    {
      name: "Scale",
      subtitle: "Done-For-You Growth Engine",
      description: "For established brands ready to dominate.",
      price: "$4,500",
      period: "/month",
      features: [
        "Everything in Growth",
        "Full redesign & funnel optimization",
        "Google + Meta + LinkedIn campaigns",
        "CRM + pipeline automation",
        "Weekly optimization calls",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Pick the Growth Plan That{" "}
            <span className="relative">
              <span className="relative z-10">Fits Your Ambition</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/30 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't sell hours — we build ROI machines.
          </p>
          <div className="h-1 w-24 bg-foreground mx-auto mt-8"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`shadow-soft hover:shadow-hover transition-smooth ${
                plan.featured ? "border-primary border-4 relative" : "border-2"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-foreground px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground/80 mb-4">
                  {plan.subtitle}
                </CardDescription>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <Button size="lg" variant={plan.featured ? "default" : "outline"} className="w-full" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
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

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-hover border-2">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Don't overthink. Pick a plan. <br />We'll make sure it pays for itself.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Not sure which plan is right for you? Book a free audit and we'll help you decide.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Book a Free Audit</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
