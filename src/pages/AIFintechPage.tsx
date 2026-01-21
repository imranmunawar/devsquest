import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { aiFintechServices } from "@/lib/ai-fintech-data";
import { SEO } from "@/components/SEO";

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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const AIFintechPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI & Fintech Solutions | Chatbots, Voice AI & Digital Wallets - Devs Quest"
        description="Transform your business with AI-powered fintech solutions. Text chatbots, voice AI, onboarding agents, and digital wallet solutions with proven case studies."
        keywords="AI chatbot, voice AI, fintech solutions, digital wallet, AI onboarding, conversational AI, banking AI, payment solutions"
        canonicalUrl="/ai-fintech"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/15 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        <div className="container relative z-10 px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-background">Case Studies Included</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background">
              AI & <span className="text-primary">Fintech</span>
            </h1>
            <p className="text-xl text-background/70 max-w-2xl mx-auto">
              Cutting-edge AI and fintech solutions with proven results. 
              Explore our case studies and see how we've transformed businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {aiFintechServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group"
              >
                <Link to={`/ai-fintech/${service.id}`}>
                  <motion.div 
                    className="h-full bg-card rounded-3xl border-2 border-border p-8 relative overflow-hidden"
                    whileHover={{ 
                      y: -10,
                      borderColor: "hsl(var(--primary))",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover glow */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    {/* Number */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                      <span className="text-lg font-bold text-foreground/30">0{index + 1}</span>
                    </div>
                    
                    {/* Icon */}
                    <motion.div 
                      className="relative w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                      {service.shortDescription}
                    </p>

                    {/* Case Study Card */}
                    <div className="p-4 rounded-xl bg-foreground/[0.02] border border-border/50 mb-6 relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Case Study</span>
                        <span className="text-xs text-muted-foreground">• {service.caseStudy.industry}</span>
                      </div>
                      <p className="text-sm font-medium text-foreground mb-3">{service.caseStudy.client}</p>
                      <div className="grid grid-cols-4 gap-2">
                        {service.caseStudy.metrics.map((metric) => (
                          <div key={metric.label} className="text-center p-2 rounded-lg bg-background">
                            <div className="text-lg font-bold text-foreground">{metric.value}</div>
                            <div className="text-[10px] text-muted-foreground leading-tight">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    <motion.div 
                      className="flex items-center gap-2 text-foreground font-semibold relative z-10"
                      whileHover={{ x: 5 }}
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                    
                    {/* Bottom accent */}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-foreground relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--primary)) 0%, transparent 50%),
                                  radial-gradient(circle at 70% 50%, hsl(var(--primary)) 0%, transparent 50%)`
              }}
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-background relative z-10">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-background/70 mb-8 relative z-10">
              Schedule a free consultation and let's discuss how AI can solve your challenges.
            </p>
            <Link to="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-foreground font-semibold rounded-full text-lg relative z-10"
              >
                Schedule a Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIFintechPage;
