import { 
  Globe, 
  ShoppingCart, 
  Building2, 
  TrendingUp, 
  LayoutDashboard, 
  MessageSquare 
} from "lucide-react";

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

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From concept to deployment, we deliver comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
