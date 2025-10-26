import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    // North America
    {
      quote: "They built our automation system in 48 hours — ROI within a week.",
      author: "Lisa M.",
      role: "Marketing Director",
      location: "Toronto, Canada",
    },
    {
      quote: "We cut 70% of manual work — now the team focuses on growth.",
      author: "David K.",
      role: "COO",
      location: "Berlin, Germany",
    },
    {
      quote: "Clean, bold, efficient. Suntrail delivered what other agencies promised.",
      author: "Sophie L.",
      role: "Founder",
      location: "London, UK",
    },
    {
      quote: "Best consulting partner we've had — measurable impact from day one.",
      author: "John R.",
      role: "CEO",
      location: "New York, USA",
    },
    {
      quote: "Suntrail's AI automations saved us 25+ hours every week!",
      author: "Amanda M.",
      role: "Operations Manager",
      location: "Toronto, Canada",
    },
    {
      quote: "The automation setup reduced our manual reporting time from 3 hours to 10 minutes.",
      author: "Lucas J.",
      role: "COO",
      location: "New York, USA",
    },
    {
      quote: "Our Shopify site was redesigned beautifully and conversions tripled.",
      author: "Sarah R.",
      role: "Owner",
      location: "Miami, USA",
    },
    {
      quote: "Best consulting team for small businesses scaling fast.",
      author: "Kevin T.",
      role: "Founder",
      location: "Vancouver, Canada",
    },
    {
      quote: "Their marketing strategy got us 10K followers in 2 months.",
      author: "Maria H.",
      role: "Social Media Lead",
      location: "Dallas, USA",
    },
    {
      quote: "Suntrail's AI chatbots now handle 70% of our customer inquiries automatically.",
      author: "James P.",
      role: "Product Manager",
      location: "Chicago, USA",
    },
    // Europe
    {
      quote: "Flawless integration with our CRM and automation setup.",
      author: "Emma L.",
      role: "Growth Lead",
      location: "London, UK",
    },
    {
      quote: "We used their AI automation to handle invoices — smooth and scalable.",
      author: "Christian B.",
      role: "CFO",
      location: "Berlin, Germany",
    },
    {
      quote: "Amazing creative energy and reliable delivery.",
      author: "Viktor N.",
      role: "CEO",
      location: "Amsterdam, Netherlands",
    },
    {
      quote: "SEO improvements brought in 40% more qualified leads.",
      author: "François H.",
      role: "Founder",
      location: "Paris, France",
    },
    {
      quote: "Their automation package changed our customer response speed overnight.",
      author: "Siobhan D.",
      role: "COO",
      location: "Dublin, Ireland",
    },
    {
      quote: "From onboarding to final delivery, everything felt premium.",
      author: "Thomas W.",
      role: "Director",
      location: "Lisbon, Portugal",
    },
    {
      quote: "We now generate daily reports automatically via AI — a game changer!",
      author: "Robert P.",
      role: "VP Operations",
      location: "Stockholm, Sweden",
    },
    {
      quote: "Top-tier consulting. Worth every dollar.",
      author: "Niklas T.",
      role: "CTO",
      location: "Copenhagen, Denmark",
    },
    {
      quote: "Our automated campaigns reached 200K impressions with minimal spend.",
      author: "Anna G.",
      role: "Head of Growth",
      location: "Warsaw, Poland",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What Our Clients{" "}
            <span className="relative">
              <span className="relative z-10">Actually Say</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/30 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Real results from real businesses across North America and Europe
          </p>
          <div className="h-1 w-24 bg-foreground mx-auto mt-8"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth border-2">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
