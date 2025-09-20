import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Code, 
  Users, 
  Lightbulb,
  Database,
  Smartphone,
  Target,
  TrendingUp
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Digital Marketing & Analytics",
      icon: BarChart3,
      color: "sage",
      skills: [
        { name: "Campaign Management", level: 85 },
        { name: "Data Analysis", level: 90 },
        { name: "Audience Segmentation", level: 80 },
        { name: "Digital Media Reporting", level: 85 }
      ]
    },
    {
      title: "Data & Technology",
      icon: Database,
      color: "primary",
      skills: [
        { name: "Data Processing", level: 85 },
        { name: "Web Development", level: 75 },
        { name: "PHP Development", level: 70 },
        { name: "Database Management", level: 80 }
      ]
    },
    {
      title: "Business & Management",
      icon: TrendingUp,
      color: "accent",
      skills: [
        { name: "Project Management", level: 80 },
        { name: "E-Business Strategy", level: 85 },
        { name: "Market Analysis", level: 82 },
        { name: "Process Optimization", level: 78 }
      ]
    },
    {
      title: "Communication & Creativity",
      icon: Lightbulb,
      color: "secondary",
      skills: [
        { name: "Content Creation", level: 85 },
        { name: "Presentation Skills", level: 90 },
        { name: "Cross-team Collaboration", level: 88 },
        { name: "Creative Problem Solving", level: 85 }
      ]
    }
  ];

  const getIconBg = (color: string) => {
    switch (color) {
      case "sage": return "bg-sage-500";
      case "primary": return "bg-primary";
      case "accent": return "bg-accent";
      case "secondary": return "bg-secondary";
      default: return "bg-primary";
    }
  };

  return (
    <section id="skills" className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive blend of technical, analytical, and creative capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${getIconBg(category.color)} rounded-lg flex items-center justify-center`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 text-center">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Technical Proficiencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "HTML/CSS", "JavaScript", "PHP", "Responsive Design", 
                "Google Analytics", "Social Media Marketing", "SEO Basics",
                "Microsoft Office Suite", "Data Visualization", "A/B Testing"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium hover:bg-sage-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;