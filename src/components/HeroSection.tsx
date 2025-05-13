
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';

const HeroSection = () => {
  const { transition, animationDistance } = useAnimationConfig();
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background elements with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        initial={{ scale: 1.05 }}
        animate={{ 
          y: [0, -40, 0],
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "linear"
            }
          }
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent"></div>
      </motion.div>
      
      <div className="container mx-auto max-w-4xl z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-inter-tight font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: animationDistance }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
          >
            Your thoughts, <br className="md:hidden" />
            <span className="text-accent">beautifully remembered.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-inter max-w-2xl mx-auto mb-10 text-fg/80"
            initial={{ opacity: 0, y: animationDistance }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
          >
            JournAI turns fleeting ideas into a living memory you can chat with.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: animationDistance }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.5 }}
          >
            <a 
              href="#get-started" 
              className="px-8 py-3 bg-accent text-white rounded-full font-medium text-lg hover:bg-accent/90 transition-colors"
            >
              Start journaling free
            </a>
            <a 
              href="#demo" 
              className="px-8 py-3 border-2 border-fg/20 hover:border-accent hover:text-accent rounded-full font-medium text-lg transition-colors"
            >
              Watch demo
            </a>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center gap-4 text-sm font-medium text-fg/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span>✓ No credit card</span>
            <span className="h-1 w-1 rounded-full bg-fg/30"></span>
            <span>✓ 7-day free trial</span>
            <span className="h-1 w-1 rounded-full bg-fg/30"></span>
            <span>✓ Cancel anytime</span>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a 
          href="#product" 
          className="flex flex-col items-center text-sm text-fg/50 hover:text-accent transition-colors"
        >
          <span>Scroll to explore</span>
          <svg className="w-5 h-5 mt-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
