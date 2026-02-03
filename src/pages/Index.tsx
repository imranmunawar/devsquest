import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AIFintech } from "@/components/AIFintech";
import { Projects } from "@/components/Projects";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Devs Quest",
  "description": "Digital Solutions & Software Development Company specializing in AI, Fintech, and Enterprise Systems",
  "url": "https://devsquest.com",
  "logo": "https://devsquest.com/logo.png",
  "sameAs": [
    "https://twitter.com/DevsQuest",
    "https://www.linkedin.com/company/devsquest1/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "sales"
  },
  "offers": {
    "@type": "AggregateOffer",
    "offerCount": "6",
    "lowPrice": "5000",
    "priceCurrency": "USD"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Devs Quest | Digital Solutions & Software Development"
        description="Transform your vision into digital reality. We craft cutting-edge web applications, AI-powered fintech solutions, and enterprise systems that drive innovation."
        keywords="software development, web applications, fintech, AI chatbot, digital wallet, enterprise solutions, custom software"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Navbar />
      <Hero />
      <Services />
      <AIFintech />
      <Projects />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
