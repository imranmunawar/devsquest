import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getServiceById, services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = getServiceById(id || "");

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button variant="hero">Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProjects = projects.filter(p => 
    p.category.toLowerCase().includes(service.title.toLowerCase().split(' ')[0])
  ).slice(0, 2);

  const otherServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <motion.div 
          className={`absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-3xl`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div 
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <service.icon className="w-10 h-10 text-white" />
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
                className="bg-card rounded-2xl border border-border p-8 shadow-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground">What We Offer</h3>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div 
                      key={feature}
                      className="flex items-start gap-3"
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

      {/* Technologies Section */}
      <section className="py-20 bg-secondary/30">
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
              We leverage industry-leading technologies to build robust, scalable solutions.
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
                className="px-6 py-3 bg-card border border-border rounded-xl text-foreground font-medium hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="container px-6">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Related Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-6">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Explore Other Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService) => (
              <motion.div
                key={otherService.id}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/services/${otherService.id}`}>
                  <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all duration-500">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${otherService.color} flex items-center justify-center mb-4`}>
                      <otherService.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
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
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10`} />
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Get Started with {service.title}?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how we can help you achieve your business goals with our {service.title.toLowerCase()} expertise.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
