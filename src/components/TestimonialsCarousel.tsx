
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useAnimationConfig } from '../hooks/use-animation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Refined testimonial data
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
  const { transition, shouldReduceMotion } = useAnimationConfig();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const controls = useAnimation();
  
  // Auto-slide every 6 seconds
  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);
  
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 6000);
  };
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Pause auto-slide on hover/interaction
  const pauseSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  // Resume auto-slide
  const resumeSlider = () => {
    startAutoSlide();
  };
  
  // Handle drag interactions
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    pauseSlider();
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
  };
  
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const difference = clientX - dragStartX;
    setDragOffset(difference);
  };
  
  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // If dragged far enough, change slide
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setDragOffset(0);
    resumeSlider();
  };

  // Calculate progress
  const progress = (currentIndex / (testimonials.length - 1)) * 100;

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
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
        
        <div className="max-w-4xl mx-auto relative">
          {/* Progress bar */}
          <div className="w-full h-1 bg-fg/10 rounded-full mb-8 overflow-hidden">
            <motion.div 
              className="h-full bg-accent"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute -top-12 right-0 flex space-x-2 z-20">
            <motion.button
              className="w-10 h-10 rounded-full flex items-center justify-center border border-fg/20 text-fg/70 hover:border-accent hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                pauseSlider();
                prevSlide();
                resumeSlider();
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="w-10 h-10 rounded-full flex items-center justify-center border border-fg/20 text-fg/70 hover:border-accent hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                pauseSlider();
                nextSlide();
                resumeSlider();
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
          
          <div 
            className="relative overflow-hidden"
            onMouseEnter={pauseSlider}
            onMouseLeave={resumeSlider}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            style={{ touchAction: 'pan-y' }}
          >
            {/* Enhanced carousel */}
            <div className="relative h-auto md:h-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="w-full"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: 1, 
                    x: isDragging ? dragOffset : 0,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="p-8 rounded-xl glass relative">
                    <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-accent"></div>
                    <div className="absolute -right-2 -bottom-2 w-4 h-4 rounded-full bg-accent/60"></div>
                    
                    <div className="mb-6">
                      <p className="text-lg md:text-xl italic">"{testimonials[currentIndex].content}"</p>
                    </div>
                    
                    <div className="flex items-center">
                      <motion.div
                        className="relative w-12 h-12 overflow-hidden rounded-full mr-4 border-2 border-accent/20"
                        whileHover={{ scale: 1.1 }}
                      >
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].name} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <h4 className="font-medium">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-fg/60">{testimonials[currentIndex].title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Enhanced carousel indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    pauseSlider();
                    setCurrentIndex(index);
                    resumeSlider();
                  }}
                  className="group flex items-center"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-accent scale-100' 
                        : 'bg-fg/20 scale-75 group-hover:bg-accent/50'
                    }`}
                    initial={false}
                    animate={{ 
                      scale: index === currentIndex ? 1 : 0.75,
                      opacity: index === currentIndex ? 1 : 0.5
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
