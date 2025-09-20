import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  BarChart3, 
  Database, 
  FileText,
  ArrowRight,
  Code,
  Target,
  Presentation,
  Star,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive websites built with modern technologies including HTML, CSS, JavaScript, and PHP.",
      features: [
        "Responsive Design",
        "E-commerce Solutions", 
        "Custom Web Applications",
        "Performance Optimization"
      ],
      color: "bg-sage-500",
      gradient: "from-sage-500 to-sage-600"
    },
    {
      icon: Target,
      title: "Campaign Management Support",
      description: "Strategic digital marketing campaign planning, execution, and optimization based on real industry experience.",
      features: [
        "Audience Segmentation",
        "Campaign Strategy",
        "Performance Tracking",
        "ROI Analysis"
      ],
      color: "bg-primary",
      gradient: "from-primary to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Reporting",
      description: "Transform raw data into actionable insights with comprehensive analysis and clear reporting frameworks.",
      features: [
        "Data Processing",
        "Trend Analysis",
        "Custom Reports",
        "Performance Metrics"
      ],
      color: "bg-accent",
      gradient: "from-accent to-purple-600"
    },
    {
      icon: Presentation,
      title: "Content & Presentation Creation",
      description: "Professional content development and engaging presentations for business and academic purposes.",
      features: [
        "Business Presentations",
        "Content Strategy",
        "Visual Design",
        "Research Documentation"
      ],
      color: "bg-amber-500",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const benefits = [
    { title: "Student Perspective", description: "Fresh, innovative approaches to challenges", icon: Star },
    { title: "Academic Rigor", description: "Backed by solid theoretical knowledge", icon: CheckCircle },
    { title: "Industry Experience", description: "Real-world experience from CelcomDigi internship", icon: Target },
    { title: "Cost-Effective", description: "Quality solutions at competitive student rates", icon: BarChart3 },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sage-25 to-sage-50"></div>
      <div className="absolute top-20 right-16 w-48 h-48 bg-primary opacity-5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-sage-200 opacity-20 rounded-full animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 px-4 py-2">
              What I Offer
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              My{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Leveraging academic knowledge and practical experience to deliver valuable solutions
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-sage-200 bg-white/80 backdrop-blur-md overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${service.gradient} text-white relative`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-white">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Me Section */}
          <div className="mb-16">
            <h3 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
              Why Work With Me?
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-md border-sage-200 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-sage-600 to-sage-700 text-white shadow-2xl">
            <CardContent className="p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading text-3xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's discuss how I can help bring your ideas to life with a blend of 
                  creativity, technical expertise, and business acumen.
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  onClick={scrollToContact}
                  className="bg-white text-sage-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;