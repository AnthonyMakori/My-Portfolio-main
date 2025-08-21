import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  function scrollToSection(selector: string): void {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Anthony</span>{" "}
            <span className="text-foreground">Makori</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
            Full-Stack Developer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences using modern technologies. 
            Specializing in React, Node.js, and cloud solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent-gradient hover:glow-primary transition-smooth text-lg px-8 py-3"
              onClick={() => scrollToSection("#contact")}

            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            
            <a
              href="/ANTHONY_MAKORI_CV.docx"
              download="ANTHONY_MAKORI_CV.docx"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;