import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProjectById, projects } from "@/lib/projects-data";
import { SEO } from "@/components/SEO";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button variant="hero">Back to Projects</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${project.title} | Case Study - Devs Quest`}
        description={project.description}
        keywords={`${project.category}, ${project.technologies.join(', ')}, case study, software development`}
        canonicalUrl={`/projects/${project.id}`}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{project.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section 
        className="pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container px-6">
          <div className="rounded-2xl overflow-hidden shadow-card-hover">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="pb-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div 
              className="lg:col-span-2 space-y-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Results & Impact</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Technologies */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Start Your Project</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Ready to build something amazing? Let's discuss your project.
                </p>
                <Link to="/#contact">
                  <Button variant="hero" className="w-full">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-6">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Related Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedProjects.map((relatedProject) => (
              <motion.div
                key={relatedProject.id}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/projects/${relatedProject.id}`}>
                  <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedProject.image} 
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-primary font-medium">{relatedProject.category}</span>
                      <h3 className="text-xl font-semibold mt-1 text-foreground group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
