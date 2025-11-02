import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/suntrail-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Suntrail AI Labs" className="h-10 w-10" />
              <span className="font-bold text-lg">Suntrail AI Labs</span>
            </Link>
            <p className="text-muted-foreground text-sm">Empowering businesses with intelligent design & automation.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground">📍 Mississauga, ON, Canada</p>
              <p className="text-sm text-muted-foreground">📧 contact@suntrailailabs.com</p>
            </div>
            <a
              href="https://www.linkedin.com/company/suntrail-ai-labs-inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2025 Suntrail AI Labs Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
