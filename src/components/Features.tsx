import { Shield, Zap, Users, Code2, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protecting your data and users at every layer.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second load times and seamless interactions.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned developers, designers, and strategists dedicated to your success.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Maintainable, scalable codebases built with industry best practices.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Agile methodology ensuring projects are delivered on schedule.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services.",
  },
];

export function Features() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">NexaTech</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We combine technical excellence with strategic thinking to deliver solutions that not only work flawlessly but drive real business results.
            </p>
            
            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="glass rounded-3xl p-10">
              <div className="grid grid-cols-2 gap-8">
                {features.slice(4).map((feature) => (
                  <div key={feature.title} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
