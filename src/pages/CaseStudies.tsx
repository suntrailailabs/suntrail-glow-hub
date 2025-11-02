import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign, Star } from "lucide-react";

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

  const testimonials = [
    {
      quote: "Suntrail AI Labs transformed our manual workflows into intelligent automated systems. The ROI was immediate.",
      author: "Sarah Chen",
      role: "VP of Operations",
      location: "Toronto, Canada",
    },
    {
      quote: "Their cloud infrastructure expertise helped us scale efficiently while reducing costs by 35%.",
      author: "Michael Schmidt",
      role: "CTO",
      location: "Berlin, Germany",
    },
    {
      quote: "Professional, responsive, and results-driven. Our web application exceeded expectations.",
      author: "Emma Thompson",
      role: "Product Director",
      location: "London, UK",
    },
    {
      quote: "The data analytics solution they built provides insights we never thought possible.",
      author: "James Rodriguez",
      role: "CEO",
      location: "New York, USA",
    },
    {
      quote: "Outstanding AI automation implementation. Saved our team 600+ hours monthly.",
      author: "Lisa Anderson",
      role: "Operations Manager",
      location: "Vancouver, Canada",
    },
    {
      quote: "Best technology partner we've worked with. Delivered on time and within budget.",
      author: "Thomas Weber",
      role: "COO",
      location: "Amsterdam, Netherlands",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 md:py-48 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center animate-fade-up">
            <h1 className="font-heading text-5xl md:text-7xl font-semibold mb-8 text-foreground">
              Client <span className="text-primary">Success</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Measurable results and testimonials from businesses we've helped transform
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-10 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth bg-background animate-fade-up">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-foreground border-none font-medium">{study.industry}</Badge>
                    <Badge variant="outline" className="border-border text-muted-foreground">{study.location}</Badge>
                  </div>
                  <CardTitle className="font-heading text-2xl font-semibold mb-4 text-foreground">{study.client}</CardTitle>
                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="font-semibold text-xs text-primary uppercase tracking-wide mb-3">
                        Challenge
                      </h3>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">{study.challenge}</CardDescription>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs text-primary uppercase tracking-wide mb-3">
                        Solution
                      </h3>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">{study.solution}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-xs text-primary uppercase tracking-wide mb-6">
                    Results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex flex-col items-center text-center p-6 rounded-sm bg-secondary border border-border"
                      >
                        <result.icon className="h-8 w-8 text-primary mb-4" />
                        <p className="text-2xl font-semibold mb-2 text-foreground">{result.value}</p>
                        <p className="text-sm text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6 text-foreground">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Trusted by businesses across North America and Europe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth bg-card animate-fade-up">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-8 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-6">
                    <p className="font-semibold text-foreground mb-1">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
