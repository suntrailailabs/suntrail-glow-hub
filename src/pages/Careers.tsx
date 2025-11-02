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
            <h1 className="font-poppins text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-[#111111]">
              Join the Future of <span className="text-[#FFD84D]">Intelligent Automation</span>
            </h1>
            <div className="w-32 h-1 bg-[#FFD84D] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#111111]/80 font-light">
              Build cutting-edge solutions with a team of innovators and problem solvers
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h2 className="font-poppins text-4xl font-bold text-center mb-12 text-[#111111]">Our Values</h2>
            <Card className="shadow-soft bg-[#F8F8F8] border-none">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <div className="h-2 w-2 bg-[#FFD84D] rounded-full flex-shrink-0"></div>
                      <p className="text-lg font-medium text-[#111111]">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center animate-fade-up">
            <h2 className="font-poppins text-4xl font-bold mb-4 text-[#111111]">Open Positions</h2>
            <p className="text-xl text-[#111111]/70">Join our growing team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth bg-white border-none animate-fade-up">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-[#FFD84D]/20 flex items-center justify-center mb-4">
                    <position.icon className="h-6 w-6 text-[#FFD84D]" />
                  </div>
                  <CardTitle className="font-poppins text-2xl mb-2 text-[#111111]">{position.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-[#111111]/70 mb-4">
                    {position.location}
                  </CardDescription>
                  <p className="text-[#111111]/80">{position.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {position.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-[#FFD84D] rounded-full flex-shrink-0 mt-2"></div>
                        <p className="text-sm text-[#111111]/70">{req}</p>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6 text-[#111111]">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-[#111111]/70 mb-10 max-w-2xl mx-auto">
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
