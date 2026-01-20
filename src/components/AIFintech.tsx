import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { aiFintechServices } from "@/lib/ai-fintech-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export function AIFintech() {
  return (
    <section id="ai-fintech" className="py-32 relative overflow-hidden bg-foreground">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
      
      <div className="container relative z-10 px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-background">AI & Fintech Solutions</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-background"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI-Powered <span className="text-primary">Innovation</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-background/70 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Cutting-edge AI and fintech solutions with proven results. 
            Each solution backed by real case studies and measurable outcomes.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aiFintechServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative"
            >
              <Link to={`/ai-fintech/${service.id}`}>
                <motion.div 
                  className="relative p-8 rounded-3xl bg-background border-2 border-border overflow-hidden h-full"
                  whileHover={{ 
                    y: -8,
                    borderColor: "hsl(var(--primary))",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground/40">0{index + 1}</span>
                  </div>

                  {/* Icon with animated background */}
                  <motion.div 
                    className="relative w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                    {/* Pulse effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl bg-foreground"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Case Study Preview */}
                  <div className="p-4 rounded-xl bg-foreground/[0.03] border border-border/50 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">Case Study</span>
                      <span className="text-xs text-muted-foreground">• {service.caseStudy.client}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {service.caseStudy.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label} className="text-center p-2 rounded-lg bg-background border border-border/50">
                          <div className="text-xl font-bold text-foreground">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div 
                    className="flex items-center gap-2 text-foreground font-semibold"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>

                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/ai-fintech">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-foreground font-semibold text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(116, 208, 76, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Explore AI & Fintech Solutions
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
