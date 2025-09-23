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
  documentUrl?: string;
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
          details: "Group project report documenting the complete development process, market research findings, and technical implementation of the AI-powered stress detection system for cats.",
          fileName: "SphynxSense Project Report",
          fileSize: "Word Document",
          documentUrl: "/assets/sphynxsense-report.docx"
        },
        {
          type: "document", 
          title: "Presentation Slides",
          description: "Final presentation showcasing project outcomes and findings",
          icon: FileText,
          placeholder: "Upload your PDF presentation slides here",
          details: "Final presentation slides delivered to stakeholders, showcasing project methodology, results, and business potential.",
          fileName: "SphynxSense Presentation",
          fileSize: "PDF Document",
          documentUrl: "/assets/sphynxsense-presentation.pdf"
        }
      ],
      details: {
        teamSize: "5 members",
        duration: "3 months",
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
      title: "Smartphone E-Commerce Website",
      year: "2024",
      type: "Web Development Project",
      status: "Completed",
      overview: "A fully functional e-commerce website for smartphone sales featuring modern responsive design, complete shopping cart functionality, and simulated checkout process.",
      content: [
        {
          type: "video",
          title: "Website Demo Video",
          description: "Complete walkthrough of the smartphone e-commerce website functionality",
          icon: Video,
          placeholder: "Upload your demo video here",
          details: "Comprehensive demonstration of the smartphone e-commerce website including product browsing, cart functionality, checkout process, and admin features."
        }
      ],
      details: {
        duration: "3 months",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "Master Page", "API", "Responsive Design"],
        features: [
          "Comprehensive smartphone product catalog with detailed specifications",
          "Advanced filtering by brand, price range, and features",
          "Shopping cart with quantity management and real-time pricing",
          "Secure user authentication and account management",
          "Mobile-responsive design optimized for all devices",
          "Admin panel for inventory and order management",
          "Payment gateway integration simulation",
          "Product comparison functionality"
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
      title: "Customer Audience Segment Management",
      year: "2025",
      type: "Digital Marketing Internship",
      status: "Professional",
      overview: "Customer Audience Segment Management – CelcomDigi (Internship, June–Sept 2025). Streamlined data processes for digital advertising campaigns, optimizing audience targeting and improving campaign performance through comprehensive data management and automation.",
      content: [
        {
          type: "images",
          title: "Digital Platform Management",
          description: "Screenshots of audience management across multiple digital advertising platforms",
          icon: ImageIcon,
          placeholder: "Upload platform screenshots here",
          details: "Working with Google Ads Transparency Center, TikTok Ads Manager, and other digital platforms for audience segment management and campaign optimization.",
          images: [
            { url: "/assets/audience-management-1.jpg", alt: "Google Ads Transparency Center interface" },
            { url: "/assets/audience-management-2.jpg", alt: "TikTok Ads Manager audience dashboard" },
            { url: "/assets/audience-management-3.jpg", alt: "Customer audience data spreadsheet" },
            { url: "/assets/audience-management-4.jpg", alt: "Task management and workflow tracking" },
            { url: "/assets/audience-management-5.jpg", alt: "Digital marketing analytics dashboard" }
          ]
        }
      ],
      details: {
        company: "CelcomDigi Berhad",
        duration: "4 months (June-Sept 2025)",
        technologies: ["Data Analysis", "Google Ads", "Meta Ads", "TikTok Ads", "DV360", "Excel", "Campaign Management"],
        achievements: [
          "Data Preparation & Processing: Retrieved customer audience files from Digi Teams and Celcom MFTP systems, cleaned and formatted large datasets for digital advertising platforms (Google Ads, Meta, TikTok Ads, DV360)",
          "Audience Upload & Maintenance: Uploaded segmented customer data into multiple digital platforms with strict monthly structuring (odd/even month folders), ensured successful population and monitored match rates",
          "Performance Tracking & Optimisation: Monitored audience growth, match rates, and readiness for campaign targeting, identified issues and implemented corrective measures",
          "Collaboration & Reporting: Supported the digital marketing team by providing clear updates on audience segment status, assisted in ensuring compliance with internal and external policies"
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
                                <Button size="sm" variant="outline" asChild>
                                  <a href={item.documentUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    {item.fileName ? "View" : "Upload"}
                                  </a>
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