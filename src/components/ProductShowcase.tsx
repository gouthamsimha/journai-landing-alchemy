
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const { parallaxFactor, transition } = useAnimationConfig();
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create more refined animations
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Spring-based animation for smoother scrolling
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  
  // More gradual mask reveal
  const maskProgress = useTransform(scrollYProgress, [0.1, 0.4], [0, 100]);
  const maskValue = useMotionTemplate`linear-gradient(to bottom, transparent, black ${maskProgress}%, transparent)`;
  
  // Enhanced rotations for 3D effect
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);

  // Hover effect for interactive feel
  const handleHover = (hovering: boolean) => {
    setIsHovered(hovering);
  };

  return (
    <section 
      id="product" 
      ref={sectionRef} 
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Ambient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg to-bg/95 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
            className="text-3xl md:text-4xl font-inter-tight font-bold mb-6"
          >
            Journaling reinvented for <span className="text-accent">digital natives</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-fg/70"
          >
            Modern life moves fast. JournAI helps you capture moments that matter, 
            organize your thoughts, and rediscover insights when you need them most.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-sm mx-auto relative"
          style={{ 
            y: springY,
            rotateX: rotateX,
            rotateY: rotateY,
            perspective: "1200px"
          }}
          ref={phoneRef}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          {/* Enhanced glass phone frame */}
          <div className="relative z-10 mx-auto">
            <motion.div 
              className="aspect-[9/19] relative rounded-[38px] overflow-hidden border-8 border-fg/10 shadow-default-light dark:shadow-default-dark glass"
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
            >
              {/* Realistic notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20"></div>
              
              {/* App screen with masked content */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-accent/10 flex items-center justify-center">
                <motion.div 
                  className="text-center p-6 h-full overflow-hidden"
                  style={{
                    maskImage: maskValue
                  }}
                >
                  <motion.div
                    className="h-full flex flex-col"
                    animate={{ 
                      translateY: isHovered ? 0 : "-30%"
                    }}
                    transition={{ 
                      duration: 3, 
                      ease: "linear", 
                      repeat: isHovered ? 0 : Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <div className="py-6 space-y-6">
                      <div>
                        <p className="text-lg font-medium mb-3">Today's Entry</p>
                        <div className="h-2 w-full rounded-full bg-fg/10 mb-4"></div>
                        <div className="h-2 w-3/4 rounded-full bg-fg/10 mb-6"></div>
                        <div className="text-left space-y-3">
                          <p className="text-sm">Feeling energized after my morning run. The sunrise was incredible today - all orange and pink across the bay.</p>
                          <p className="text-sm">Need to follow up with Alex about the project timeline. Thinking we should extend by a week.</p>
                          <p className="text-sm">Reminder to book flights for the conference next month!</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-lg font-medium mb-3 mt-10">Yesterday's Highlights</p>
                        <div className="h-2 w-full rounded-full bg-fg/10 mb-4"></div>
                        <div className="h-2 w-1/2 rounded-full bg-fg/10 mb-6"></div>
                        <div className="text-left space-y-3">
                          <p className="text-sm">Meeting with the design team went well. New brand direction is exciting!</p>
                          <p className="text-sm">Discovered a great new coffee shop downtown. Need to try their pastries next time.</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-lg font-medium mb-3 mt-10">JournAI Insights</p>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs">Mood Trend</span>
                          <span className="text-xs text-accent">Looking Good!</span>
                        </div>
                        <div className="h-8 bg-fg/5 rounded-full flex items-center p-1">
                          <motion.div 
                            className="h-6 rounded-full bg-gradient-to-r from-accent/80 to-accent"
                            style={{ width: "70%" }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Bottom home indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-black/20 rounded-full z-20"></div>
            </motion.div>
          </div>
          
          {/* Enhanced decorative glow elements */}
          <motion.div 
            className="absolute top-1/3 -left-10 w-32 h-32 rounded-full bg-accent/20 blur-xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-1/4 -right-16 w-40 h-40 rounded-full bg-accent/30 blur-xl"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5
            }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
