import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuotationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const serviceOptions = [
  "Web Application Development",
  "E-commerce Platform",
  "Banking Solution",
  "Fintech Application",
  "AI Text Chat Bot",
  "AI Voice Chat Bot",
  "AI Onboarding Agent",
  "Digital Wallet Solution",
  "Project Management System",
  "Custom Solution",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

const timelineOptions = [
  "Less than 1 month",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Ongoing partnership",
];

export function QuotationForm({ open, onOpenChange }: QuotationFormProps) {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send quotation request");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Quotation Request Sent!",
        description: "Our team will contact you within 24 hours.",
      });
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send quotation request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = formData.service && formData.budget && formData.timeline;
  const isStep3Valid = formData.description;

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      description: "",
    });
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(resetForm, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="bg-primary p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary-foreground">
              Start Your Project
            </DialogTitle>
            <p className="text-primary-foreground/80">
              Tell us about your project and get a custom quote
            </p>
          </DialogHeader>

          {/* Progress Steps */}
          {!isSubmitted && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {[1, 2, 3].map((s) => (
                <motion.div
                  key={s}
                  className={`w-3 h-3 rounded-full ${
                    s === step
                      ? "bg-primary-foreground"
                      : s < step
                      ? "bg-primary-foreground/80"
                      : "bg-primary-foreground/30"
                  }`}
                  animate={{ scale: s === step ? 1.2 : 1 }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Request Submitted!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest! Our team will review your project
                  requirements and get back to you within 24 hours with a
                  detailed quote.
                </p>
                <Button variant="hero" onClick={handleClose}>
                  Close
                </Button>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Contact Info */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-semibold text-lg text-foreground mb-4">
                      Your Contact Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Doe"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@example.com"
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Your Company"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="h-12"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Project Details */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-semibold text-lg text-foreground mb-4">
                      Project Details
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Type *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange("service", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range *
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => handleChange("budget", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Timeline *
                      </label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => handleChange("timeline", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Description */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-semibold text-lg text-foreground mb-4">
                      Project Description
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tell us about your project *
                      </label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        placeholder="Describe your project requirements, goals, and any specific features you need..."
                        rows={6}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button
                      variant="hero"
                      onClick={nextStep}
                      disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      variant="hero"
                      onClick={handleSubmit}
                      disabled={!isStep3Valid || isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                  )}
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
