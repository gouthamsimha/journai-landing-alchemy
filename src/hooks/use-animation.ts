
import { useReducedMotion } from "framer-motion";

export function useAnimationConfig() {
  const prefersReducedMotion = useReducedMotion();
  
  const transition = {
    type: "spring",
    stiffness: 400,
    damping: 40,
    ease: [0.16, 1, 0.3, 1],
  };
  
  const parallaxFactor = prefersReducedMotion ? 0 : -0.4;
  const animationDistance = prefersReducedMotion ? 8 : 40;
  
  return {
    transition,
    parallaxFactor,
    animationDistance,
    shouldReduceMotion: !!prefersReducedMotion
  };
}
