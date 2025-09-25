import React, { useState } from "react";
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
  Target,
  Star,
  Award,
  TrendingUp
} from "lucide-react";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      title: "SphynxSense",
      year: "2024",
      description: "AI-powered stress detection system for cats, combining innovative technology with comprehensive market analysis and prototype development.",
      icon: Brain,
      color: "bg-rose-500",
      gradient: "from-rose-500 to-rose-600",
      technologies: ["AI/ML", "Market Research", "Prototype Design", "Data Analysis"],
      features: [
        "AI-based stress detection algorithms",
        "Comprehensive market analysis",
        "Prototype concept development",
        "User experience design"
      ],
      type: "AI/ML Project",
      status: "Completed",
      impact: "Academic Excellence",
      id: "sphynxsense"
    },
    {
      title: "Smartphone Recommendation Web App",
      year: "2024", 
      description: "Fully responsive smartphone recommendation platform built with dynamic PHP, JSON-driven data architecture, and Bootstrap-powered UI, simulating personalized user experiences, reviews, and smartphone browsing.",
      icon: ShoppingCart,
      color: "bg-primary",
      gradient: "from-primary to-blue-600",
      technologies: ["PHP", "JSON", "HTML & CSS", "JavaScript & jQuery", "Bootstrap 4"],
      features: [
        "Responsive design for mobile and desktop",
        "Object-oriented PHP architecture", 
        "Clean navigation and site structure",
        "Master layout for consistent user experience",
        "Progressive enhancement for better accessibility"
      ],
      type: "Web Development",
      status: "Completed",
      impact: "Technical Skills",
      id: "ecommerce"
    },
    {
      title: "Personal Portfolio Website",
      year: "2025",
      description: "Modern, professional portfolio website showcasing personal branding with smooth animations and responsive design.",
      icon: User,
      color: "bg-accent",
      gradient: "from-accent to-purple-600",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Modern Design"],
      features: [
        "Responsive design system",
        "Smooth scroll animations",
        "Interactive components",
        "SEO optimization"
      ],
      type: "Personal Branding",
      status: "Live",
      impact: "Professional Growth",
      id: "portfolio"
    },
    {
      title: "Custom Audience Segment Management",
      year: "2025",
      description: "Streamlined data processes for digital advertising campaigns at CelcomDigi, optimizing audience targeting and campaign performance.",
      icon: Target,
      color: "bg-amber-500",
      gradient: "from-amber-500 to-orange-600",
      technologies: ["Data Analysis", "Campaign Management", "Process Optimization"],
      features: [
        "Audience segmentation automation",
        "Performance tracking systems",
        "Data process optimization",
        "Cross-team collaboration tools"
      ],
      type: "Digital Marketing",
      status: "Professional",
      impact: "Industry Experience",
      id: "audience-management"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "4+", icon: Award },
    { label: "Technologies Used", value: "10+", icon: TrendingUp },
    { label: "Lines of Code", value: "5000+", icon: Brain },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-rose-100"></div>
      <div className="absolute top-32 left-16 w-40 h-40 bg-primary opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-rose-200 opacity-20 rounded-full animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200 px-4 py-2">
              Portfolio Showcase
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Featured{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A showcase of innovative solutions spanning AI, web development, and digital marketing
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-md border-rose-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-white/80 backdrop-blur-md border-rose-200"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <CardHeader className={`bg-gradient-to-r ${project.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <project.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-white">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Calendar className="h-3 w-3 text-white/80" />
                            <span className="text-sm text-white/90">{project.year}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-white/90 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Star className="h-4 w-4 mr-2 text-primary" />
                      Key Features
                    </h4>
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
                          className="text-xs bg-rose-100 text-rose-700 hover:bg-rose-200 transition-all duration-200 hover:scale-110"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Impact & Actions */}
                  <div className="border-t border-rose-200 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="bg-rose-50">
                        <Award className="h-3 w-3 mr-1" />
                        {project.impact}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedProject(project.id)}
                        className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-2xl">
            <CardContent className="p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold mb-4">
                  Interested in Collaborating?
                </h3>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  I'm always excited to work on new projects and explore innovative solutions. 
                  Let's discuss how we can create something amazing together!
                </p>
                <Button 
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-white text-rose-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Let's Work Together
                  <Star className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project Details Modal */}
          <ProjectDetails 
            isOpen={selectedProject !== null}
            onClose={() => setSelectedProject(null)}
            projectId={selectedProject || ""}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;