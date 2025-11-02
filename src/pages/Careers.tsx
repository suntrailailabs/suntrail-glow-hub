import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Bot, LineChart, Code, Users } from "lucide-react";

const Careers = () => {
  const values = [
    "Innovation and Excellence",
    "Collaboration and Teamwork",
    "Continuous Learning",
    "Client Success Focus",
  ];

  const positions = [
    {
      icon: Bot,
      title: "AI Automation Specialist",
      location: "Remote",
      description: "Design and implement AI-powered automation solutions for enterprise clients.",
      requirements: [
        "Experience with n8n, Python, and AI APIs",
        "Strong problem-solving skills",
        "Client-facing communication abilities",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Engineer",
      location: "Mississauga, ON / Remote",
      description: "Build and manage scalable cloud infrastructure across Azure, AWS, and GCP.",
      requirements: [
        "3+ years cloud infrastructure experience",
        "Azure/AWS/GCP certifications preferred",
        "IaC experience (Terraform, CloudFormation)",
      ],
    },
    {
      icon: Code,
      title: "Frontend Developer",
      location: "Remote",
      description: "Create modern, responsive web applications using React and TypeScript.",
      requirements: [
        "Proficiency in React, TypeScript, Tailwind CSS",
        "Experience with modern web frameworks",
        "Strong UI/UX sensibility",
      ],
    },
    {
      icon: LineChart,
      title: "Business Analyst",
      location: "Mississauga, ON / Remote",
      description: "Bridge business requirements with technical solutions for client projects.",
      requirements: [
        "Experience in technology consulting",
        "Strong analytical and documentation skills",
        "Excellent stakeholder management",
      ],
    },
    {
      icon: Users,
      title: "Project Manager",
      location: "Mississauga, ON / Remote",
      description: "Lead client engagements and ensure successful project delivery.",
      requirements: [
        "PMP or equivalent certification preferred",
        "Experience managing technical projects",
        "Strong leadership and communication",
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
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Build cutting-edge solutions with a team of innovators and problem solvers
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h2 className="font-heading text-4xl font-semibold text-center mb-16 text-foreground">Our Values</h2>
            <Card className="shadow-card bg-background">
              <CardContent className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-4 p-6 bg-secondary rounded-sm">
                      <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></div>
                      <p className="text-base font-medium text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-20 text-center animate-fade-up">
            <h2 className="font-heading text-4xl font-semibold mb-6 text-foreground">Open Positions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Join our growing team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth bg-card animate-fade-up">
                <CardHeader>
                  <div className="h-12 w-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                    <position.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl font-semibold mb-3 text-foreground">{position.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wide">
                    {position.location}
                  </CardDescription>
                  <p className="text-foreground leading-relaxed">{position.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {position.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{req}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
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
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Submit your application and join our mission to transform businesses through intelligent technology.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
