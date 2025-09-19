'use client';

// Framer Motion wrapper to handle Next.js App Router compatibility
import { 
  motion as framerMotion, 
  AnimatePresence as framerAnimatePresence,
  useAnimation,
  useInView,
  type MotionProps,
  type Variants
} from 'framer-motion';

// Re-export with proper typing
export const motion = framerMotion;
export const AnimatePresence = framerAnimatePresence;
export { useAnimation, useInView };
export type { MotionProps, Variants };
