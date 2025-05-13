
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';
import { ChevronDown } from 'lucide-react';

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
        style={{ opacity: 0.06 }}
        initial={{ scale: 1.05 }}
        animate={{ 
          y: [0, -20, 0],
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 22,
              ease: "linear"
            }
          }
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-accent to-accent/50 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[45vw] h-[45vw] rounded-full bg-gradient-to-tl from-accent/60 to-accent/20 blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 w-[25vw] h-[25vw] rounded-full bg-gradient-to-bl from-accent/40 to-accent/10 blur-[80px]"></div>
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
              transition={{ ...transition, delay: 0.2 }}
            >
              Your thoughts, <br className="md:hidden" />
              <motion.span 
                className="text-accent inline-block relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.4 }}
              >
                beautifully remembered.
                <motion.div 
                  className="absolute -z-10 inset-0 bg-accent/10 rounded-xl scale-110"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: [1.1, 1.15, 1.1] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.5 },
                    scale: { 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 4,
                      ease: "easeInOut",
                      delay: 0.8
                    } 
                  }}
                ></motion.div>
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl font-inter max-w-2xl mx-auto mb-10 text-fg/80"
            initial={{ opacity: 0, y: animationDistance }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
          >
            JournAI turns fleeting ideas into a living memory you can chat with.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: animationDistance }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
          >
            <motion.a 
              href="#get-started" 
              className="px-8 py-3 bg-accent text-white rounded-full font-medium text-lg hover:bg-accent/90 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              Start journaling free
            </motion.a>
            <motion.a 
              href="#demo" 
              className="px-8 py-3 border-2 border-fg/20 hover:border-accent hover:text-accent rounded-full font-medium text-lg transition-colors flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Watch demo</span>
              <motion.div 
                className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1, 0.8] }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 2,
                  ease: "easeInOut" 
                }}
              >
                <div className="w-1 h-1 bg-accent/70 rounded-full group-hover:bg-accent transition-colors"></div>
              </motion.div>
            </motion.a>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-medium text-fg/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="flex items-center">
              <motion.span 
                className="inline-block mr-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 5, 
                }}
              >✓</motion.span> No credit card
            </span>
            <span className="hidden sm:block h-1 w-1 rounded-full bg-fg/30"></span>
            <span className="flex items-center">
              <motion.span 
                className="inline-block mr-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 5,
                  delay: 0.5 
                }}
              >✓</motion.span> 7-day free trial
            </span>
            <span className="hidden sm:block h-1 w-1 rounded-full bg-fg/30"></span>
            <span className="flex items-center">
              <motion.span 
                className="inline-block mr-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 5,
                  delay: 1
                }}
              >✓</motion.span> Cancel anytime
            </span>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.a 
          href="#product" 
          className="flex flex-col items-center text-sm text-fg/50 hover:text-accent transition-colors group"
          whileHover={{ y: 3 }}
        >
          <span className="mb-2 opacity-75 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
          <motion.div
            animate={{ 
              y: [0, 5, 0], 
              opacity: [0.5, 0.8, 0.5] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-accent/10 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
            <ChevronDown className="w-5 h-5 relative" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
