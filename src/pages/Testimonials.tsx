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
      <section className="py-24 md:py-40 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="font-poppins text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[#111111]">
              Client <span className="text-[#FFD84D]">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#111111]/80 font-light">
              Trusted by businesses across North America and Europe
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth bg-white border-none animate-fade-up">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FFD84D] text-[#FFD84D]" />
                    ))}
                  </div>
                  <p className="text-[#111111] mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-[#111111]/10 pt-4">
                    <p className="font-semibold text-[#111111]">{testimonial.author}</p>
                    <p className="text-sm text-[#111111]/70">{testimonial.role}</p>
                    <p className="text-sm text-[#111111]/70">{testimonial.location}</p>
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
