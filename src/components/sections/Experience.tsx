import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Target, TrendingUp, Users, BarChart3, Award } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    { text: "Managed audience segmentation for targeted digital marketing campaigns", icon: Target },
    { text: "Coordinated award submissions and recognition programs", icon: Award },
    { text: "Developed comprehensive digital media reporting frameworks", icon: BarChart3 },
    { text: "Provided strategic campaign support across multiple channels", icon: TrendingUp },
    { text: "Conducted data analysis to optimize marketing performance", icon: BarChart3 },
    { text: "Facilitated cross-team collaboration and administrative processes", icon: Users }
  ];

  const skills = [
    "Digital Marketing",
    "Data Analysis", 
    "Campaign Management",
    "Audience Segmentation",
    "Reporting & Analytics",
    "Cross-team Collaboration"
  ];

  const highlights = [
    { title: "Campaign Optimization", value: "15%", description: "Average improvement in campaign performance" },
    { title: "Data Processing", value: "500+", description: "Records processed weekly" },
    { title: "Team Collaboration", value: "5+", description: "Cross-functional teams worked with" },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sage-25 to-sage-50"></div>
      <div className="absolute top-16 right-20 w-48 h-48 bg-primary opacity-5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-sage-300 opacity-20 rounded-full animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
              Professional Journey
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              My{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hands-on experience bridging digital marketing, data analysis, and technology management
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Experience Card */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-md border-sage-200">
                <CardHeader className="bg-gradient-primary text-primary-foreground relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl font-bold mb-2">
                          Digital Marketing Intern
                        </CardTitle>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">CelcomDigi Berhad</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>June – September 2025</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>Malaysia</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Building2 className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                  {/* Key Responsibilities */}
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                        <Target className="h-4 w-4 text-primary-foreground" />
                      </div>
                      Key Responsibilities
                    </h3>
                    <div className="grid gap-4">
                      {responsibilities.map((responsibility, index) => (
                        <Card key={index} className="bg-sage-50 border-sage-200 hover:shadow-md transition-all duration-300 hover:scale-105">
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                <responsibility.icon className="h-4 w-4 text-primary-foreground" />
                              </div>
                              <p className="text-muted-foreground">{responsibility.text}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Skills Gained */}
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                        <TrendingUp className="h-4 w-4 text-primary-foreground" />
                      </div>
                      Skills & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          className="bg-sage-100 text-sage-700 hover:bg-sage-200 transition-all duration-200 hover:scale-110 px-4 py-2"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Highlights Sidebar */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Impact Highlights
              </h3>
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-md border-sage-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{highlight.value}</div>
                    <div className="font-semibold text-foreground mb-1">{highlight.title}</div>
                    <div className="text-sm text-muted-foreground">{highlight.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <Card className="bg-gradient-to-r from-sage-100 to-sage-200 border-sage-300 shadow-xl">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="font-heading text-2xl font-semibold text-foreground mb-4">Key Learning Outcomes</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  This internship strengthened my understanding of the connection between digital marketing, 
                  data analytics, and technology management. I gained valuable experience in streamlining 
                  data processes, optimizing campaign performance, and facilitating cross-functional collaboration 
                  in a fast-paced telecommunications environment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;