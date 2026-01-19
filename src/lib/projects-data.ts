export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  technologies: string[];
  client: string;
  duration: string;
}

export const projects: Project[] = [
  {
    id: "nexgen-banking",
    title: "NexGen Banking Platform",
    category: "Banking Solutions",
    description: "A complete digital banking transformation for a leading regional bank, enabling mobile-first banking for over 2 million customers.",
    challenge: "The client needed to modernize their legacy banking infrastructure to compete with digital-first challengers while maintaining regulatory compliance.",
    solution: "We built a cloud-native banking platform with real-time transaction processing, AI-powered fraud detection, and a seamless mobile experience.",
    results: [
      "300% increase in mobile banking adoption",
      "60% reduction in transaction processing time",
      "99.99% uptime achieved",
      "40% decrease in fraud incidents"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    technologies: ["Java", "Kubernetes", "PostgreSQL", "Redis", "React Native"],
    client: "Regional Bank Corp",
    duration: "18 months"
  },
  {
    id: "ecomart-ecommerce",
    title: "EcoMart Marketplace",
    category: "E-commerce Solutions",
    description: "A sustainable products marketplace connecting eco-conscious consumers with verified green vendors worldwide.",
    challenge: "Building a scalable multi-vendor marketplace with complex sustainability certification verification and carbon footprint tracking.",
    solution: "We created a custom marketplace platform with vendor management, sustainability scoring, and integrated carbon offset calculations.",
    results: [
      "500K+ monthly active users",
      "$50M GMV in first year",
      "2,000+ verified vendors onboarded",
      "95% customer satisfaction rate"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS", "GraphQL"],
    client: "EcoMart Inc",
    duration: "12 months"
  },
  {
    id: "payflow-fintech",
    title: "PayFlow Payment Platform",
    category: "Fintech",
    description: "A B2B payment infrastructure enabling businesses to send and receive payments across 40+ countries with real-time FX rates.",
    challenge: "Creating a compliant, fast, and cost-effective cross-border payment solution that could compete with established players.",
    solution: "We built a multi-currency payment platform with smart routing, competitive FX rates, and complete API-first architecture.",
    results: [
      "$2B+ processed annually",
      "40+ countries supported",
      "Sub-second transaction confirmation",
      "70% cost savings vs traditional banks"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Go", "Kafka", "PostgreSQL", "Kubernetes", "React"],
    client: "PayFlow Technologies",
    duration: "24 months"
  },
  {
    id: "teamhub-pm",
    title: "TeamHub Project Suite",
    category: "Project Management",
    description: "An enterprise project management solution designed for distributed teams with advanced resource planning and real-time collaboration.",
    challenge: "Enterprise clients needed a flexible PM tool that could adapt to various methodologies while providing executive-level insights.",
    solution: "We developed a modular project management platform with customizable workflows, real-time updates, and AI-powered predictions.",
    results: [
      "35% improvement in project delivery time",
      "50K+ active users across 200+ companies",
      "92% user adoption rate",
      "4.8/5 average user rating"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Elasticsearch"],
    client: "TeamHub Software",
    duration: "14 months"
  },
  {
    id: "voicely-feedback",
    title: "Voicely Customer Insights",
    category: "Feedback Systems",
    description: "An AI-powered customer feedback platform that transforms unstructured feedback into actionable product insights.",
    challenge: "Product teams were drowning in customer feedback from multiple channels without a systematic way to prioritize improvements.",
    solution: "We built an intelligent platform that aggregates feedback, applies NLP for sentiment and topic analysis, and prioritizes based on impact.",
    results: [
      "80% reduction in feedback analysis time",
      "3x faster issue identification",
      "25% improvement in NPS scores",
      "Integration with 20+ data sources"
    ],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    client: "Voicely AI",
    duration: "10 months"
  },
  {
    id: "healthtech-webapp",
    title: "MediConnect Telehealth",
    category: "Web Applications",
    description: "A HIPAA-compliant telehealth platform connecting patients with healthcare providers through video consultations and secure messaging.",
    challenge: "Healthcare providers needed a secure, user-friendly platform for virtual care that integrated with existing EHR systems.",
    solution: "We created a comprehensive telehealth solution with video consultations, appointment scheduling, prescription management, and EHR integration.",
    results: [
      "1M+ virtual consultations conducted",
      "4.9/5 patient satisfaction",
      "40% reduction in no-shows",
      "HIPAA & SOC2 certified"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS HIPAA"],
    client: "MediConnect Health",
    duration: "16 months"
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
