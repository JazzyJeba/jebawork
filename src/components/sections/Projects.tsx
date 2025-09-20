import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Brain,
  ShoppingCart,
  User,
  Target
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SphynxSense",
      year: "2024",
      description: "AI-powered stress detection system for cats, combining innovative technology with comprehensive market analysis and prototype development.",
      icon: Brain,
      color: "bg-sage-500",
      technologies: ["AI/ML", "Market Research", "Prototype Design", "Data Analysis"],
      features: [
        "AI-based stress detection algorithms",
        "Comprehensive market analysis",
        "Prototype concept development",
        "User experience design"
      ],
      type: "AI/ML Project"
    },
    {
      title: "E-Commerce Website",
      year: "2024", 
      description: "Fully responsive smartphone shop featuring modern design, shopping cart functionality, and complete checkout simulation.",
      icon: ShoppingCart,
      color: "bg-primary",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Responsive Design"],
      features: [
        "Product catalog with filtering",
        "Add-to-cart functionality", 
        "Checkout process simulation",
        "Mobile-responsive design"
      ],
      type: "Web Development"
    },
    {
      title: "Personal Portfolio Website",
      year: "2025",
      description: "Modern, professional portfolio website showcasing personal branding with smooth animations and responsive design.",
      icon: User,
      color: "bg-accent",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Modern Design"],
      features: [
        "Responsive design system",
        "Smooth scroll animations",
        "Interactive components",
        "SEO optimization"
      ],
      type: "Personal Branding"
    },
    {
      title: "Custom Audience Segment Management",
      year: "2025",
      description: "Streamlined data processes for digital advertising campaigns at CelcomDigi, optimizing audience targeting and campaign performance.",
      icon: Target,
      color: "bg-secondary",
      technologies: ["Data Analysis", "Campaign Management", "Process Optimization"],
      features: [
        "Audience segmentation automation",
        "Performance tracking systems",
        "Data process optimization",
        "Cross-team collaboration tools"
      ],
      type: "Digital Marketing"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative solutions spanning AI, web development, and digital marketing
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{project.year}</span>
                          <Badge variant="outline" className="text-xs">
                            {project.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-sage-100 text-sage-700 hover:bg-sage-200 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    {project.title !== "Custom Audience Segment Management" && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="flex-1"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in collaborating on your next project?
            </p>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-primary hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;