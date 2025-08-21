"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects as projectsData } from "@/data/projects";

const projects = projectsData;

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-24 relative bg-secondary/20">
      <div className="container">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-heading mb-3 md:mb-4">Featured Projects</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto px-4">
            Discover some of our successful projects that showcase our expertise
            across different technologies and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-premium hover-lift group animate-slide-up overflow-hidden p-3 md:p-4"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[2/1] bg-gradient-to-br from-secondary to-secondary/50 rounded-lg mb-2.5 md:mb-3 overflow-hidden">
                {project.images && project.images[0] ? (
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="text-xs md:text-sm font-semibold mb-0.5">{project.category}</div>
                      <div className="text-[11px] md:text-xs opacity-60">Project Preview</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-1.5 md:space-y-2.5">
                <div>
                  <h3 className="text-sm md:text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 text-[11px] md:text-xs bg-secondary/80 text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-1.5">
                 
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-[11px] md:text-xs h-7 md:h-8"
                  >
                    <a
                      href={`/projects/${project.slug}`}
                      onClick={(e) => {
                        if (!project.slug) {
                          e.preventDefault();
                        }
                      }}
                    >
                      View Details
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button asChild variant="premium" size="lg" className="group">
            <a href="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;