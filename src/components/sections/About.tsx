import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Coffee, Lightbulb, Award, Users, Target } from "lucide-react";
const About = () => {
  const interests = [
    { icon: Lightbulb, title: "Innovation", description: "Always exploring new technologies and creative solutions", color: "bg-yellow-500" },
    { icon: Heart, title: "Problem Solving", description: "Passionate about turning challenges into opportunities", color: "bg-red-500" },
    { icon: Coffee, title: "Snacks & Coke", description: "Fueling creativity with good food and favorite drinks", color: "bg-amber-600" },
    { icon: Target, title: "Continuous Learning", description: "Committed to growth in tech and business", color: "bg-blue-500" },
  ];

  const achievements = [
    { icon: Award, title: "Academic Excellence", description: "Maintaining high performance in E-Business studies" },
    { icon: Users, title: "Team Collaboration", description: "Successfully worked across diverse teams at CelcomDigi" },
    { icon: Target, title: "Goal-Oriented", description: "Consistently achieving project milestones and objectives" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-rose-100"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-32 h-32 bg-primary opacity-10 rounded-full animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 border-rose-200 px-4 py-2">
              Get to know me
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A creative and analytical mind dedicated to bridging technology with business success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Bio Content */}
            <div className="space-y-8">
              <Card className="bg-white/70 backdrop-blur-md border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-primary-foreground" />
                    </div>
                    Who I Am
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a final-year student pursuing BSc (Hons) E-Business and Technology Management 
                      at YPC International College in collaboration with Liverpool John Moores University, UK. 
                      My journey combines the analytical rigor of technology with the creative flair of business innovation.
                    </p>
                    <p>
                      What drives me is the intersection of creativity and problem-solving, finding elegant 
                      solutions that not only work technically but also create meaningful impact for businesses and users alike.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Education Card */}
              <Card className="bg-gradient-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-heading text-xl font-semibold">
                        BSc (Hons) E-Business & Technology Management
                      </h4>
                      <p className="text-primary-foreground/90 font-medium">
                        YPC International College, Malaysia
                      </p>
                      <p className="text-primary-foreground/80 text-sm">
                        In collaboration with Liverpool John Moores University, UK
                      </p>
                      <Badge className="bg-white/20 text-white border-white/30 mt-2">
                        Expected Graduation: 2026
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interests & Achievements */}
            <div className="space-y-8">
              {/* Interests */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                    <Heart className="h-4 w-4 text-primary-foreground" />
                  </div>
                  What Inspires Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:scale-110 bg-white/80 backdrop-blur-sm border-rose-200">
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 ${interest.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                          <interest.icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {interest.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {interest.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                    <Award className="h-4 w-4 text-primary-foreground" />
                  </div>
                  Key Strengths
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-rose-200">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                            <achievement.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Quote/Philosophy */}
          <Card className="bg-white/80 backdrop-blur-md border-rose-200 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <blockquote className="text-xl font-medium text-foreground mb-4 italic">
                  "Innovation happens at the intersection of creativity and technology. 
                  I'm passionate about finding that sweet spot where business meets possibility."
                </blockquote>
                <p className="text-muted-foreground">— My Philosophy</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;