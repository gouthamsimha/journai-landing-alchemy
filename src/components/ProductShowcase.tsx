
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { parallaxFactor, transition } = useAnimationConfig();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const maskProgress = useTransform(scrollYProgress, [0.2, 0.6], [0, 100]);

  return (
    <section 
      id="product" 
      ref={sectionRef} 
      className="py-20 md:py-32 relative overflow-hidden"
    >
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
          style={{ y }}
        >
          {/* Phone frame */}
          <div className="relative z-10 mx-auto">
            <div className="aspect-[9/19] relative rounded-[38px] overflow-hidden border-8 border-fg/10 shadow-default-light dark:shadow-default-dark glass">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20"></div>
              
              {/* App screen - would be replaced with actual screen recording */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-accent/10 flex items-center justify-center">
                <motion.div 
                  className="text-center p-6"
                  style={{
                    maskImage: `linear-gradient(to bottom, transparent, black ${maskProgress}%, transparent)`
                  }}
                >
                  <p className="text-lg font-medium mb-3">Today's Entry</p>
                  <div className="h-2 w-full rounded-full bg-fg/10 mb-4"></div>
                  <div className="h-2 w-3/4 rounded-full bg-fg/10 mb-6"></div>
                  <div className="text-left space-y-3">
                    <p className="text-sm">Feeling energized after my morning run. The sunrise was incredible today - all orange and pink across the bay.</p>
                    <p className="text-sm">Need to follow up with Alex about the project timeline. Thinking we should extend by a week.</p>
                    <p className="text-sm">Reminder to book flights for the conference next month!</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Bottom home indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-black/20 rounded-full z-20"></div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/3 -left-10 w-20 h-20 rounded-full bg-accent/20 blur-xl"></div>
          <div className="absolute bottom-1/4 -right-16 w-32 h-32 rounded-full bg-accent/30 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
