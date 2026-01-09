import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Building the future of digital solutions</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up-delay-1">
            Transform Your Vision Into{" "}
            <span className="text-gradient">Digital Reality</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
            We craft cutting-edge web applications, fintech solutions, and enterprise systems that drive innovation and accelerate growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="xl">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50">
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient">150+</div>
              <div className="text-muted-foreground mt-2">Projects Delivered</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient">50+</div>
              <div className="text-muted-foreground mt-2">Global Clients</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient">8+</div>
              <div className="text-muted-foreground mt-2">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
