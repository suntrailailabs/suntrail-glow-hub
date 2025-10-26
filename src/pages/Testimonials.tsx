import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Suntrail's AI automations saved us 25+ hours every week!",
      author: "A.M., Marketing Director",
      location: "Toronto, CA",
      region: "North America",
    },
    {
      quote: "The automation setup reduced our manual reporting time from 3 hours to 10 minutes.",
      author: "L.J., COO",
      location: "New York, US",
      region: "North America",
    },
    {
      quote: "Our Shopify site was redesigned beautifully and conversions tripled.",
      author: "S.R., Owner",
      location: "Miami, US",
      region: "North America",
    },
    {
      quote: "Best consulting team for small businesses scaling fast.",
      author: "K.T., Founder",
      location: "Vancouver, CA",
      region: "North America",
    },
    {
      quote: "Their marketing strategy got us 10K followers in 2 months.",
      author: "M.H., Social Media Lead",
      location: "Dallas, US",
      region: "North America",
    },
    {
      quote: "Suntrail's AI chatbots now handle 70% of our customer inquiries automatically.",
      author: "J.P., Product Manager",
      location: "Chicago, US",
      region: "North America",
    },
    {
      quote: "Flawless integration with our CRM and automation setup.",
      author: "E.L., Growth Lead",
      location: "London, UK",
      region: "Europe",
    },
    {
      quote: "We used their AI automation to handle invoices — smooth and scalable.",
      author: "C.B., CFO",
      location: "Berlin, DE",
      region: "Europe",
    },
    {
      quote: "Amazing creative energy and reliable delivery.",
      author: "V.N., CEO",
      location: "Amsterdam, NL",
      region: "Europe",
    },
    {
      quote: "SEO improvements brought in 40% more qualified leads.",
      author: "F.H., Founder",
      location: "Paris, FR",
      region: "Europe",
    },
    {
      quote: "Their automation package changed our customer response speed overnight.",
      author: "S.D., COO",
      location: "Dublin, IE",
      region: "Europe",
    },
    {
      quote: "From onboarding to final delivery, everything felt premium.",
      author: "T.W., Director",
      location: "Lisbon, PT",
      region: "Europe",
    },
    {
      quote: "We now generate daily reports automatically via AI — a game changer!",
      author: "R.P., VP Ops",
      location: "Stockholm, SE",
      region: "Europe",
    },
    {
      quote: "Top-tier consulting. Worth every dollar.",
      author: "N.T., CTO",
      location: "Copenhagen, DK",
      region: "Europe",
    },
    {
      quote: "Our automated campaigns reached 200K impressions with minimal spend.",
      author: "A.G., Head of Growth",
      location: "Warsaw, PL",
      region: "Europe",
    },
  ];

  const regions = ["North America", "Europe"];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-lg text-muted-foreground">
            Trusted by businesses across North America and Europe
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-8"></div>
        </div>

        {/* Testimonials by Region */}
        {regions.map((region) => (
          <div key={region} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">{region}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials
                .filter((t) => t.region === region)
                .map((testimonial, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-hover transition-smooth">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
