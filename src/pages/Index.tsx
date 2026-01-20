import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AIFintech } from "@/components/AIFintech";
import { Projects } from "@/components/Projects";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <AIFintech />
      <Projects />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
