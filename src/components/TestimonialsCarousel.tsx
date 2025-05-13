
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';

// Sample testimonial data
const testimonials = [
  {
    name: "Alex Carter",
    title: "Product Designer",
    content: "JournAI has completely transformed how I process my thoughts. I used to jot ideas in five different note apps. Now everything is in one place, and the AI helps me see patterns I never noticed before.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Samantha Wright",
    title: "Entrepreneur",
    content: "As someone juggling multiple businesses, I need a place to download my thoughts quickly. JournAI's voice-to-text feature is incredibly accurate, and the insights I get from reviewing past entries are invaluable.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    title: "Software Engineer",
    content: "The search capability is mind-blowing. I can find half-remembered ideas from months ago just by typing a few keywords. It's like having a second brain that remembers everything for me.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    name: "Priya Sharma",
    title: "Medical Student",
    content: "JournAI has been my companion through med school. It helps me reflect on difficult days and celebrates my wins. The mood tracking feature showed me how my stress levels decrease after journaling.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
];

const TestimonialsCarousel = () => {
  const { transition } = useAnimationConfig();
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  // Auto-slide every 6 seconds
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  // Pause auto-slide on hover
  const pauseSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  // Resume auto-slide
  const resumeSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <h2 className="text-3xl md:text-4xl font-inter-tight font-bold mb-4">
            Loved by <span className="text-accent">thousands</span> of journalers
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-fg/70">
            Join the community of people who've transformed their daily reflection with AI assistance.
          </p>
        </motion.div>
        
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={pauseSlider}
          onMouseLeave={resumeSlider}
          onTouchStart={pauseSlider}
          onTouchEnd={resumeSlider}
        >
          {/* Desktop carousel */}
          <div className="hidden md:block relative h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0.5,
                  x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                  scale: index === currentIndex ? 1 : 0.8,
                  zIndex: index === currentIndex ? 10 : 5,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="h-full flex flex-col p-8 rounded-xl glass">
                  <div className="flex-1">
                    <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-fg/60">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile carousel */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-xl glass"
            >
              <p className="text-lg mb-6 italic">"{testimonials[currentIndex].content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-fg/60">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent' : 'bg-fg/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
