import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getAIFintechServiceById, aiFintechServices } from "@/lib/ai-fintech-data";
import { SEO } from "@/components/SEO";

const AIFintechDetailPage = () => {
  const { id } = useParams();
  const service = getAIFintechServiceById(id || "");

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/ai-fintech">
            <Button variant="hero">Back to AI & Fintech</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherServices = aiFintechServices.filter(s => s.id !== service.id);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${service.title} | AI & Fintech Solutions - Devs Quest`}
        description={service.fullDescription}
        keywords={`${service.title}, ${service.technologies.join(', ')}, AI solutions, fintech, case study`}
        canonicalUrl={`/ai-fintech/${service.id}`}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="container relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/ai-fintech" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to AI & Fintech
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-foreground">AI-Powered</span>
                </motion.div>
                
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-foreground flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <service.icon className="w-10 h-10 text-primary" />
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                  {service.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  {service.fullDescription}
                </p>

                <Link to="/#contact">
                  <Button variant="hero" size="xl">
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Features Card */}
              <motion.div 
                className="bg-card rounded-3xl border-2 border-border p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">What We Offer</h3>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div 
                      key={feature}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-foreground">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold uppercase tracking-wider">
                Case Study
              </span>
              <span className="text-background/60">{service.caseStudy.industry}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-background">
              {service.caseStudy.client}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              {/* Challenge & Solution */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">The Challenge</h3>
                  <p className="text-background/80 leading-relaxed">
                    {service.caseStudy.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Our Solution</h3>
                  <p className="text-background/80 leading-relaxed">
                    {service.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">The Results</h3>
                <div className="space-y-3 mb-8">
                  {service.caseStudy.results.map((result, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl bg-background/5"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-background">{result}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {service.caseStudy.metrics.map((metric, index) => (
                    <motion.div 
                      key={metric.label}
                      className="p-4 rounded-2xl bg-background text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Technologies We Use
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading AI and fintech technologies for robust, scalable solutions.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {service.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="px-6 py-3 bg-foreground text-primary rounded-full font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-6">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Explore Other AI & Fintech Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService) => (
              <motion.div
                key={otherService.id}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link to={`/ai-fintech/${otherService.id}`}>
                  <div className="bg-card rounded-2xl border-2 border-border p-6 hover:border-primary transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mb-4">
                      <otherService.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {otherService.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {otherService.shortDescription}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div 
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center bg-foreground"
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
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto mb-8 relative z-10">
              Let's discuss how we can help you achieve your business goals with our AI expertise.
            </p>
            <Link to="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-foreground font-semibold rounded-full text-lg relative z-10"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIFintechDetailPage;
