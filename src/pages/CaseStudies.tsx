import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "NorthPoint Logistics",
      location: "Toronto, Canada",
      industry: "Logistics & Supply Chain",
      challenge: "Manual order tracking consuming excessive resources",
      solution: "Implemented automated order tracking and notification system",
      results: [
        { icon: Clock, label: "Time Saved", value: "600+ hours/month" },
        { icon: DollarSign, label: "Cost Reduction", value: "40% operational savings" },
        { icon: TrendingUp, label: "Efficiency", value: "3× faster processing" },
      ],
    },
    {
      client: "TechVision Analytics",
      location: "New York, USA",
      industry: "Data Analytics",
      challenge: "Slow, manual reporting processes hindering decision-making",
      solution: "Deployed real-time BI dashboards using Power BI and Azure",
      results: [
        { icon: TrendingUp, label: "Speed Improvement", value: "40% faster insights" },
        { icon: Clock, label: "Reporting Time", value: "Real-time updates" },
        { icon: DollarSign, label: "Revenue Impact", value: "+25% data-driven decisions" },
      ],
    },
    {
      client: "GlobalPay Solutions",
      location: "London, UK",
      industry: "Financial Services",
      challenge: "High cloud infrastructure costs and complexity",
      solution: "Migrated to optimized Azure cloud infrastructure with cost management",
      results: [
        { icon: DollarSign, label: "Cost Savings", value: "35% reduction" },
        { icon: TrendingUp, label: "Performance", value: "50% faster processing" },
        { icon: Clock, label: "Uptime", value: "99.9% availability" },
      ],
    },
    {
      client: "InnovateCorp",
      location: "Berlin, Germany",
      industry: "Technology",
      challenge: "High volume of repetitive customer support inquiries",
      solution: "Built AI-powered chatbot system with natural language processing",
      results: [
        { icon: TrendingUp, label: "Automation", value: "70% ticket reduction" },
        { icon: Clock, label: "Response Time", value: "Instant responses" },
        { icon: DollarSign, label: "Cost Savings", value: "$50K annually" },
      ],
    },
    {
      client: "Summit Healthcare",
      location: "Vancouver, Canada",
      industry: "Healthcare",
      challenge: "Inefficient patient workflow management",
      solution: "Automated patient intake and scheduling system",
      results: [
        { icon: TrendingUp, label: "Efficiency", value: "50% improvement" },
        { icon: Clock, label: "Wait Time", value: "30% reduction" },
        { icon: DollarSign, label: "Patient Satisfaction", value: "+40% rating increase" },
      ],
    },
    {
      client: "FutureWorks",
      location: "Stockholm, Sweden",
      industry: "Professional Services",
      challenge: "Outdated client portal affecting engagement",
      solution: "Developed modern, responsive web portal with real-time features",
      results: [
        { icon: TrendingUp, label: "Engagement", value: "3× user activity" },
        { icon: Clock, label: "Load Time", value: "70% faster" },
        { icon: DollarSign, label: "Retention", value: "+45% client retention" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-40 bg-[#111111]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="font-poppins text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
              Client <span className="text-[#FFD84D]">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D1D1D1] font-light">
              Measurable results from businesses we've helped transform
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-smooth bg-white/5 border-white/10 hover:bg-white/10 animate-fade-up">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-[#FFD84D]/20 text-[#FFD84D] border-none">{study.industry}</Badge>
                    <Badge variant="outline" className="border-[#D1D1D1]/30 text-[#D1D1D1]">{study.location}</Badge>
                  </div>
                  <CardTitle className="font-poppins text-2xl mb-2 text-white">{study.client}</CardTitle>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h3 className="font-semibold text-sm text-[#FFD84D] uppercase mb-2">
                        Challenge
                      </h3>
                      <CardDescription className="text-base text-[#D1D1D1]">{study.challenge}</CardDescription>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-[#FFD84D] uppercase mb-2">
                        Solution
                      </h3>
                      <CardDescription className="text-base text-[#D1D1D1]">{study.solution}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-sm text-[#FFD84D] uppercase mb-4">
                    Results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 border border-white/10"
                      >
                        <result.icon className="h-8 w-8 text-[#FFD84D] mb-3" />
                        <p className="text-2xl font-bold mb-1 text-[#FFD84D]">{result.value}</p>
                        <p className="text-sm text-[#D1D1D1]">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
