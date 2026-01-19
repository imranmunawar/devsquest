import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative z-10 px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how we've helped businesses transform through innovative digital solutions. 
              Each project represents our commitment to excellence and client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                          View Case Study →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
