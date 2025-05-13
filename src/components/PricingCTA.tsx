
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';

const PricingCTA = () => {
  const { transition } = useAnimationConfig();
  
  const features = [
    "Unlimited journal entries",
    "AI-powered insights & reminders",
    "Advanced search capabilities",
    "Mood tracking & visualization",
    "Voice-to-text journaling",
    "End-to-end encryption",
    "Cross-platform sync",
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-fg/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <h2 className="text-3xl md:text-4xl font-inter-tight font-bold mb-4">
            Simple, <span className="text-accent">transparent</span> pricing
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-fg/70">
            One plan that gives you everything you need to journal smarter.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative overflow-hidden rounded-2xl shadow-default-light dark:shadow-default-dark border border-fg/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.2 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5"></div>
            
            <div className="relative p-8 md:p-12">
              <div className="md:flex justify-between items-start">
                {/* Left column - plan details */}
                <div className="mb-8 md:mb-0">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                    Most Popular
                  </div>
                  <h3 className="text-2xl md:text-3xl font-inter-tight font-bold mb-2">Everything you need</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-inter-tight font-bold">$8.99</span>
                    <span className="text-lg text-fg/60 ml-2">/month</span>
                  </div>
                  <p className="text-fg/70 mb-6">7-day free trial. No credit card required to start.</p>
                  <a 
                    href="#get-started"
                    className="inline-block px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
                  >
                    Start journaling free
                  </a>
                  <p className="text-xs text-fg/50 mt-4">
                    Money back guarantee within 30 days. Cancel anytime.
                  </p>
                </div>
                
                {/* Right column - features */}
                <div className="bg-fg/5 rounded-lg p-6 md:w-1/2">
                  <h4 className="font-medium mb-4">Everything included:</h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...transition, delay: 0.1 * index }}
                      >
                        <svg className="w-5 h-5 text-accent mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-sm text-fg/60 max-w-2xl mx-auto">
              <strong className="text-accent">Your privacy matters:</strong> JournAI uses end-to-end encryption to ensure 
              that only you can access your journal entries. We never sell your data or use it for advertising.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
