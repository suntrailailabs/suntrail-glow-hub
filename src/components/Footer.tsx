import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/suntrail-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white mt-32">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Discover */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-6">Discover</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Client Success
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-white transition-smooth">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-6">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-white/70 hover:text-white transition-smooth">
                  Join Our Team
                </Link>
              </li>
              <li>
                <p className="text-sm text-white/70">Mississauga, ON, Canada</p>
              </li>
              <li>
                <a href="mailto:contact@suntrailailabs.com" className="text-sm text-white/70 hover:text-white transition-smooth">
                  contact@suntrailailabs.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-6">Follow</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/suntrail-ai-labs-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-smooth inline-flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Suntrail AI Labs" className="h-8 w-8" />
              <span className="font-heading font-semibold text-sm">Suntrail AI Labs</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Empowering businesses with intelligent design and automation.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">© 2025 Suntrail AI Labs Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-xs text-white/50 hover:text-white transition-smooth">
              Privacy
            </Link>
            <Link to="/contact" className="text-xs text-white/50 hover:text-white transition-smooth">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
