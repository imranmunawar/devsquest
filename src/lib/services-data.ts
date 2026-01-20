import { 
  MessageSquare, 
  Mic, 
  UserCheck, 
  Wallet,
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

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  caseStudy: CaseStudy;
}

export const services: Service[] = [
  {
    id: "ai-text-chatbot",
    icon: MessageSquare,
    title: "AI Text Chat Bot",
    shortDescription: "Intelligent conversational AI that handles customer queries 24/7 with natural language understanding and instant responses.",
    fullDescription: "Transform your customer service with our AI-powered text chatbots. Built on advanced large language models, our chatbots understand context, remember conversation history, and provide accurate, helpful responses. Perfect for customer support, lead generation, and internal knowledge bases.",
    features: [
      "Natural Language Processing",
      "Multi-language Support",
      "Context-Aware Conversations",
      "Integration with CRM & Databases",
      "Custom Training on Your Data",
      "Analytics & Insights Dashboard"
    ],
    technologies: ["OpenAI GPT", "LangChain", "Python", "Node.js", "Redis", "PostgreSQL"],
    caseStudy: {
      client: "FinServe Bank",
      industry: "Banking & Finance",
      challenge: "FinServe was handling 50,000+ customer queries monthly with 45-minute average wait times. Customer satisfaction was declining, and support costs were escalating.",
      solution: "We deployed an AI chatbot trained on their banking knowledge base, integrated with their core banking system. The bot handles account inquiries, transaction history, loan eligibility, and escalates complex issues to human agents.",
      results: [
        "Resolved 73% of queries without human intervention",
        "Reduced average response time to under 10 seconds",
        "Improved customer satisfaction score by 42%",
        "Saved $2.1M annually in support costs"
      ],
      metrics: [
        { label: "Query Resolution", value: "73%" },
        { label: "Response Time", value: "<10s" },
        { label: "Cost Savings", value: "$2.1M" },
        { label: "CSAT Improvement", value: "+42%" }
      ]
    }
  },
  {
    id: "ai-voice-chatbot",
    icon: Mic,
    title: "AI Voice Chat Bot",
    shortDescription: "Human-like voice AI agents that conduct natural phone conversations for sales, support, and appointments.",
    fullDescription: "Elevate your phone experience with AI voice agents that sound natural and understand complex requests. Our voice bots handle inbound and outbound calls, from appointment scheduling to complex troubleshooting, with seamless handoffs to human agents when needed.",
    features: [
      "Natural Speech Recognition",
      "Human-like Voice Synthesis",
      "Real-time Sentiment Analysis",
      "Call Recording & Transcription",
      "IVR & Telephony Integration",
      "Multi-accent & Dialect Support"
    ],
    technologies: ["Whisper AI", "ElevenLabs", "Twilio", "WebRTC", "Python", "TensorFlow"],
    caseStudy: {
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "The healthcare network was missing 35% of appointment booking calls due to staff limitations. No-show rates were at 28%, causing significant revenue loss and scheduling inefficiencies.",
      solution: "We implemented an AI voice agent that handles appointment scheduling, sends reminders, confirms appointments, and reschedules as needed. The system integrates with their EHR for availability checking.",
      results: [
        "Captured 100% of incoming booking calls",
        "Reduced no-show rate from 28% to 8%",
        "Scheduled 3,400 additional appointments monthly",
        "Freed staff for higher-value patient care"
      ],
      metrics: [
        { label: "Call Capture", value: "100%" },
        { label: "No-show Reduction", value: "-71%" },
        { label: "Monthly Appointments", value: "+3,400" },
        { label: "Staff Hours Saved", value: "240/mo" }
      ]
    }
  },
  {
    id: "ai-onboarding-agent",
    icon: UserCheck,
    title: "AI Onboarding Agent",
    shortDescription: "Automated customer and employee onboarding with intelligent document processing and personalized guidance.",
    fullDescription: "Streamline your onboarding process with AI agents that guide users through complex workflows. From document verification and KYC compliance to personalized training paths, our onboarding agents ensure consistency, compliance, and exceptional first impressions.",
    features: [
      "Intelligent Document Processing",
      "KYC/AML Compliance Automation",
      "Personalized Onboarding Journeys",
      "Progress Tracking & Reminders",
      "Video KYC Integration",
      "Biometric Verification"
    ],
    technologies: ["OCR", "Computer Vision", "TensorFlow", "AWS Rekognition", "Node.js", "MongoDB"],
    caseStudy: {
      client: "NeoCredit Finance",
      industry: "Fintech / Lending",
      challenge: "New customer onboarding took 5-7 days with manual document verification. 40% of applications were abandoned, and compliance risks were high due to human error in verification.",
      solution: "We built an AI onboarding agent that guides applicants through document submission, performs real-time OCR and verification, conducts video KYC, and makes instant eligibility decisions while maintaining full compliance audit trails.",
      results: [
        "Reduced onboarding time from 5 days to 15 minutes",
        "Decreased application abandonment by 65%",
        "Achieved 99.7% accuracy in document verification",
        "Zero compliance violations in 12 months"
      ],
      metrics: [
        { label: "Onboarding Time", value: "15 min" },
        { label: "Abandonment Drop", value: "-65%" },
        { label: "Verification Accuracy", value: "99.7%" },
        { label: "Compliance Rate", value: "100%" }
      ]
    }
  },
  {
    id: "digital-wallets",
    icon: Wallet,
    title: "Digital Wallets",
    shortDescription: "Secure closed-loop and open-loop wallet solutions with seamless payments, rewards, and financial management.",
    fullDescription: "Build your own digital wallet ecosystem with our comprehensive wallet platform. Whether you need a closed-loop wallet for loyalty programs and corporate expense management, or an open-loop wallet for universal payments, we deliver secure, scalable, and compliant solutions.",
    features: [
      "Closed-Loop Wallet Systems",
      "Open-Loop Payment Integration",
      "QR Code & NFC Payments",
      "Rewards & Cashback Engine",
      "P2P Transfers",
      "Multi-currency Support"
    ],
    technologies: ["Blockchain", "HSM", "PCI-DSS Compliant", "React Native", "Kotlin", "PostgreSQL"],
    caseStudy: {
      client: "RetailMax Corporation",
      industry: "Retail & E-commerce",
      challenge: "RetailMax wanted to increase customer loyalty and reduce payment processing fees. Their existing loyalty program had low engagement (12% active users), and third-party payment fees were cutting into margins.",
      solution: "We developed a hybrid digital wallet with closed-loop store credits, open-loop card payments, and an AI-powered rewards engine. Customers earn cashback on purchases, which is credited to their wallet for future use.",
      results: [
        "Increased loyalty program engagement to 67%",
        "Reduced payment processing costs by 45%",
        "Wallet users spend 38% more per transaction",
        "Generated $8.5M in wallet-funded purchases annually"
      ],
      metrics: [
        { label: "Active Users", value: "67%" },
        { label: "Cost Reduction", value: "45%" },
        { label: "Spend Increase", value: "+38%" },
        { label: "Annual Revenue", value: "$8.5M" }
      ]
    }
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}
