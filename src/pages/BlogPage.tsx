import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogs } from "@/lib/blogs-data";
import { SEO } from "@/components/SEO";
import { Sparkles, Calendar, Clock, ArrowRight } from "lucide-react";

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

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog | Tech Insights & Industry News - Devs Quest"
        description="Stay updated with the latest insights on AI, fintech, web development, and technology trends. Expert articles from Devs Quest team."
        keywords="tech blog, AI insights, fintech news, web development blog, technology articles, software development blog"
        canonicalUrl="/blog"
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
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-background">Latest Insights</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-background/70 max-w-2xl mx-auto">
              Stay informed with expert insights on technology, AI, fintech, and software development. 
              Learn from our team's experience and industry best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/blog/${blog.id}`}>
                  <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(blog.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Author & Read More */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          {blog.authorImage && (
                            <img 
                              src={blog.authorImage} 
                              alt={blog.author}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          )}
                          <span className="text-sm font-medium text-foreground">{blog.author}</span>
                        </div>
                        <span className="text-primary font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Read More
                          <ArrowRight className="w-4 h-4" />
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

export default BlogPage;
