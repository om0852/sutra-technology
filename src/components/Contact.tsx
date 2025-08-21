"use client";

import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pt-12 pb-16 md:pt-20 md:pb-20 relative">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-heading mb-6 md:mb-8">
            Ready to Build Something
            <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent"> Amazing?</span>
          </h2>
          
          <p className="text-body text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Let's discuss your project and explore how we can help bring your vision to life. 
            From initial concept to final deployment, we're here to guide you every step of the way.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8 max-w-2xl mx-auto">
            <a 
              href="mailto:contact@sutra.org.in" 
              className="card-premium text-center hover-lift cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 md:p-3 bg-secondary rounded-xl w-fit mx-auto mb-3 md:mb-4">
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Email Us</h3>
              <p className="text-muted-foreground text-xs md:text-sm">contact@sutra.org.in</p>
            </a>

            <a 
              href="tel:+918055075050" 
              className="card-premium text-center hover-lift cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 md:p-3 bg-secondary rounded-xl w-fit mx-auto mb-3 md:mb-4">
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Call Us</h3>
              <p className="text-muted-foreground text-xs md:text-sm">+91 8055075050</p>
            </a>
          </div>

          <div className="px-4 mt-2">
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