"use client";

import { Code, Smartphone, Globe, Lightbulb, Cpu, Rocket } from "lucide-react";

const services = [
  {
    icon: <Code className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks, optimized for performance and scalability."
  },
  {
    icon: <Smartphone className="h-6 w-6 md:h-8 md:w-8" />,
    title: "App Development", 
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Local Business Solutions",
    description: "Comprehensive digital presence for local businesses with websites, apps, and digital marketing."
  },
  {
    icon: <Cpu className="h-6 w-6 md:h-8 md:w-8" />,
    title: "IoT Projects",
    description: "Connected device solutions and smart systems for industrial and consumer applications."
  },
  {
    icon: <Lightbulb className="h-6 w-6 md:h-8 md:w-8" />,
    title: "MVP Development",
    description: "Rapid prototyping and MVP development to validate your ideas and enter the market quickly."
  },
  {
    icon: <Rocket className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Scalable Solutions",
    description: "Enterprise-grade applications designed to grow with your business and handle increasing demands."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h2 className="text-heading mb-4 md:mb-6">Our Services</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto px-4">
            From concept to deployment, we provide comprehensive technology solutions 
            tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-premium hover-lift group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 md:mb-6 p-2 md:p-3 bg-secondary rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;