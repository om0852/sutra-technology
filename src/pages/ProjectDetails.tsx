import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen app-scale bg-background text-foreground">
        <Navigation />
        <section className="container pt-28 pb-16">
          <p className="text-muted-foreground">Project not found.</p>
          <Link to="/" className="text-primary underline">Go back</Link>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen app-scale bg-background text-foreground">
      <Navigation />
      <section className="container px-4 pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center">
              <span className="mr-1">←</span> Back to Home
            </Link>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3">{project.title}</h1>
          <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">{project.description}</p>

          <div className="mb-8">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                dragFree: true
              }}
            >
              <CarouselContent>
                {project.images.map((src, idx) => (
                  <CarouselItem key={idx}>
                    <div className="p-1">
                      <img 
                        src={src} 
                        alt={`${project.title} ${idx + 1}`} 
                        className="w-full aspect-video object-cover rounded-xl" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="md:-left-12" />
                <CarouselNext className="md:-right-12" />
              </div>
              <div className="mt-2 flex justify-center gap-2">
                {project.images.map((_, idx) => (
                  <div
                    key={idx}
                    className="h-1.5 w-6 rounded-full bg-muted"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </Carousel>
          </div>

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </div>

          {project.demoUrl && (
            <Button asChild variant="outline">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">View Live Demo</a>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;


