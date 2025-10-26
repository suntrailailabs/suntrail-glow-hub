import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Zap, Brain, TrendingUp, Users, Palette } from "lucide-react";

const Careers = () => {
  const values = [
    "Ownership over titles",
    "Speed over perfection",
    "Learning over ego",
    "Execution over theory",
  ];

  const positions = [
    {
      icon: Code,
      title: "Web Designer",
      location: "Remote - Canada/India",
      description: "Build sleek, high-converting web experiences using modern frameworks.",
      requirements: [
        "Tools: React, Next.js, Tailwind",
        "Strong eye for minimalism & conversion",
      ],
      salary: "$2,500–$3,500/month (contract)",
    },
    {
      icon: Zap,
      title: "Automation Engineer",
      location: "Remote",
      description: "Automate workflows, CRMs, and API integrations.",
      requirements: [
        "Tools: n8n, Zapier, Make, Python",
        "Experience with APIs & webhooks",
      ],
      salary: "$2,000–$3,000/month (contract)",
    },
    {
      icon: Brain,
      title: "AI Prompt Engineer",
      location: "Remote",
      description: "Help clients use AI better. Build smart prompt systems for automation.",
      requirements: [
        "Tools: GPT, Claude, OpenAI APIs",
        "Experience with text-to-process workflows",
      ],
      salary: "$2,500–$4,000/month",
    },
    {
      icon: TrendingUp,
      title: "SEO & Performance Marketer",
      location: "Remote",
      description: "Drive traffic and conversions through organic + paid strategy.",
      requirements: [
        "Google Ads, Meta, SEMrush, Ahrefs",
        "Performance analytics mindset",
      ],
      salary: "$2,000–$3,000/month",
    },
    {
      icon: Users,
      title: "Project Manager",
      location: "Remote - Canada",
      description: "Manage fast-moving client projects with clear deliverables.",
      requirements: [
        "Excellent communicator & organizer",
        "Experience with ClickUp / Notion",
      ],
      salary: "$3,000–$4,000/month",
    },
    {
      icon: Palette,
      title: "Junior Content Designer",
      location: "Remote",
      description: "Design social media content for brands that want to grow fast.",
      requirements: [
        "Tools: Canva, Figma",
        "AI-assisted post generation",
      ],
      salary: "$1,200–$1,800/month",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Work With People Who Build{" "}
            <span className="relative">
              <span className="relative z-10">Systems, Not Excuses</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/30 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not a traditional agency — we're a growth lab. If you want to learn fast, ship fast, and work with ambitious global clients, this is the place.
          </p>
          <div className="h-1 w-24 bg-foreground mx-auto mt-8"></div>
        </div>

        {/* Core Values */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="shadow-soft border-2">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                    <div className="h-2 w-2 bg-foreground rounded-full flex-shrink-0"></div>
                    <p className="text-lg font-semibold text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth border-2">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <position.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-muted-foreground mb-4">
                    {position.location}
                  </CardDescription>
                  <p className="text-foreground/90">{position.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {position.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-foreground rounded-full flex-shrink-0 mt-2"></div>
                        <p className="text-sm text-foreground/80">{req}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg mb-4">
                    <p className="text-lg font-bold text-foreground">{position.salary}</p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-hover border-2">
            <CardContent className="p-12 md:p-16 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Don't wait for permission — build the future with us.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Submit your application and let's see if we're a good fit.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Careers;
