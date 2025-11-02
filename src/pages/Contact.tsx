import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message received!",
      description: "We'll respond within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-40 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="font-poppins text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white">
              Let's Build Something <span className="text-[#FFD84D]">Intelligent</span>
            </h1>
            <div className="w-32 h-1 bg-[#FFD84D] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#D1D1D1] font-light">
              Schedule a consultation to discuss your project and technology needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="font-poppins text-3xl text-white">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="bg-white text-[#111111]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className="bg-white text-[#111111]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company name"
                        className="bg-white text-[#111111]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-white">
                        Service Interest *
                      </Label>
                      <Select name="service" required>
                        <SelectTrigger className="bg-white text-[#111111]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-automation">AI & Automation Consulting</SelectItem>
                          <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                          <SelectItem value="web-dev">Web & App Development</SelectItem>
                          <SelectItem value="analytics">Data Analytics</SelectItem>
                          <SelectItem value="all">All Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-white">
                        Budget Range
                      </Label>
                      <Select name="budget">
                        <SelectTrigger className="bg-white text-[#111111]">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-plus">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your project and goals..."
                        rows={6}
                        className="bg-white text-[#111111]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-soft bg-white/5 border-white/10">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#FFD84D]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#FFD84D]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Location</h3>
                      <p className="text-sm text-[#D1D1D1]">Mississauga, ON, Canada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#FFD84D]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#FFD84D]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Email</h3>
                      <a
                        href="mailto:info@suntrailailabs.com"
                        className="text-sm text-[#D1D1D1] hover:text-[#FFD84D] transition-smooth"
                      >
                        info@suntrailailabs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#FFD84D]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#FFD84D]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Response Time</h3>
                      <p className="text-sm text-[#D1D1D1]">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
