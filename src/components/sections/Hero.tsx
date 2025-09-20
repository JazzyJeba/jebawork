import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImage from "@/assets/jeba-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-sage-200">
              <img
                src={profileImage}
                alt="Jeba Priya a/p Gnanapregasam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-primary opacity-20"></div>
          </div>

          {/* Name and Title */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4">
            Jeba Priya
          </h1>
          <h2 className="font-heading text-xl md:text-2xl font-medium text-primary mb-6">
            Final-Year E-Business & Technology Management Student
          </h2>
          <p className="text-lg md:text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
            Digital Media & Web Enthusiast | Bridging creativity with problem-solving to deliver innovative solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Quick Bio */}
          <div className="max-w-3xl mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Passionate about leveraging technology to solve real-world business challenges. 
              Currently completing my BSc (Hons) in E-Business & Technology Management at 
              Liverpool John Moores University, with hands-on experience in digital marketing 
              and data analysis from my internship at CelcomDigi Berhad.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-sage-400" />
      </div>
    </section>
  );
};

export default Hero;