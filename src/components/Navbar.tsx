import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { QuotationForm } from "./QuotationForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "AI & Fintech", href: "/ai-fintech" },
  { name: "Projects", href: "/projects" },
  { name: "Staff Augmentation", href: "/staff-augmentation" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuotation, setShowQuotation] = useState(false);

  return (
    <>
      <QuotationForm open={showQuotation} onOpenChange={setShowQuotation} />
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Devs Quests" className="h-12" />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.flatMap((link, index) => {
              const items = [
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ];
              
              if (link.name === "Services") {
                items.push(
                  <motion.div
                    key="products"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 1) + 0.3 }}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group flex items-center gap-1 outline-none">
                        Products
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        <DropdownMenuItem asChild>
                          <Link to="/products/job-portal" className="cursor-pointer">Job Portal</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/products/close-loop-digital-wallet" className="cursor-pointer">Close Loop Digital Wallet</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/products/text-chatbot-agent" className="cursor-pointer">Text Chatbot Agent</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/products/voice-chatbot-agent" className="cursor-pointer">Voice Chatbot Agent</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </motion.div>
                );
              }
              
              return items;
            })}
          </div>

          <motion.div className="hidden md:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Button variant="hero" size="lg" onClick={() => setShowQuotation(true)}>Get Started</Button>
          </motion.div>

          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-6 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.name === "Services" ? (
                      <>
                        <Link to={link.href} className="text-muted-foreground hover:text-primary py-2 font-medium" onClick={() => setIsOpen(false)}>
                          {link.name}
                        </Link>
                        <div className="flex flex-col gap-2 py-2 pl-4">
                          <span className="text-muted-foreground font-medium text-sm">Products</span>
                          <div className="flex flex-col gap-2 pl-4">
                            <Link to="/products/job-portal" className="text-muted-foreground hover:text-primary py-1 text-sm" onClick={() => setIsOpen(false)}>
                              Job Portal
                            </Link>
                            <Link to="/products/close-loop-digital-wallet" className="text-muted-foreground hover:text-primary py-1 text-sm" onClick={() => setIsOpen(false)}>
                              Close Loop Digital Wallet
                            </Link>
                            <Link to="/products/text-chatbot-agent" className="text-muted-foreground hover:text-primary py-1 text-sm" onClick={() => setIsOpen(false)}>
                              Text Chatbot Agent
                            </Link>
                            <Link to="/products/voice-chatbot-agent" className="text-muted-foreground hover:text-primary py-1 text-sm" onClick={() => setIsOpen(false)}>
                              Voice Chatbot Agent
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link to={link.href} className="text-muted-foreground hover:text-primary py-2 font-medium" onClick={() => setIsOpen(false)}>
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button variant="hero" size="lg" className="mt-4" onClick={() => { setShowQuotation(true); setIsOpen(false); }}>Get Started</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
}
