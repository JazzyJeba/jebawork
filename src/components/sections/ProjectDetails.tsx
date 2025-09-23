import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  ExternalLink, 
  FileText, 
  Video, 
  Image as ImageIcon,
  Calendar,
  Award,
  Users,
  Target
} from "lucide-react";

interface ProjectDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
}

interface ProjectDetails {
  teamSize?: string;
  company?: string;
  duration: string;
  technologies: string[];
  features?: string[];
  achievements?: string[];
}

interface ProjectContent {
  type: string;
  title: string;
  description: string;
  icon: any;
  placeholder: string;
  details?: string;
  fileName?: string;
  fileSize?: string;
  videoUrl?: string;
  thumbnail?: string;
  images?: Array<{ url: string; alt?: string }>;
}

const ProjectDetails = ({ isOpen, onClose, projectId }: ProjectDetailsProps) => {
  const projectData: Record<string, {
    title: string;
    year: string;
    type: string;
    status: string;
    overview: string;
    content: ProjectContent[];
    details: ProjectDetails;
  }> = {
    "sphynxsense": {
      title: "SphynxSense - AI-Powered Stress Detection for Cats",
      year: "2024",
      type: "AI/ML Group Project",
      status: "Completed",
      overview: "An innovative AI-powered system designed to detect stress in cats through behavioral analysis and machine learning algorithms. This comprehensive project combined cutting-edge technology with thorough market research and prototype development.",
      content: [
        {
          type: "document",
          title: "Project Report",
          description: "Comprehensive academic report covering methodology, market analysis, and technical implementation",
          icon: FileText,
          placeholder: "Upload your Word document report here",
          details: "Group project report documenting the complete development process, market research findings, and technical implementation of the AI-powered stress detection system for cats."
        },
        {
          type: "document", 
          title: "Presentation Slides",
          description: "Final presentation showcasing project outcomes and findings",
          icon: FileText,
          placeholder: "Upload your PDF presentation slides here",
          details: "Final presentation slides delivered to stakeholders, showcasing project methodology, results, and business potential."
        }
      ],
      details: {
        teamSize: "4 members",
        duration: "6 months",
        technologies: ["AI/ML", "Data Analysis", "Market Research", "Prototype Design"],
        achievements: [
          "Developed innovative stress detection algorithms",
          "Conducted comprehensive market analysis",
          "Created functional prototype concept",
          "Achieved academic excellence recognition"
        ]
      } as ProjectDetails
    },
    "ecommerce": {
      title: "E-Commerce Smartphone Shop",
      year: "2024",
      type: "Web Development Project",
      status: "Completed",
      overview: "A fully functional e-commerce website for smartphone sales featuring modern responsive design, complete shopping cart functionality, and simulated checkout process.",
      content: [
        {
          type: "video",
          title: "Website Demo Video",
          description: "Complete walkthrough of the e-commerce website functionality",
          icon: Video,
          placeholder: "Upload your demo video here",
          details: "Comprehensive demonstration of the smartphone e-commerce website including product browsing, cart functionality, checkout process, and admin features."
        }
      ],
      details: {
        duration: "3 months",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "Responsive Design"],
        features: [
          "Product catalog with filtering and search",
          "Shopping cart with add/remove functionality",
          "User-friendly checkout simulation",
          "Mobile-responsive design across all devices",
          "Admin panel for product management"
        ]
      } as ProjectDetails
    },
    "portfolio": {
      title: "Personal Portfolio Website",
      year: "2025",
      type: "Personal Branding Project",
      status: "Live",
      overview: "Modern, professional portfolio website showcasing personal brand with smooth animations, responsive design, and optimized user experience.",
      content: [
        {
          type: "video",
          title: "Portfolio Showcase Video",
          description: "Overview of the portfolio website features and design",
          icon: Video,
          placeholder: "Upload your showcase video here",
          details: "Professional showcase video highlighting the design process, interactive features, responsive design, and modern development techniques used in this portfolio website."
        }
      ],
      details: {
        duration: "2 months",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Modern Design"],
        features: [
          "Responsive design system with semantic tokens",
          "Smooth scroll animations and interactions",
          "Interactive components and micro-animations",
          "SEO optimization and performance tuning",
          "Contact form with EmailJS integration"
        ]
      } as ProjectDetails
    },
    "audience-management": {
      title: "Custom Audience Segment Management",
      year: "2025",
      type: "Digital Marketing Project",
      status: "Professional",
      overview: "Streamlined data processes for digital advertising campaigns at CelcomDigi, optimizing audience targeting and improving campaign performance through automation.",
      content: [
        {
          type: "images",
          title: "Process Flow Diagrams",
          description: "Visual representations of optimized audience segmentation workflows",
          icon: ImageIcon,
          placeholder: "Upload process diagrams here",
          details: "Detailed workflow diagrams showing the before and after states of audience segmentation processes, highlighting automation improvements and efficiency gains."
        },
        {
          type: "images",
          title: "Performance Analytics",
          description: "Before and after comparison of campaign optimization results",
          icon: ImageIcon,
          placeholder: "Upload analytics screenshots here",
          details: "Data visualizations and performance metrics demonstrating the impact of process optimization on campaign effectiveness and ROI."
        },
        {
          type: "images",
          title: "System Architecture",
          description: "Technical overview of the audience management system",
          icon: ImageIcon,
          placeholder: "Upload architecture diagrams here",
          details: "Technical diagrams illustrating the system architecture, data flow, and integration points within the CelcomDigi advertising ecosystem."
        }
      ],
      details: {
        company: "CelcomDigi Berhad",
        duration: "3 months (Internship)",
        technologies: ["Data Analysis", "Campaign Management", "Process Optimization"],
        achievements: [
          "Automated audience segmentation processes",
          "Improved campaign targeting accuracy by 15%",
          "Reduced manual data processing time by 40%",
          "Enhanced cross-team collaboration workflows"
        ]
      } as ProjectDetails
    }
  };

  const project = projectData[projectId as keyof typeof projectData];

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">
                {project.title}
              </DialogTitle>
              <div className="flex items-center space-x-4 mt-2">
                <Badge className="bg-rose-100 text-rose-700 border-rose-200">
                  {project.type}
                </Badge>
                <Badge variant="outline" className="bg-green-50">
                  <Award className="h-3 w-3 mr-1" />
                  {project.status}
                </Badge>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Overview */}
          <Card className="bg-white/80 backdrop-blur-sm border-rose-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </CardContent>
          </Card>

          {/* Project Materials */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Project Materials</h3>
            <div className="grid gap-4">
              {project.content.map((item, index) => (
                <Card key={index} className="bg-gradient-to-r from-rose-50 to-rose-100 border-rose-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        
                        {/* Material Content Area */}
                        <div className="bg-white/60 p-4 rounded-lg border border-rose-200 min-h-[100px]">
                          {item.type === "document" ? (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 bg-white rounded border border-rose-100">
                                <div className="flex items-center space-x-3">
                                  <FileText className="h-5 w-5 text-rose-600" />
                                  <div>
                                    <p className="font-medium text-sm">{item.fileName || "Document"}</p>
                                    <p className="text-xs text-muted-foreground">{item.fileSize || "Upload your document"}</p>
                                  </div>
                                </div>
                                <Button size="sm" variant="outline">
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  {item.fileName ? "View" : "Upload"}
                                </Button>
                              </div>
                            </div>
                          ) : item.type === "video" ? (
                            <div className="space-y-3">
                              <div className="aspect-video bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg border border-rose-200 flex items-center justify-center">
                                {item.videoUrl ? (
                                  <video 
                                    controls 
                                    className="w-full h-full rounded-lg"
                                    poster={item.thumbnail}
                                  >
                                    <source src={item.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                  </video>
                                ) : (
                                  <div className="text-center">
                                    <Video className="h-12 w-12 text-rose-500 mx-auto mb-2" />
                                    <p className="text-sm text-muted-foreground">Video will be uploaded here</p>
                                    <Button size="sm" variant="outline" className="mt-2">
                                      Upload Video
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : item.type === "images" ? (
                            <div className="space-y-3">
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {item.images && item.images.length > 0 ? (
                                  item.images.map((img: any, imgIndex: number) => (
                                    <div key={imgIndex} className="aspect-square bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg border border-rose-200 overflow-hidden">
                                      <img 
                                        src={img.url} 
                                        alt={img.alt || `Project image ${imgIndex + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  ))
                                ) : (
                                  Array.from({length: 3}).map((_, imgIndex) => (
                                    <div key={imgIndex} className="aspect-square bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg border border-rose-200 flex items-center justify-center">
                                      <ImageIcon className="h-8 w-8 text-rose-500" />
                                    </div>
                                  ))
                                )}
                              </div>
                              {(!item.images || item.images.length === 0) && (
                                <div className="text-center">
                                  <p className="text-sm text-muted-foreground mb-2">Images will be uploaded here</p>
                                  <Button size="sm" variant="outline">
                                    Upload Images
                                  </Button>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-center py-8">
                              <p className="text-sm text-muted-foreground italic">{item.placeholder}</p>
                            </div>
                          )}
                        </div>
                        
                        {/* Additional Details */}
                        {item.details && (
                          <div className="mt-3 p-3 bg-white/40 rounded border border-rose-100">
                            <p className="text-xs text-muted-foreground">{item.details}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <Card className="bg-white/80 backdrop-blur-sm border-rose-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                    <p className="text-muted-foreground">{project.details.duration}</p>
                  </div>
                  {project.details.teamSize && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Team Size</h4>
                      <p className="text-muted-foreground">{project.details.teamSize}</p>
                    </div>
                  )}
                  {project.details.company && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Company</h4>
                      <p className="text-muted-foreground">{project.details.company}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.details.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-rose-100 text-rose-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    {project.details.features ? "Key Features" : "Achievements"}
                  </h4>
                  <div className="space-y-2">
                    {(project.details.features || project.details.achievements || []).map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;