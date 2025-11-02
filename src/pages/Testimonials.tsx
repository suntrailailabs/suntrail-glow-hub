import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
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
              Client <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Trusted by businesses across North America and Europe
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth bg-background animate-fade-up">
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

export default Testimonials;
