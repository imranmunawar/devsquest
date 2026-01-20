import { 
  Globe, 
  ShoppingCart, 
  Building2, 
  TrendingUp, 
  LayoutDashboard, 
  MessageSquare,
  type LucideIcon
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "web-applications",
    icon: Globe,
    title: "Web Applications",
    shortDescription: "Custom web applications built with modern technologies, designed for scalability and exceptional user experiences.",
    fullDescription: "We build powerful, scalable web applications that transform your business operations. Our team leverages cutting-edge technologies to create intuitive interfaces, robust backends, and seamless user experiences that keep your customers engaged and your operations running smoothly.",
    features: [
      "Custom UI/UX Design",
      "Progressive Web Apps (PWA)",
      "Real-time Data Synchronization",
      "API Development & Integration",
      "Cloud-Native Architecture",
      "Performance Optimization"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "ecommerce-solutions",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    shortDescription: "End-to-end e-commerce platforms with seamless checkout, inventory management, and analytics dashboards.",
    fullDescription: "Launch and scale your online business with our comprehensive e-commerce solutions. From storefront design to payment processing, inventory management to analytics, we build platforms that drive conversions and grow revenue.",
    features: [
      "Custom Storefront Design",
      "Secure Payment Gateway Integration",
      "Inventory & Order Management",
      "Customer Analytics Dashboard",
      "Multi-currency & Multi-language Support",
      "Mobile-First Shopping Experience"
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe", "React", "Next.js", "GraphQL"],
  },
  {
    id: "banking-solutions",
    icon: Building2,
    title: "Banking Solutions",
    shortDescription: "Secure, compliant banking software with real-time transactions, fraud detection, and regulatory compliance.",
    fullDescription: "Navigate the complex world of financial technology with our secure, compliant banking solutions. We specialize in building systems that meet the highest security standards while delivering exceptional user experiences for both retail and corporate banking.",
    features: [
      "Core Banking Systems",
      "Real-time Transaction Processing",
      "Fraud Detection & Prevention",
      "Regulatory Compliance (PCI-DSS, SOC2)",
      "Digital Onboarding Solutions",
      "Multi-factor Authentication"
    ],
    technologies: ["Java", "Kotlin", "PostgreSQL", "Redis", "Kubernetes", "Vault"],
  },
  {
    id: "fintech",
    icon: TrendingUp,
    title: "Fintech",
    shortDescription: "Innovative financial technology solutions including payment processing, lending platforms, and investment tools.",
    fullDescription: "Disrupt the financial industry with innovative fintech solutions. From peer-to-peer lending platforms to robo-advisors, we build the technology that powers the next generation of financial services.",
    features: [
      "Payment Processing Systems",
      "Lending & Credit Platforms",
      "Investment & Trading Tools",
      "Blockchain Integration",
      "Open Banking APIs",
      "Risk Assessment Algorithms"
    ],
    technologies: ["Python", "Go", "Kafka", "MongoDB", "TensorFlow", "Web3"],
  },
  {
    id: "project-management",
    icon: LayoutDashboard,
    title: "Project Management",
    shortDescription: "Collaborative project management tools with task tracking, team communication, and resource allocation.",
    fullDescription: "Streamline your workflow with custom project management solutions designed for your unique processes. We build tools that enhance collaboration, improve visibility, and help teams deliver projects on time and within budget.",
    features: [
      "Custom Workflow Automation",
      "Real-time Collaboration Tools",
      "Resource & Capacity Planning",
      "Time Tracking & Reporting",
      "Kanban & Gantt Views",
      "Third-party Integrations"
    ],
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    id: "feedback-systems",
    icon: MessageSquare,
    title: "Feedback Systems",
    shortDescription: "Comprehensive feedback management platforms for collecting, analyzing, and acting on customer insights.",
    fullDescription: "Transform customer feedback into actionable insights with our intelligent feedback management systems. Collect, analyze, and respond to customer sentiment across all channels to improve products and drive customer satisfaction.",
    features: [
      "Multi-channel Feedback Collection",
      "Sentiment Analysis & NLP",
      "Real-time Dashboards & Reports",
      "Automated Response Workflows",
      "Customer Journey Mapping",
      "Integration with CRM Systems"
    ],
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Elasticsearch", "AWS Lambda"],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}
