import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Phone,
  ArrowUp,
  Heart
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-sage-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold text-white">
                Jeba Priya
              </h3>
              <p className="text-sage-300 leading-relaxed">
                Final-Year E-Business & Technology Management Student passionate about 
                bridging creativity with technology to deliver innovative solutions.
              </p>
              <p className="text-sm text-sage-400">
                Liverpool John Moores University, UK
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {[
                  { href: "#about", label: "About" },
                  { href: "#experience", label: "Experience" },
                  { href: "#skills", label: "Skills" },
                  { href: "#services", label: "Services" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" }
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-sage-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg">Let's Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:jebapriyaa30@gmail.com"
                  className="flex items-center space-x-3 text-sage-300 hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-4 w-4" />
                  <span>jebapriyaa30@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/601114283755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sage-300 hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp: 01114283755</span>
                </a>
                <a
                  href="https://linkedin.com/in/jeba-priya-881b73313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sage-300 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              {/* Back to Top Button */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="mt-4 border-sage-600 text-sage-300 hover:bg-sage-800 hover:text-white"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-sage-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <p className="text-sage-400 text-sm">
                © {currentYear} Jeba Priya a/p Gnanapregasam. All rights reserved.
              </p>

              {/* Fun Footer Note */}
              <p className="text-sage-400 text-sm flex items-center">
                Built with{" "}
                <Heart className="h-4 w-4 mx-1 text-red-400" />{" "}
                and lots of snacks & Coke
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;