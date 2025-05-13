
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';
import { ArrowDown, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { transition, animationDistance } = useAnimationConfig();
  
  // Create scroll-linked animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Enhanced background elements with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity: 0.075 }}
        initial={{ scale: 1.05 }}
        animate={{ 
          y: [0, -30, 0],
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
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-accent to-accent/50 blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[40vw] h-[40vw] rounded-full bg-gradient-to-tl from-accent/80 to-accent/30 blur-[100px]"></div>
      </motion.div>
      
      <motion.div 
        className="container mx-auto max-w-4xl z-10"
        style={{ opacity, y }}
      >
        <div className="text-center">
          <motion.div className="overflow-hidden mb-6">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-inter-tight font-bold tracking-tight"
              initial={{ opacity: 0, y: animationDistance }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.3 }}
            >
              Your thoughts, <br className="md:hidden" />
              <motion.span 
                className="text-accent inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.5 }}
              >
                beautifully remembered.
              </motion.span>
            </motion.h1>
          </motion.div>
          
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
            <motion.a 
              href="#get-started" 
              className="px-8 py-3 bg-accent text-white rounded-full font-medium text-lg hover:bg-accent/90 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              Start journaling free
            </motion.a>
            <motion.a 
              href="#demo" 
              className="px-8 py-3 border-2 border-fg/20 hover:border-accent hover:text-accent rounded-full font-medium text-lg transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Watch demo
            </motion.a>
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
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.a 
          href="#product" 
          className="flex flex-col items-center text-sm text-fg/50 hover:text-accent transition-colors"
          whileHover={{ y: 5 }}
        >
          <span className="mb-2">Scroll to explore</span>
          <motion.div
            animate={{ 
              y: [0, 5, 0], 
              opacity: [0.5, 1, 0.5] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
