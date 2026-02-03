import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, Package, ExternalLink, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/lib/products-data";
import { SEO } from "@/components/SEO";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button variant="hero">Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherProducts = products.filter(p => p.id !== product.id);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${product.title} | Product Solutions - Devs Quest`}
        description={product.fullDescription}
        keywords={`${product.title}, ${product.technologies.join(', ')}, product solutions, case study`}
        canonicalUrl={`/products/${product.id}`}
      />
      <Navbar />

      {/* Header Section - Like AI & Fintech List Page */}
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
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-background">Product Solution</span>
            </motion.div>

            <div className="flex items-center gap-6 mb-8">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-background/10 flex items-center justify-center flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
              >
                <product.icon className="w-10 h-10 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-background">
                {product.title}
              </h1>
            </div>

            <p className="text-xl text-background/70 max-w-3xl mb-8">
              {product.shortDescription}
            </p>
            {product.demoLink && (
              <motion.a
                href={product.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-foreground font-semibold rounded-full text-lg"
              >
                <Play className="w-5 h-5" />
                View Demo
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  About {product.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {product.fullDescription}
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
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">What We Offer</h3>
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
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
              <span className="text-background/60">{product.caseStudy.industry}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-background">
              {product.caseStudy.client}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              {/* Challenge & Solution */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">The Challenge</h3>
                  <p className="text-background/80 leading-relaxed">
                    {product.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">Our Solution</h3>
                  <p className="text-background/80 leading-relaxed">
                    {product.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">The Results</h3>
                <div className="space-y-3 mb-8">
                  {product.caseStudy.results.map((result, index) => (
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
                  {product.caseStudy.metrics.map((metric, index) => (
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
              Industry-leading technologies for robust, scalable solutions.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {product.technologies.map((tech, index) => (
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

      {/* Other Products */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-6">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Explore Other Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProducts.map((otherProduct) => (
              <motion.div
                key={otherProduct.id}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link to={`/products/${otherProduct.id}`}>
                  <div className="bg-card rounded-2xl border-2 border-border p-6 hover:border-primary transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mb-4">
                      <otherProduct.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {otherProduct.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {otherProduct.shortDescription}
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
              Ready to Get Started with {product.title}?
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto mb-8 relative z-10">
              Let's discuss how we can help you achieve your business goals with our product solutions.
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

export default ProductDetailPage;
