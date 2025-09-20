import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  BarChart3, 
  Database, 
  FileText,
  ArrowRight,
  Code,
  Target,
  Presentation
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
      color: "bg-sage-500"
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
      color: "bg-primary"
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
      color: "bg-accent"
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
      color: "bg-secondary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging academic knowledge and practical experience to deliver valuable solutions
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-sage-200">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how I can help bring your ideas to life with a blend of 
                creativity, technical expertise, and business acumen.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;