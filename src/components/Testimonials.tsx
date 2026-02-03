import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Faisal Khan",
    role: "Strategic Account Manager UK/US",
    image: "/faisal.jpeg",
    content: "Devs Quest developed our VRD platform, a comprehensive Job Fair and Education Fair Application. The virtual experience is intuitive, engaging, and has revolutionized how we conduct recruitment and education fairs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Khurram Kirmani",
    role: "Chairman and Founder at Wurqi",
    image: "/khurram.jpeg",
    content: "Devs Quest developed our Project Management Application Wurqi with exceptional attention to detail. The platform has transformed how we manage projects and collaborate with our team. Outstanding work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Riley Swenson",
    role: "CTO, Planetwealth",
    image: "/Riley.jpeg",
    content: "Devs Quest transformed our entire digital infrastructure. Their AI chatbot solution reduced our customer service costs by 60% while improving satisfaction scores.",
    rating: 5,
  },
  {
    id: 4,
    name: "Aleksandr Karanda",
    role: "CTO, Decima Digital",
    image: "/Aleksander.jpeg",
    content: "Devs Quest developed our closed digital wallet application with exceptional security and user experience. The platform provides seamless transactions, robust encryption, and intuitive interface design.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-foreground">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-background"
          >
            What Our <span className="text-primary">Clients Say</span>
          </motion.h2>
          <motion.p className="text-xl text-background/70">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover relative">
                {/* Quote Icon */}
                <motion.div 
                  className="absolute top-6 right-6 text-primary/20"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Quote className="w-10 h-10" />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
