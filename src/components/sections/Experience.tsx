import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    "Managed audience segmentation for targeted digital marketing campaigns",
    "Coordinated award submissions and recognition programs",
    "Developed comprehensive digital media reporting frameworks",
    "Provided strategic campaign support across multiple channels",
    "Conducted data analysis to optimize marketing performance",
    "Facilitated cross-team collaboration and administrative processes"
  ];

  const skills = [
    "Digital Marketing",
    "Data Analysis",
    "Campaign Management",
    "Audience Segmentation",
    "Reporting & Analytics",
    "Cross-team Collaboration"
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hands-on experience bridging digital marketing, data analysis, and technology management
            </p>
          </div>

          {/* Experience Card */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-primary text-primary-foreground">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    Digital Marketing Intern
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-primary-foreground/90">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">CelcomDigi Berhad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>June – September 2025</span>
                    </div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              {/* Key Responsibilities */}
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Key Responsibilities
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-sage-100 text-sage-700 hover:bg-sage-200 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Impact Statement */}
              <Card className="bg-sage-50 border-sage-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Impact</h4>
                  <p className="text-muted-foreground">
                    This internship strengthened my understanding of the connection between digital marketing, 
                    data analytics, and technology management. I gained valuable experience in streamlining 
                    data processes, optimizing campaign performance, and facilitating cross-functional collaboration 
                    in a fast-paced telecommunications environment.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;