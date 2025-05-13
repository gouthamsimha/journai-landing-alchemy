
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';

const features = [
  {
    title: "Effortless Capture",
    description: "Speak or type, we'll handle the rest. JournAI makes recording your thoughts as natural as thinking them.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 20H26M14 26H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Living Knowledge Base",
    description: "Search every moment, even the half-remembered ones. Your journal becomes a personal wiki of your experiences and insights.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8C12 6.89543 12.8954 6 14 6H30C31.1046 6 32 6.89543 32 8V32C32 33.1046 31.1046 34 30 34H14C12.8954 34 12 33.1046 12 32V8Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 12H8C6.89543 12 6 12.8954 6 14V34C6 35.1046 6.89543 36 8 36H24C25.1046 36 26 35.1046 26 34V30" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 16H26M18 22H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Actionable Insights",
    description: "Mood trends, entry streaks, podcast recommendations tailored to you. Transform reflection into personal growth.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 20L14 28L34 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 8H34V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const FeatureGrid = () => {
  const { transition } = useAnimationConfig();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition
    }
  };

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <h2 className="text-3xl md:text-4xl font-inter-tight font-bold mb-4">
            Everything you need for <span className="text-accent">thoughtful journaling</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-fg/70">
            We've reimagined the journaling experience with AI that understands you
            and helps you grow through reflection.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="relative p-8 rounded-xl bg-fg/5 hover:bg-fg/10 transition-colors border border-fg/10"
              variants={itemVariants}
            >
              <div className="text-accent mb-5">{feature.icon}</div>
              <h3 className="text-xl font-inter-tight font-bold mb-3">{feature.title}</h3>
              <p className="text-fg/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;
