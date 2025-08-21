import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects as projectsData } from "@/data/projects";

const AllProjects = () => {
  return (
    <div className="min-h-screen app-scale bg-background text-foreground">
      <Navigation />
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">All Projects</h1>
            <p className="text-muted-foreground">Explore our recent work across web, mobile, IoT and SaaS.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectsData.map((project, index) => (
              <div
                key={project.slug}
                className="card-premium hover-lift group animate-slide-up overflow-hidden p-3 md:p-4"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-[2/1] bg-gradient-to-br from-secondary to-secondary/50 rounded-lg mb-3 overflow-hidden" />

                <div className="space-y-2">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 text-[11px] md:text-xs bg-secondary/80 text-secondary-foreground rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-1.5">
                    {project.demoUrl && (
                      <Button asChild variant="outline" size="sm" className="flex-1 text-[11px] md:text-xs h-7 md:h-8">
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="ghost" size="sm" className="flex-1 text-[11px] md:text-xs h-7 md:h-8">
                      <a href={`/projects/${project.slug}`}>View Details</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;


