
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';

const faqs = [
  {
    question: "How does JournAI differ from normal note apps?",
    answer: "Unlike traditional note apps, JournAI combines the reflective practice of journaling with AI-powered insights. It helps you identify patterns in your thoughts, provides personalized recommendations, and makes your past entries searchable in natural language."
  },
  {
    question: "Is my data safe and private?",
    answer: "Absolutely. Your journal entries are protected with end-to-end encryption, meaning only you can access them. We don't sell your data or use it for advertising. Your thoughts remain private and secure."
  },
  {
    question: "Can I import my existing journal entries?",
    answer: "Yes! JournAI supports importing text entries from common formats including .txt, .md, .docx, and even PDFs. The AI will process your historical entries to include them in pattern recognition and insights."
  },
  {
    question: "Do I need to journal daily for this to be effective?",
    answer: "Not at all. While regular journaling provides the most benefits, JournAI is designed for flexibility. Whether you journal daily, weekly, or spontaneously, the app adapts to your rhythm and still provides valuable insights."
  },
  {
    question: "Is there a web version or only mobile?",
    answer: "JournAI is available as both a native iOS app and a responsive web application. Your entries sync seamlessly between devices, so you can journal wherever inspiration strikes."
  }
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { transition } = useAnimationConfig();
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <h2 className="text-3xl md:text-4xl font-inter-tight font-bold mb-4">
            Frequently asked <span className="text-accent">questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-fg/70">
            Everything you need to know about JournAI
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`border-b border-fg/10 ${index === 0 ? 'border-t' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center py-6 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="ml-4 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transition-transform ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-fg/70">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
