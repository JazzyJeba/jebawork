import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Coffee, Lightbulb } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Lightbulb, title: "Innovation", description: "Always exploring new technologies and creative solutions" },
    { icon: Heart, title: "Problem Solving", description: "Passionate about turning challenges into opportunities" },
    { icon: Coffee, title: "Snacks & Coke", description: "Fueling creativity with good food and favorite drinks" },
    { icon: GraduationCap, title: "Continuous Learning", description: "Committed to growth in tech and business" },
  ];

  return (
    <section id="about" className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A creative and analytical mind dedicated to bridging technology with business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a final-year student pursuing BSc (Hons) E-Business and Technology Management 
                  at YPC International College in collaboration with Liverpool John Moores University, UK. 
                  My journey combines the analytical rigor of technology with the creative flair of business innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What drives me is the intersection of creativity and problem-solving – finding elegant 
                  solutions that not only work technically but also create meaningful impact for businesses and users alike.
                </p>
              </div>

              {/* Education */}
              <Card className="bg-sage-100 border-sage-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        BSc (Hons) E-Business & Technology Management
                      </h4>
                      <p className="text-sage-600 text-sm mb-2">
                        Liverpool John Moores University, UK
                      </p>
                      <p className="text-sage-600 text-sm">
                        In collaboration with YPC International College, Malaysia
                      </p>
                      <p className="text-sage-600 text-sm font-medium">
                        Expected Graduation: 2026
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interests Grid */}
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                What Inspires Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <interest.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {interest.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {interest.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;