import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Eye, Heart, Users, Award, Globe, Sparkles } from "lucide-react";
import { SEO } from "@/components/SEO";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Visionary leader with 15+ years in tech innovation"
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    bio: "AI & blockchain expert driving technical excellence"
  },
  {
    name: "Michael Roberts",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Award-winning designer crafting exceptional experiences"
  },
  {
    name: "Emily Johnson",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack architect building scalable solutions"
  }
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to deliver transformative solutions."
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're committed to exceeding expectations at every step."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from diverse perspectives working together."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality is non-negotiable. We deliver excellence in every line of code and pixel."
  }
];

const milestones = [
  { year: "2016", event: "Founded Devs Quest with a vision to transform businesses digitally" },
  { year: "2018", event: "Expanded to fintech solutions, launching our first banking platform" },
  { year: "2020", event: "Pioneered AI integration services, serving 50+ global clients" },
  { year: "2022", event: "Launched Digital Wallet solutions, processing $100M+ transactions" },
  { year: "2024", event: "Celebrating 150+ successful projects across 20+ countries" },
  { year: new Date().getFullYear().toString(), event: "Continuing to innovate and expand our global footprint with cutting-edge solutions" }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - Devs Quest | Our Story, Mission & Team"
        description="Learn about Devs Quest's journey, our passionate team, and our mission to transform businesses through innovative digital solutions and AI-powered fintech."
        keywords="about devs quest, software development company, tech team, digital innovation, fintech experts"
        canonicalUrl="/about"
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
              <span className="text-sm font-medium text-background">Our Story</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background">
              About <span className="text-primary">Devs Quest</span>
            </h1>
            <p className="text-xl text-background/70 max-w-2xl mx-auto">
              We're a team of passionate innovators dedicated to transforming businesses 
              through cutting-edge digital solutions and AI-powered technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border-2 border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance efficiency, and create lasting competitive advantages in the digital age.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border-2 border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the global leader in AI-powered digital transformation, setting the 
                standard for innovation, quality, and client success in the technology industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-colors text-center"
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From a small startup to a global digital solutions provider.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center text-primary font-bold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {milestone.year}
                  </motion.div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="bg-card p-6 rounded-xl border border-border flex-1">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The brilliant minds behind Devs Quest's success.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl border-2 border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-foreground">Global Presence</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Serving clients across 20+ countries with offices in major tech hubs worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["New York", "London", "Singapore", "Dubai"].map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-foreground font-semibold"
                >
                  {city}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
