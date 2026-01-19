import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: Mail, text: "hello@devsquest.com" },
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: MapPin, text: "San Francisco, CA" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated Gradient Border Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            />
            <div className="absolute inset-[2px] bg-card rounded-3xl" />
            
            <div className="relative p-12 md:p-16 text-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Build Something{" "}
                <span className="text-gradient">Amazing</span>?
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Let's discuss your project and explore how we can help transform your ideas into reality.
              </motion.p>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mb-12"
              >
                <Button variant="hero" size="xl">
                  Schedule a Consultation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Button>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="grid sm:grid-cols-3 gap-8 pt-10 border-t border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.text}
                    className="flex items-center justify-center gap-3 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
