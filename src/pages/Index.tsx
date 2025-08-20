import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
