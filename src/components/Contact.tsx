"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-32 relative">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-heading mb-6 md:mb-8">
            Ready to Build Something
            <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent"> Amazing?</span>
          </h2>
          
          <p className="text-body text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Let's discuss your project and explore how we can help bring your vision to life. 
            From initial concept to final deployment, we're here to guide you every step of the way.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="card-premium text-center hover-lift">
              <div className="p-2 md:p-3 bg-secondary rounded-xl w-fit mx-auto mb-3 md:mb-4">
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Email Us</h3>
              <p className="text-muted-foreground text-xs md:text-sm">hello@sutratechnologies.com</p>
            </div>

            <div className="card-premium text-center hover-lift">
              <div className="p-2 md:p-3 bg-secondary rounded-xl w-fit mx-auto mb-3 md:mb-4">
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Call Us</h3>
              <p className="text-muted-foreground text-xs md:text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="card-premium text-center hover-lift">
              <div className="p-2 md:p-3 bg-secondary rounded-xl w-fit mx-auto mb-3 md:mb-4">
                <MapPin className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Visit Us</h3>
              <p className="text-muted-foreground text-xs md:text-sm">San Francisco, CA</p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 px-4">
            <Button variant="premium" size="lg" className="group w-full sm:w-auto">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-caption text-muted-foreground">
              Free consultation • No obligations • Quick response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;