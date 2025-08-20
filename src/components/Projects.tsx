"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React, Node.js, and Stripe integration",
    image: "/api/placeholder/400/250",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    image: "/api/placeholder/400/250", 
    tech: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile App"
  },
  {
    title: "IoT Smart Home System",
    description: "Complete smart home automation system with real-time monitoring",
    image: "/api/placeholder/400/250",
    tech: ["Arduino", "React", "WebSocket", "AWS IoT"],
    category: "IoT Solution"
  },
  {
    title: "Restaurant Management SaaS",
    description: "Complete restaurant management solution for local businesses",
    image: "/api/placeholder/400/250",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    category: "SaaS Platform"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-32 relative bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h2 className="text-heading mb-4 md:mb-6">Featured Projects</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto px-4">
            Discover some of our successful projects that showcase our expertise
            across different technologies and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-premium hover-lift group animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/50 rounded-lg mb-4 md:mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-semibold mb-2">{project.category}</div>
                    <div className="text-xs md:text-sm opacity-60">Project Preview</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm bg-secondary/80 text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 md:pt-4">
                  <Button variant="outline" size="sm" className="flex-1 text-xs md:text-sm">
                    <ExternalLink className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 text-xs md:text-sm">
                    <Github className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button variant="premium" size="lg" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;