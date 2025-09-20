import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Code, 
  Users, 
  Lightbulb,
  Database,
  Smartphone,
  Target,
  TrendingUp,
  Star
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Digital Marketing & Analytics",
      icon: BarChart3,
      color: "bg-sage-500",
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
      color: "bg-primary",
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
      color: "bg-accent",
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
      color: "bg-yellow-500",
      skills: [
        { name: "Content Creation", level: 85 },
        { name: "Presentation Skills", level: 90 },
        { name: "Cross-team Collaboration", level: 88 },
        { name: "Creative Problem Solving", level: 85 }
      ]
    }
  ];

  const topSkills = [
    { name: "Data Analysis", level: 90, icon: BarChart3 },
    { name: "Presentation Skills", level: 90, icon: Users },
    { name: "Cross-team Collaboration", level: 88, icon: Users },
    { name: "Campaign Management", level: 85, icon: Target },
  ];

  const technologies = [
    "HTML/CSS", "JavaScript", "PHP", "Responsive Design", 
    "Google Analytics", "Social Media Marketing", "SEO Basics",
    "Microsoft Office Suite", "Data Visualization", "A/B Testing"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-white to-sage-100"></div>
      <div className="absolute top-20 left-16 w-40 h-40 bg-primary opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-sage-300 opacity-20 rounded-full animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200 px-4 py-2">
              Technical Capabilities
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Skills &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive blend of technical, analytical, and creative capabilities
            </p>
          </div>

          {/* Top Skills Highlight */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
              Top Strengths
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {topSkills.map((skill, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-md border-sage-200 hover:shadow-xl transition-all duration-500 hover:scale-110 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform duration-300">
                      <skill.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                    <div className="text-2xl font-bold text-primary mb-2">{skill.level}%</div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interactive Skills Categories */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
              Skill Categories
            </h3>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-gradient-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-white/80 backdrop-blur-sm text-muted-foreground hover:bg-sage-100 border border-sage-200'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>

            {/* Active Category Skills */}
            <Card className="bg-white/80 backdrop-blur-md border-sage-200 shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${skillCategories[activeCategory].color} rounded-lg flex items-center justify-center`}>
                    {React.createElement(skillCategories[activeCategory].icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {skillCategories[activeCategory].title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technologies */}
          <Card className="bg-gradient-to-r from-sage-100 to-sage-200 border-sage-300 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Technical Proficiencies
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tools and technologies I work with regularly
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/80 text-sage-700 hover:bg-white hover:scale-110 transition-all duration-200 px-4 py-2 shadow-md"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;