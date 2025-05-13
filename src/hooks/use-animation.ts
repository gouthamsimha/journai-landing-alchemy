
import { useReducedMotion } from "framer-motion";

export function useAnimationConfig() {
  const prefersReducedMotion = useReducedMotion();
  
  const transition = {
    type: "spring",
    stiffness: 400,
    damping: 40,
    ease: [0.16, 1, 0.3, 1],
  };
  
  // Enhanced one-pager config
  const parallaxFactor = prefersReducedMotion ? 0 : -0.4;
  const animationDistance = prefersReducedMotion ? 8 : 40;
  
  // Additional animation configurations
  const revealAnimation = {
    initial: { opacity: 0, y: animationDistance },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition },
  };
  
  const staggerContainerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: animationDistance },
    visible: { 
      opacity: 1, 
      y: 0,
      transition
    }
  };
  
  return {
    transition,
    parallaxFactor,
    animationDistance,
    shouldReduceMotion: !!prefersReducedMotion,
    revealAnimation,
    staggerContainerAnimation,
    fadeInUpAnimation
  };
}
