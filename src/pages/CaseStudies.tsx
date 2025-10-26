import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "NordicTech",
      location: "Stockholm, Sweden",
      industry: "Technology",
      challenge: "Manual data entry consuming 30+ hours per week",
      solution: "Implemented AI-powered automation workflows",
      results: [
        { icon: Clock, label: "Time Saved", value: "70% automation" },
        { icon: DollarSign, label: "Cost Savings", value: "$15K/month" },
        { icon: TrendingUp, label: "Efficiency Gain", value: "3x faster processing" },
      ],
    },
    {
      client: "Maple Digital",
      location: "Toronto, Canada",
      industry: "Digital Marketing",
      challenge: "Low organic search visibility and traffic",
      solution: "Comprehensive SEO strategy with content optimization",
      results: [
        { icon: TrendingUp, label: "Traffic Increase", value: "142% in 90 days" },
        { icon: TrendingUp, label: "Keyword Rankings", value: "Top 3 for 15 terms" },
        { icon: DollarSign, label: "Lead Generation", value: "+85% qualified leads" },
      ],
    },
    {
      client: "HealthTech Solutions",
      location: "New York, USA",
      industry: "Healthcare Technology",
      challenge: "Outdated website affecting conversion rates",
      solution: "Complete website redesign with conversion optimization",
      results: [
        { icon: TrendingUp, label: "Conversion Rate", value: "+215% increase" },
        { icon: Clock, label: "Page Load Time", value: "60% faster" },
        { icon: DollarSign, label: "Revenue Impact", value: "+$120K in Q1" },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-lg text-muted-foreground">
            Real results from businesses we've helped transform
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-8"></div>
        </div>

        {/* Case Studies */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="secondary">{study.industry}</Badge>
                  <Badge variant="outline">{study.location}</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Client: {study.client}</CardTitle>
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-2">
                      Challenge
                    </h3>
                    <CardDescription className="text-base">{study.challenge}</CardDescription>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-2">
                      Solution
                    </h3>
                    <CardDescription className="text-base">{study.solution}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase mb-4">
                  Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.results.map((result, resultIndex) => (
                    <div
                      key={resultIndex}
                      className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/30"
                    >
                      <result.icon className="h-8 w-8 text-primary mb-3" />
                      <p className="text-2xl font-bold mb-1">{result.value}</p>
                      <p className="text-sm text-muted-foreground">{result.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
