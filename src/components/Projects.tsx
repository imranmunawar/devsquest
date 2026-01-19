import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { projects } from "@/lib/projects-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container relative z-10 px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our portfolio of successful projects that have transformed businesses across industries.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={`/projects/${project.id}`}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/projects">
            <Button variant="heroOutline" size="lg">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
