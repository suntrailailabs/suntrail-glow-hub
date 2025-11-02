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
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="font-heading text-5xl md:text-7xl font-semibold mb-4 text-[#111111]">
              Join the Future of <span className="text-[#FFD84D]">Intelligent Automation</span>
            </h1>
            <div className="w-32 h-1 bg-[#FFD84D] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#5B5B5B] font-light">
              Build cutting-edge solutions with a team of innovators and problem solvers
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h2 className="font-heading text-4xl font-semibold text-center mb-12 text-white">Our Values</h2>
            <Card className="shadow-soft bg-white/10 border-white/10">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                      <div className="h-2 w-2 bg-[#FFD84D] rounded-full flex-shrink-0"></div>
                      <p className="text-lg font-medium text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center animate-fade-up">
            <h2 className="font-heading text-4xl font-semibold mb-4 text-[#111111]">Open Positions</h2>
            <p className="text-xl text-[#5B5B5B]">Join our growing team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth bg-[#F5F5F5] border-none animate-fade-up">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-[#FFD84D]/10 flex items-center justify-center mb-4">
                    <position.icon className="h-6 w-6 text-[#FFD84D]" />
                  </div>
                  <CardTitle className="font-heading text-2xl font-semibold mb-2 text-[#111111]">{position.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-[#5B5B5B] mb-4">
                    {position.location}
                  </CardDescription>
                  <p className="text-[#111111]">{position.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {position.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-[#FFD84D] rounded-full flex-shrink-0 mt-2"></div>
                        <p className="text-sm text-[#5B5B5B]">{req}</p>
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
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6 text-white">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-[#D1D1D1] mb-10 max-w-2xl mx-auto">
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
