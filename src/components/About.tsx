"use client";

import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-heading mb-6 md:mb-8">
              Building Tomorrow's 
              <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent"> Technology</span>
            </h2>
            
            <p className="text-body text-muted-foreground mb-6 md:mb-8">
              At Sutra Technologies, we're passionate about creating digital solutions that make a difference. 
              Our team combines technical expertise with creative innovation to deliver products that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-secondary/50 hover-lift">
                <div className="text-2xl md:text-3xl font-bold mb-2">50+</div>
                <div className="text-caption">Projects Delivered</div>
              </div>
              
              <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-secondary/50 hover-lift">
                <div className="text-2xl md:text-3xl font-bold mb-2">5+</div>
                <div className="text-caption">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 animate-slide-up">
            <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/50 hover-lift">
              <div className="p-2 bg-primary rounded-lg text-primary-foreground">
                <Target className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">Mission-Driven</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  We focus on delivering solutions that create real value for your business and users.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/50 hover-lift">
              <div className="p-2 bg-primary rounded-lg text-primary-foreground">
                <Users className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">Collaborative</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  We work closely with our clients as partners, ensuring transparency throughout the process.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/50 hover-lift">
              <div className="p-2 bg-primary rounded-lg text-primary-foreground">
                <Zap className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">Innovation First</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  We leverage cutting-edge technologies to build future-ready solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;