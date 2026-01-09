import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl" />
            <div className="absolute inset-[2px] bg-card rounded-3xl" />
            
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Ready to Build Something{" "}
                <span className="text-gradient">Amazing</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Let's discuss your project and explore how we can help transform your ideas into reality.
              </p>
              
              {/* CTA Button */}
              <Button variant="hero" size="xl" className="mb-12">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-3 gap-8 pt-10 border-t border-border">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-muted-foreground">hello@nexatech.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
