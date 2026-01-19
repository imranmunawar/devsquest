import { 
  Globe, 
  ShoppingCart, 
  Building2, 
  TrendingUp, 
  LayoutDashboard, 
  MessageSquare 
} from "lucide-react";
import { motion, type Variants, type Easing } from "framer-motion";

const easeOut: Easing = [0.4, 0, 0.2, 1];

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Custom web applications built with modern technologies, designed for scalability and exceptional user experiences.",
    color: "from-primary to-primary/80",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "End-to-end e-commerce platforms with seamless checkout, inventory management, and analytics dashboards.",
    color: "from-accent to-accent/80",
  },
  {
    icon: Building2,
    title: "Banking Solutions",
    description: "Secure, compliant banking software with real-time transactions, fraud detection, and regulatory compliance.",
    color: "from-primary to-accent",
  },
  {
    icon: TrendingUp,
    title: "Fintech",
    description: "Innovative financial technology solutions including payment processing, lending platforms, and investment tools.",
    color: "from-accent to-primary",
  },
  {
    icon: LayoutDashboard,
    title: "Project Management",
    description: "Collaborative project management tools with task tracking, team communication, and resource allocation.",
    color: "from-primary to-primary/80",
  },
  {
    icon: MessageSquare,
    title: "Feedback Systems",
    description: "Comprehensive feedback management platforms for collecting, analyzing, and acting on customer insights.",
    color: "from-accent to-accent/80",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container relative z-10 px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
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
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From concept to deployment, we deliver comprehensive solutions tailored to your business needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-500 cursor-pointer"
            >
              {/* Icon */}
              <motion.div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line Effect */}
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-primary to-accent mt-6 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
