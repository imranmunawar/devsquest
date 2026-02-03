import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Code, Clock, Shield, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Full-Stack Developers",
    description: "Expert developers proficient in modern frameworks and technologies to build scalable applications."
  },
  {
    icon: Users,
    title: "Frontend Specialists",
    description: "UI/UX focused developers creating beautiful, responsive, and performant user interfaces."
  },
  {
    icon: Shield,
    title: "Backend Engineers",
    description: "Server-side experts building robust APIs, databases, and cloud infrastructure."
  },
  {
    icon: Clock,
    title: "DevOps Engineers",
    description: "Infrastructure specialists ensuring seamless deployment, monitoring, and scaling."
  }
];

const benefits = [
  "Access to top-tier talent without long-term commitments",
  "Scalable team size based on project requirements",
  "Faster time-to-market with experienced professionals",
  "Cost-effective solution compared to full-time hires",
  "Flexible engagement models (hourly, project-based, or dedicated)",
  "Seamless integration with your existing team"
];

const technologies = [
  "React", "Vue.js", "Angular", "Node.js", "Python", "Java",
  "TypeScript", "AWS", "Docker", "Kubernetes", "PostgreSQL",
  "MongoDB", "GraphQL", "REST APIs", "Microservices"
];

const StaffAugmentationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Staff Augmentation Services | Hire Expert Developers - Devs Quest"
        description="Scale your development team with our staff augmentation services. Hire expert developers, engineers, and specialists on-demand for your projects."
        keywords="staff augmentation, hire developers, remote developers, software development team, tech talent"
        canonicalUrl="/staff-augmentation"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-32 relative overflow-hidden bg-foreground">
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
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-background">Flexible Team Scaling</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background">
              Staff <span className="text-primary">Augmentation</span>
            </h1>
            <p className="text-xl text-background/70 max-w-2xl mx-auto mb-8">
              Scale your development team instantly with expert developers, engineers, and specialists.
              Get the talent you need, when you need it, without the overhead.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl" className="mt-4">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide skilled professionals across all areas of software development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-colors"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <service.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Choose Staff Augmentation?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Staff augmentation allows you to quickly scale your team with skilled professionals
                without the long-term commitment and overhead of traditional hiring.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-card rounded-3xl border-2 border-border p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">How It Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-primary font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Define Your Needs</h4>
                    <p className="text-muted-foreground text-sm">
                      Tell us about your project requirements, skills needed, and timeline.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-primary font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">We Match Talent</h4>
                    <p className="text-muted-foreground text-sm">
                      We identify and vet the perfect professionals for your team.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-primary font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Seamless Integration</h4>
                    <p className="text-muted-foreground text-sm">
                      Our team members integrate with your workflow and start contributing immediately.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-primary font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Scale as Needed</h4>
                    <p className="text-muted-foreground text-sm">
                      Adjust team size up or down based on project requirements.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Technologies We Cover
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our developers are proficient in a wide range of modern technologies and frameworks.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {technologies.map((tech, index) => (
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
              Ready to Scale Your Team?
            </h2>
            <p className="text-lg text-background/70 mb-8 relative z-10">
              Let's discuss your project needs and find the perfect developers for your team.
            </p>
            <a
              href="https://calendar.app.google/2QyxiuDbLoMS18W9A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-foreground font-semibold rounded-full text-lg relative z-10"
              >
                Schedule a Consultation
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StaffAugmentationPage;
