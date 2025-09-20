import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, MapPin, Calendar, Star } from "lucide-react";
import profileImage from "@/assets/jeba-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { label: "Years of Study", value: "3+", icon: Calendar },
    { label: "Projects Completed", value: "4+", icon: Star },
    { label: "Technologies", value: "10+", icon: MapPin },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 right-16 w-48 h-48 bg-sage-300 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary opacity-10 rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="flex items-center space-x-4">
                <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for opportunities
                </Badge>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Jeba{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Priya
                  </span>
                </h1>
                <h2 className="font-heading text-xl md:text-2xl font-medium text-primary">
                  E-Business & Technology Management Student
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Bridging creativity with technology to deliver innovative solutions. 
                  Passionate about digital marketing, data analysis, and web development.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-white/60 backdrop-blur-sm border-sage-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4 text-center">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <stat.icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-primary hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Content - Profile & Info Cards */}
            <div className="relative">
              {/* Main Profile Card */}
              <Card className="bg-white/80 backdrop-blur-md shadow-2xl border-0 overflow-hidden group">
                <CardContent className="p-8">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl ring-4 ring-sage-200 group-hover:ring-sage-300 transition-all duration-300">
                      <img
                        src={profileImage}
                        alt="Jeba Priya a/p Gnanapregasam"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                      <Star className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Jeba Priya a/p Gnanapregasam
                      </h3>
                      <p className="text-muted-foreground">
                        Liverpool John Moores University
                      </p>
                    </div>

                    {/* Quick Info */}
                    <div className="space-y-2">
                      <Badge variant="outline" className="bg-sage-50">
                        Expected Graduation: 2026
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50">
                        CelcomDigi Intern
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Info Cards */}
              <Card className="absolute -left-6 top-8 bg-white/90 backdrop-blur-sm shadow-lg border-sage-200 max-w-48 hidden lg:block transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -right-8 bottom-8 bg-white/90 backdrop-blur-sm shadow-lg border-sage-200 max-w-48 hidden lg:block transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">4+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Currently seeking opportunities to apply my knowledge in e-business, technology management, 
              and digital marketing. Let's connect and explore how I can contribute to your next project!
            </p>
            
            {/* Scroll Indicator */}
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-muted-foreground">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-sage-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-sage-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;