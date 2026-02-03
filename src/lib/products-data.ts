import {
  Briefcase,
  Wallet,
  MessageSquare,
  Mic,
  type LucideIcon
} from "lucide-react";

export interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface Product {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  caseStudy: CaseStudy;
  demoLink?: string;
}

export const products: Product[] = [
  {
    id: "job-portal",
    icon: Briefcase,
    title: "Job Portal",
    shortDescription: "Comprehensive job portal platform connecting employers with top talent. Features advanced search, AI-powered matching, and seamless application management.",
    fullDescription: "Transform your recruitment process with our comprehensive job portal platform. Built for modern businesses, our job portal connects employers with qualified candidates through intelligent matching algorithms, streamlined application workflows, and powerful analytics. Whether you're a startup or enterprise, our platform scales with your hiring needs.",
    features: [
      "AI-Powered Candidate Matching",
      "Advanced Search & Filtering",
      "Resume Parsing & Analysis",
      "Application Tracking System",
      "Employer Dashboard & Analytics",
      "Candidate Profile Management",
      "Email & SMS Notifications",
      "Multi-language Support"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Elasticsearch", "Redis", "AWS"],
    caseStudy: {
      client: "TechHire Solutions",
      industry: "Recruitment & HR Tech",
      challenge: "TechHire was struggling with manual candidate screening, taking 2-3 weeks to fill positions. Their existing platform had poor search functionality and low candidate engagement, resulting in only 15% of job postings receiving qualified applications.",
      solution: "We developed a modern job portal with AI-powered candidate matching, advanced search capabilities, and automated resume screening. The platform includes employer dashboards, candidate profiles, and real-time notifications to streamline the entire hiring process.",
      results: [
        "Reduced time-to-hire from 3 weeks to 5 days",
        "Increased qualified applications by 240%",
        "Improved candidate match accuracy to 87%",
        "Reduced cost-per-hire by 35%"
      ],
      metrics: [
        { label: "Time to Hire", value: "5 days" },
        { label: "Application Increase", value: "+240%" },
        { label: "Match Accuracy", value: "87%" },
        { label: "Cost Reduction", value: "-35%" }
      ]
    },
    demoLink: "https://demo.jobportal.example.com"
  },
  {
    id: "close-loop-digital-wallet",
    icon: Wallet,
    title: "Close Loop Digital Wallet",
    shortDescription: "Secure closed-loop digital wallet system for loyalty programs, corporate expenses, and internal transactions with seamless integration.",
    fullDescription: "Build a secure, scalable closed-loop digital wallet ecosystem for your organization. Perfect for loyalty programs, corporate expense management, employee benefits, and internal payment systems. Our wallet solution provides complete control over your digital currency flow while ensuring security and compliance.",
    features: [
      "Closed-Loop Payment System",
      "Loyalty Points & Rewards",
      "Corporate Expense Management",
      "Employee Benefits Wallet",
      "Transaction History & Reporting",
      "Multi-currency Support",
      "QR Code & NFC Payments",
      "Admin Dashboard & Controls"
    ],
    technologies: ["Blockchain", "HSM", "React Native", "Node.js", "PostgreSQL", "Redis"],
    caseStudy: {
      client: "RetailChain Corp",
      industry: "Retail & Loyalty",
      challenge: "RetailChain wanted to launch a loyalty program but struggled with high transaction fees from third-party payment processors. Their existing system had low customer engagement (18% active users) and limited flexibility for custom rewards.",
      solution: "We developed a closed-loop digital wallet system integrated with their POS and e-commerce platforms. The wallet allows customers to earn and redeem loyalty points, make purchases, and transfer funds within the ecosystem, all with minimal transaction fees.",
      results: [
        "Increased loyalty program engagement to 72%",
        "Reduced transaction processing costs by 60%",
        "Wallet users show 45% higher purchase frequency",
        "Generated $12M in wallet-funded transactions annually"
      ],
      metrics: [
        { label: "Active Users", value: "72%" },
        { label: "Cost Reduction", value: "-60%" },
        { label: "Purchase Frequency", value: "+45%" },
        { label: "Annual Transactions", value: "$12M" }
      ]
    },
    demoLink: "https://demo.wallet.example.com"
  },
  {
    id: "text-chatbot-agent",
    icon: MessageSquare,
    title: "Text Chatbot Agent",
    shortDescription: "Intelligent AI-powered text chatbot for customer support, lead generation, and automated assistance with natural language understanding.",
    fullDescription: "Transform your customer service with our advanced AI text chatbot. Built on cutting-edge large language models, our chatbot understands context, maintains conversation history, and provides accurate, helpful responses 24/7. Perfect for customer support, lead qualification, FAQ handling, and internal knowledge bases.",
    features: [
      "Natural Language Processing",
      "Context-Aware Conversations",
      "Multi-language Support",
      "CRM & Database Integration",
      "Custom Training on Your Data",
      "Analytics & Insights Dashboard",
      "Human Handoff Capabilities",
      "Voice & Text Support"
    ],
    technologies: ["OpenAI GPT", "LangChain", "Python", "Node.js", "Redis", "PostgreSQL"],
    caseStudy: {
      client: "E-Commerce Plus",
      industry: "E-commerce & Retail",
      challenge: "E-Commerce Plus was handling 80,000+ customer queries monthly with average response times of 2 hours. Customer satisfaction was declining, and support costs were consuming 15% of revenue.",
      solution: "We deployed an AI chatbot trained on their product catalog, return policies, and shipping information. The bot handles order inquiries, product recommendations, return requests, and escalates complex issues to human agents seamlessly.",
      results: [
        "Resolved 78% of queries without human intervention",
        "Reduced average response time to under 5 seconds",
        "Improved customer satisfaction score by 48%",
        "Saved $3.2M annually in support costs"
      ],
      metrics: [
        { label: "Query Resolution", value: "78%" },
        { label: "Response Time", value: "<5s" },
        { label: "Cost Savings", value: "$3.2M" },
        { label: "CSAT Improvement", value: "+48%" }
      ]
    },
    demoLink: "https://demo.chatbot.example.com"
  },
  {
    id: "voice-chatbot-agent",
    icon: Mic,
    title: "Voice Chatbot Agent",
    shortDescription: "Natural-sounding AI voice agents for phone conversations, appointment scheduling, and customer service with seamless human handoff.",
    fullDescription: "Elevate your phone experience with AI voice agents that sound natural and understand complex requests. Our voice bots handle inbound and outbound calls, from appointment scheduling to complex troubleshooting, with seamless handoffs to human agents when needed. Perfect for customer service, sales, and appointment management.",
    features: [
      "Natural Speech Recognition",
      "Human-like Voice Synthesis",
      "Real-time Sentiment Analysis",
      "Call Recording & Transcription",
      "IVR & Telephony Integration",
      "Multi-accent & Dialect Support",
      "Appointment Scheduling",
      "Outbound Call Campaigns"
    ],
    technologies: ["Whisper AI", "ElevenLabs", "Twilio", "WebRTC", "Python", "TensorFlow"],
    caseStudy: {
      client: "HealthCare Connect",
      industry: "Healthcare & Telemedicine",
      challenge: "HealthCare Connect was missing 40% of appointment booking calls due to limited staff availability. No-show rates were at 32%, causing significant revenue loss and scheduling inefficiencies. Patients complained about long wait times.",
      solution: "We implemented an AI voice agent that handles appointment scheduling, sends automated reminders, confirms appointments, and reschedules as needed. The system integrates with their EHR for real-time availability checking and patient record access.",
      results: [
        "Captured 100% of incoming booking calls",
        "Reduced no-show rate from 32% to 9%",
        "Scheduled 4,200 additional appointments monthly",
        "Freed 280 staff hours monthly for patient care"
      ],
      metrics: [
        { label: "Call Capture", value: "100%" },
        { label: "No-show Reduction", value: "-72%" },
        { label: "Monthly Appointments", value: "+4,200" },
        { label: "Staff Hours Saved", value: "280/mo" }
      ]
    },
    demoLink: "https://demo.voicebot.example.com"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
