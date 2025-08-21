"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroTechBg from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[115vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroTechBg})` }}
      />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-subtle" />

      <div className="container relative z-10 text-center animate-fade-in px-4">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Innovative Software
            <br />
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We transform ideas into scalable digital solutions. From web development 
            to IoT innovations, we're your trusted partner in building the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8 px-4">
            <Button asChild variant="premium" size="lg" className="group w-full sm:w-auto">
              <a href="/start-project">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button variant="ghost" size="lg" className="hover-glow w-full sm:w-auto">
              View Our Work
            </Button>
          </div>

          <div className="pt-12 md:pt-16 text-sm text-muted-foreground">
            <p>Trusted by startups and enterprises worldwide</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;